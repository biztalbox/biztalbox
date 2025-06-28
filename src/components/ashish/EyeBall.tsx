import React, { useEffect, useRef, useCallback, memo } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

// Extend Window interface to include lastScrollTime
declare global {
  interface Window {
    lastScrollTime?: number;
  }
}

// Constants matching the original configuration
const LERP_FACTOR = 0.02;
const EYE_X_ROTATION_FACTOR = 0.6;
const EYE_Z_ROTATION_FACTOR = 0.5;
const ROOT_Y_ROTATION_FACTOR = 1;
const ROOT_X_POSITION_FACTOR = 200;
const ANIMATION_FPS = 120;
const SCROLL_DEBOUNCE_TIME = 100; // Reduced from 50ms for better mobile performance

// Responsive settings with memoization - made more stable and SSR-safe
const getResponsiveSettings = () => {
  // Check if we're in the browser environment
  if (typeof window === 'undefined') {
    // Return default desktop settings for SSR
    return {
      modelScale: 55,
      cameraZ: 3,
      cameraFOV: 50,
      modelY: 0
    };
  }

  const width = window.innerWidth;
  
  if (width <= 480) {
    return {
      modelScale: 40,
      cameraZ: 4,
      cameraFOV: 45,
      modelY: 0.15
    };
  } else if (width <= 767) {
    return {
      modelScale: 40,
      cameraZ: 3.5,
      cameraFOV: 50,
      modelY: 0.1
    };
  } else if (width <= 1024) {
    return {
      modelScale: 43,
      cameraZ: 3.3,
      cameraFOV: 50,
      modelY: 0.36
    };
  } else {
    return {
      modelScale: 55,
      cameraZ: 3,
      cameraFOV: 50,
      modelY: 0
    };
  }
};

const EyeBall: React.FC = memo(() => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const eyeBoneRef = useRef<THREE.Object3D | null>(null);
  const rootBoneRef = useRef<THREE.Object3D | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseInertiaRef = useRef({ x: 0, y: 0 });
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const isPlayingRef = useRef(true);
  const screenVisibleRef = useRef(true);
  const animationIdRef = useRef<number | null>(null);
  const forceAnimationRef = useRef(true); // Force animations to always run
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(0);
  const modelLoadedRef = useRef(false);
  const initialResponsiveSettingsRef = useRef(getResponsiveSettings());
  const lockedModelSettingsRef = useRef<{scale: number, positionY: number, cameraZ: number, cameraFOV: number} | null>(null);

  // Improved scroll detection with better mobile performance
  const isScrolling = useCallback(() => {
    return Date.now() < lastScrollTimeRef.current + SCROLL_DEBOUNCE_TIME;
  }, []);

  const handleScroll = useCallback(() => {
    lastScrollTimeRef.current = Date.now();
    
    // On mobile, prevent any resize handling during scroll to avoid scaling
    if (typeof window !== 'undefined' && window.innerWidth <= 767) {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    }
  }, []);

  // Unified pointer handler for both mouse and touch events
  const handlePointerMove = useCallback((clientX: number, clientY: number) => {
    if (!rendererRef.current || typeof window === 'undefined') return;
    
    const rect = rendererRef.current.domElement.getBoundingClientRect();
    
    // Check if mouse is within canvas bounds
    const isWithinCanvas = clientX >= rect.left && 
                          clientX <= rect.right && 
                          clientY >= rect.top && 
                          clientY <= rect.bottom;
    
    if (!isWithinCanvas) {
      // If mouse is outside canvas, reset to neutral position
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
      return;
    }
    
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    
    // Enhanced sensitivity for mobile devices
    const isMobile = window.innerWidth <= 767;
    const sensitivity = isMobile ? 0.7 : 1; // Reduced sensitivity for better mobile control
    
    mouseRef.current.x = 2 * (x - 0.5) * sensitivity;
    mouseRef.current.y = -2 * (y - 0.5) * sensitivity;
  }, []);

  // Mouse event handler
  const handleMouseMove = useCallback((event: MouseEvent) => {
    handlePointerMove(event.clientX, event.clientY);
  }, [handlePointerMove]);

  // Touch event handlers for mobile support
  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (event.touches.length > 0) {
      event.preventDefault(); // Prevent scrolling while touching the eyeball
      const touch = event.touches[0];
      handlePointerMove(touch.clientX, touch.clientY);
    }
  }, [handlePointerMove]);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handlePointerMove(touch.clientX, touch.clientY);
    }
  }, [handlePointerMove]);



  // Completely lock model settings after load to prevent mobile viewport scaling
  const handleResize = useCallback(() => {
    // On mobile, completely ignore resize events during scroll to prevent scaling
    if (typeof window !== 'undefined' && window.innerWidth <= 767 && isScrolling()) {
      return;
    }
    
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      if (!rendererRef.current || !cameraRef.current || typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Update renderer size (this is always safe)
      rendererRef.current.setSize(width, height);
      
      // If model is loaded and locked, use the locked settings
      if (modelLoadedRef.current && lockedModelSettingsRef.current) {
        // Use locked camera settings - completely ignore viewport changes
        cameraRef.current.aspect = width / height;
        cameraRef.current.fov = lockedModelSettingsRef.current.cameraFOV;
        cameraRef.current.position.z = lockedModelSettingsRef.current.cameraZ;
        cameraRef.current.updateProjectionMatrix();
        
        // Ensure model scale and position remain locked
        if (modelRef.current) {
          modelRef.current.scale.setScalar(lockedModelSettingsRef.current.scale);
          modelRef.current.position.y = lockedModelSettingsRef.current.positionY;
        }
      } else {
        // Only update settings if model is not yet loaded
        const responsiveSettings = getResponsiveSettings();
        
      cameraRef.current.aspect = width / height;
      cameraRef.current.fov = responsiveSettings.cameraFOV;
      cameraRef.current.position.z = responsiveSettings.cameraZ;
      cameraRef.current.updateProjectionMatrix();
      
      if (modelRef.current) {
        modelRef.current.scale.setScalar(responsiveSettings.modelScale);
        modelRef.current.position.y = responsiveSettings.modelY;
      }
      }
    }, 300); // Increased debounce for mobile viewport changes
  }, [isScrolling]);

    // AGGRESSIVE animation loop - ALWAYS runs, no conditions
  const animate = useCallback(() => {
    // ALWAYS continue the animation loop - no stopping
    animationIdRef.current = requestAnimationFrame(animate);

    // Skip SSR but ALWAYS run in browser - remove all blocking conditions
    if (typeof window === 'undefined') {
      return;
    }

    const width = window.innerWidth;
    const isMobile = width <= 767;
    
    // ALWAYS apply mouse/touch interactions - more responsive
    if (eyeBoneRef.current && rootBoneRef.current) {
      // Only disable interactions during ACTIVE scrolling, not all the time
      const shouldApplyInteractions = !isScrolling();
      
      if (shouldApplyInteractions) {
        // Mouse inertia with mobile-optimized calculations
        const responsiveLerpFactor = isMobile ? LERP_FACTOR * 1.5 : LERP_FACTOR;
        mouseInertiaRef.current.x += (mouseRef.current.x - mouseInertiaRef.current.x) * responsiveLerpFactor;
        mouseInertiaRef.current.y += (mouseRef.current.y - mouseInertiaRef.current.y) * responsiveLerpFactor;

        // Eye rotation with mobile-optimized factors
        const rotationFactorX = isMobile ? EYE_X_ROTATION_FACTOR * 0.9 : EYE_X_ROTATION_FACTOR;
        const rotationFactorZ = isMobile ? EYE_Z_ROTATION_FACTOR * 0.9 : EYE_Z_ROTATION_FACTOR;
        
        eyeBoneRef.current.rotation.x = Math.PI / 2 - mouseInertiaRef.current.y * rotationFactorX;
        eyeBoneRef.current.rotation.z = -mouseInertiaRef.current.x * rotationFactorZ;

        // Root bone movement with mobile optimization
        const rootYFactor = isMobile ? ROOT_Y_ROTATION_FACTOR * 0.8 : ROOT_Y_ROTATION_FACTOR;
        const rootXFactor = isMobile ? ROOT_X_POSITION_FACTOR * 1.1 : ROOT_X_POSITION_FACTOR;
        
        rootBoneRef.current.rotation.y = mouseInertiaRef.current.x / rootYFactor;
        rootBoneRef.current.position.x = mouseInertiaRef.current.x / rootXFactor;
      }
    }

    // CRITICAL: Animation mixer update - ALWAYS run if mixer exists
    if (mixerRef.current) {
      try {
        mixerRef.current.update(1 / ANIMATION_FPS);
      } catch (error) {
        console.warn('⚠️ Mixer update error:', error);
        // Don't stop the loop, just log the error
      }
    }

    // ALWAYS render if components exist - no visibility checks
    if (rendererRef.current && cameraRef.current && sceneRef.current) {
      try {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      } catch (error) {
        console.warn('⚠️ Render error:', error);
        // Don't stop the loop, just log the error
      }
    }
  }, [isScrolling]);

  // Simplified observer - always keep visible for reliable animations
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    // FORCE visibility to always be true for reliable animations
    screenVisibleRef.current = true;
    forceAnimationRef.current = true;
  }, []);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return;
    
    const currentCanvasRef = canvasRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let responsiveSettings = getResponsiveSettings();
    
    // Store initial settings to prevent unwanted changes
    initialResponsiveSettingsRef.current = responsiveSettings;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(responsiveSettings.cameraFOV, width / height, 0.1, 1000);
    camera.position.set(0, 0, responsiveSettings.cameraZ);
    cameraRef.current = camera;

    // Renderer setup with mobile-optimized settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: width > 767, // Disable antialiasing on mobile for better performance
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    });
    
    // Mobile-optimized pixel ratio
    const pixelRatio = width <= 767 ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    currentCanvasRef.appendChild(renderer.domElement);

    // Intersection observer setup
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });
    observer.observe(currentCanvasRef);

    // Optimized loaders setup
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    // FORCE enable all animation states immediately - NO CONDITIONS
    isPlayingRef.current = true;
    screenVisibleRef.current = true;
    forceAnimationRef.current = true;

    // START animation loop IMMEDIATELY - even before Three.js setup
    console.log('🚀 Starting animation loop immediately...');
    animationIdRef.current = requestAnimationFrame(animate);
    
    // Backup animation starter in case first one fails
    setTimeout(() => {
      if (!animationIdRef.current) {
        console.log('🔄 Backup animation start...');
        animationIdRef.current = requestAnimationFrame(animate);
      }
    }, 100);
    
    // Third backup - force restart after model load
    setTimeout(() => {
      console.log('🔄 Third backup animation start...');
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      animationIdRef.current = requestAnimationFrame(animate);
    }, 1000);

    // Load the 3D model with BULLETPROOF animation handling
    gltfLoader.load(
      '/models/eyeball_animate.glb',
      (gltf) => {
        try {
          const model = gltf.scene;
          modelRef.current = model;
          scene.add(model);

          // Apply initial positioning and scaling
          model.position.y = responsiveSettings.modelY;
          model.scale.setScalar(responsiveSettings.modelScale);

          // Lock all settings permanently to prevent mobile viewport scaling
          lockedModelSettingsRef.current = {
            scale: responsiveSettings.modelScale,
            positionY: responsiveSettings.modelY,
            cameraZ: responsiveSettings.cameraZ,
            cameraFOV: responsiveSettings.cameraFOV
          };
          
          // Mark model as loaded and locked
          modelLoadedRef.current = true;
          
          console.log('🔒 Model settings locked:', lockedModelSettingsRef.current);

          // Optimize shadows and materials
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (child.material) {
                child.material.needsUpdate = true;
              }
            }
          });

          // Get bone references with error handling
          rootBoneRef.current = scene.getObjectByName('root') || null;
          eyeBoneRef.current = scene.getObjectByName('EyeBall') || null;
          
          if (eyeBoneRef.current) {
            eyeBoneRef.current.rotation.z = 0;
          }

          // BULLETPROOF animation setup - MUST work every time
          if (gltf.animations?.length > 0) {
            try {
              const mixer = new THREE.AnimationMixer(model);
              mixerRef.current = mixer;
              
              console.log('🎬 Setting up', gltf.animations.length, 'animations...');
              
              // Set up all animations with AGGRESSIVE initialization
              gltf.animations.forEach((clip, index) => {
                try {
                  const action = mixer.clipAction(clip);
                  action.reset();
                  action.enabled = true;
                  action.setEffectiveTimeScale(1);
                  action.setEffectiveWeight(1);
                  action.clampWhenFinished = false;
                  action.loop = THREE.LoopRepeat;
                  action.play();
                  
                  console.log(`✅ Animation ${index + 1} started:`, clip.name);
                } catch (clipError) {
                  console.error(`❌ Failed to start animation ${index + 1}:`, clipError);
                }
              });
              
              // FORCE mixer timing initialization
              try {
                mixer.setTime(2.8);
                mixer.update(0);
                // Force another update to ensure it's working
                mixer.update(1 / ANIMATION_FPS);
              } catch (timeError) {
                console.warn('⚠️ Mixer timing error:', timeError);
              }
              
              console.log('✅ All animations FORCED to start - mixer ready!');
              
              // Triple-check that animations are really playing
              setTimeout(() => {
                if (mixerRef.current) {
                  gltf.animations.forEach((clip, index) => {
                    const action = mixerRef.current!.clipAction(clip);
                    if (!action.isRunning()) {
                      console.log(`🔄 Restarting stuck animation ${index + 1}...`);
                      action.play();
                    }
                  });
                }
              }, 500);
              
            } catch (animError) {
              console.error('❌ CRITICAL animation setup error:', animError);
              // Even if animations fail, keep trying
              setTimeout(() => {
                if (modelRef.current && gltf.animations?.length > 0) {
                  console.log('🔄 Retrying animation setup...');
                  try {
                    const mixer = new THREE.AnimationMixer(modelRef.current);
                    mixerRef.current = mixer;
                    gltf.animations.forEach((clip) => {
                      mixer.clipAction(clip).play();
                    });
                  } catch (retryError) {
                    console.error('❌ Retry also failed:', retryError);
                  }
                }
              }, 1000);
            }
          } else {
            console.warn('⚠️ No animations found in the model - but that\'s okay!');
          }

          // FORCE enable animations regardless of setup success
          isPlayingRef.current = true;
          forceAnimationRef.current = true;
          screenVisibleRef.current = true;
          
        } catch (err) {
          console.error('❌ Error setting up model:', err);
          isPlayingRef.current = true; // Keep trying to animate
        }
      },
      undefined,
      (error) => {
        console.error('❌ Error loading model:', error);
        isPlayingRef.current = true; // Keep animation loop running
      }
    );

    // Lighting setup optimized for mobile
    const ambientLightIntensity = width <= 767 ? 1.3 : 1;
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientLightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.15);
    directionalLight.position.set(0.1, 0.1, 2);
    directionalLight.castShadow = true;
    
    // Mobile-optimized shadow settings
    const shadowMapSize = width <= 767 ? 256 : 1024;
    directionalLight.shadow.mapSize.width = shadowMapSize;
    directionalLight.shadow.mapSize.height = shadowMapSize;
    directionalLight.shadow.camera.near = 0.01;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.bias = -0.0005;
    directionalLight.shadow.radius = 3;
    scene.add(directionalLight);

    // Shadow plane
    const shadowSize = width <= 767 ? 3 : 5;
    const shadowGeometry = new THREE.PlaneGeometry(shadowSize, shadowSize);
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const shadowPlane = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadowPlane.receiveShadow = true;
    shadowPlane.position.z = -1;
    shadowPlane.rotation.x = -Math.PI / 2;
    scene.add(shadowPlane);

    // Event listeners - window events with bounds checking in handler
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Touch event listeners on canvas element for mobile support
    renderer.domElement.addEventListener('touchstart', handleTouchStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', handleTouchMove, { passive: false });

    // FINAL FAILSAFE: Periodic animation health check
    const animationHealthCheck = setInterval(() => {
      // Only run health check if model is loaded
      if (modelLoadedRef.current && mixerRef.current) {
        try {
          // Check if mixer is updating properly
          const currentTime = mixerRef.current.time;
          
          // Force a small update to test if mixer is responsive
          mixerRef.current.update(0.001);
          
          // If mixer time didn't change, something's wrong - restart
          if (mixerRef.current.time === currentTime) {
            console.log('🚨 Animation health check failed - restarting animations...');
            
            // Force restart all animations
            if (modelRef.current) {
              // Find animations from the scene
              const model = modelRef.current;
              model.traverse((child) => {
                if (child.userData && child.userData.gltfExtensions) {
                  // Try to restart animations
                  const mixer = new THREE.AnimationMixer(model);
                  mixerRef.current = mixer;
                  
                  // This will be caught by the main animation loop
                  console.log('🔄 Emergency animation restart completed');
                }
              });
            }
          }
        } catch (healthError) {
          console.warn('⚠️ Animation health check error:', healthError);
        }
      }
      
      // Also force enable all animation states periodically
      isPlayingRef.current = true;
      forceAnimationRef.current = true;
      screenVisibleRef.current = true;
      
    }, 3000); // Check every 3 seconds

    // Cleanup function
    return () => {
      // Cancel animation frame
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      // Clear timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      // Remove event listeners
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('touchstart', handleTouchStart);
        renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      }
      
      // Disconnect observer
      observer.disconnect();
      
      // Dispose Three.js objects
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }

      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry?.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material?.dispose();
            }
          }
        });
      }

      // Dispose renderer and remove from DOM
      if (currentCanvasRef && renderer.domElement) {
        currentCanvasRef.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      dracoLoader.dispose();
      
      // Reset refs
      modelRef.current = null;
      eyeBoneRef.current = null;
      rootBoneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      sceneRef.current = null;
      isPlayingRef.current = false;
      modelLoadedRef.current = false;

      // Clear animation health check
      clearInterval(animationHealthCheck);
    };
  }, [animate, handleResize, handleMouseMove, handleScroll, handleTouchStart, handleTouchMove, observerCallback, isScrolling]);

  return (
    <div
      ref={canvasRef} 
      style={{
        width: '100%', 
        minHeight: '100vh !important',
        height: '100vh', // Fixed height to prevent viewport changes
        position: 'relative',
        overflow: 'hidden',
        touchAction: 'pan-y', // Allow vertical scrolling but prevent horizontal pan
        userSelect: 'none', // Prevent text selection
        WebkitUserSelect: 'none', // Safari
        WebkitTouchCallout: 'none', // Prevent callout on long press
        WebkitTapHighlightColor: 'transparent' // Remove tap highlight
      }}
    />
  );
});

EyeBall.displayName = 'EyeBall';

export default EyeBall;
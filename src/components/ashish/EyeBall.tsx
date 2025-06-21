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

// Responsive settings with memoization
const getResponsiveSettings = () => {
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
  const isPlayingRef = useRef(true); // Start as true to ensure animations work
  const screenVisibleRef = useRef(true);
  const animationIdRef = useRef<number | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Optimized scroll detection
  const isScrolling = useCallback(() => {
    return window.lastScrollTime && Date.now() < window.lastScrollTime + 50;
  }, []);

  const handleScroll = useCallback(() => {
    window.lastScrollTime = Date.now();
  }, []);

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!rendererRef.current) return;
    
    const rect = rendererRef.current.domElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    
    const sensitivity = window.innerWidth <= 767 ? 0.8 : 1;
    mouseRef.current.x = 2 * (x - 0.5) * sensitivity;
    mouseRef.current.y = -2 * (y - 0.5) * sensitivity;
  }, []);

  // Optimized resize handler with debouncing
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      if (!rendererRef.current || !cameraRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      const responsiveSettings = getResponsiveSettings();
      
      // Update renderer
      rendererRef.current.setSize(width, height);
      
      // Update camera
      cameraRef.current.aspect = width / height;
      cameraRef.current.fov = responsiveSettings.cameraFOV;
      cameraRef.current.position.z = responsiveSettings.cameraZ;
      cameraRef.current.updateProjectionMatrix();
      
      // Update model scale and position
      if (modelRef.current) {
        modelRef.current.scale.setScalar(responsiveSettings.modelScale);
        modelRef.current.position.y = responsiveSettings.modelY;
      }
    }, 150);
  }, []);

  // Optimized animation loop
  const animate = useCallback(() => {
    // Always try to animate - simplified conditions for better reliability
    if (screenVisibleRef.current && isPlayingRef.current) {
      const width = window.innerWidth;
      
      // Only apply mouse interactions if not scrolling
      if (!isScrolling() && eyeBoneRef.current && rootBoneRef.current) {
        // Mouse inertia with optimized calculations
        const responsiveLerpFactor = width <= 767 ? LERP_FACTOR * 1.2 : LERP_FACTOR;
        mouseInertiaRef.current.x += (mouseRef.current.x - mouseInertiaRef.current.x) * responsiveLerpFactor;
        mouseInertiaRef.current.y += (mouseRef.current.y - mouseInertiaRef.current.y) * responsiveLerpFactor;

        // Eye rotation with responsive factors
        const rotationFactorX = width <= 767 ? EYE_X_ROTATION_FACTOR * 0.8 : EYE_X_ROTATION_FACTOR;
        const rotationFactorZ = width <= 767 ? EYE_Z_ROTATION_FACTOR * 0.8 : EYE_Z_ROTATION_FACTOR;
        
        eyeBoneRef.current.rotation.x = Math.PI / 2 - mouseInertiaRef.current.y * rotationFactorX;
        eyeBoneRef.current.rotation.z = -mouseInertiaRef.current.x * rotationFactorZ;

        // Root bone movement
        const rootYFactor = width <= 767 ? ROOT_Y_ROTATION_FACTOR * 0.7 : ROOT_Y_ROTATION_FACTOR;
        const rootXFactor = width <= 767 ? ROOT_X_POSITION_FACTOR * 1.2 : ROOT_X_POSITION_FACTOR;
        
        rootBoneRef.current.rotation.y = mouseInertiaRef.current.x / rootYFactor;
        rootBoneRef.current.position.x = mouseInertiaRef.current.x / rootXFactor;
      }

      // Animation mixer update - always update if mixer exists
      if (mixerRef.current) {
        mixerRef.current.update(1 / ANIMATION_FPS);
      }

      // Render only if visible
      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    }

    animationIdRef.current = requestAnimationFrame(animate);
  }, [isScrolling]);

  // Intersection observer for performance
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      screenVisibleRef.current = entry.isIntersecting;
    });
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const currentCanvasRef = canvasRef.current;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let responsiveSettings = getResponsiveSettings();

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(responsiveSettings.cameraFOV, width / height, 0.1, 1000);
    camera.position.set(0, 0, responsiveSettings.cameraZ);
    cameraRef.current = camera;

    // Renderer setup with optimized settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: window.innerWidth > 767,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    // Start animation loop immediately - don't wait for model loading
    animate();

    // Load the 3D model with improved animation handling
    gltfLoader.load(
      '/models/eyeball_animate.glb',
      (gltf) => {
        try {
          const model = gltf.scene;
          modelRef.current = model;
          scene.add(model);

          // Model positioning and scaling
          model.position.y = responsiveSettings.modelY;
          model.scale.setScalar(responsiveSettings.modelScale);

          // Optimize shadows
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              // Optimize materials
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

          // Animation setup - more robust handling
          if (gltf.animations?.length > 0) {
            try {
              const mixer = new THREE.AnimationMixer(model);
              mixerRef.current = mixer;
              
              // Play all animations and ensure they start properly
              gltf.animations.forEach((clip) => {
                const action = mixer.clipAction(clip);
                action.reset();
                action.play();
                // Ensure the action is enabled and has proper settings
                action.enabled = true;
                action.setEffectiveTimeScale(1);
                action.setEffectiveWeight(1);
              });
              
              // Set initial time and update
              mixer.setTime(2.8);
              mixer.update(0);
              
              console.log('Animations setup successfully:', gltf.animations.length, 'animations loaded');
            } catch (animError) {
              console.warn('Animation setup error:', animError);
              // Don't let animation errors stop the component from working
            }
          } else {
            console.warn('No animations found in the model');
          }

          // Ensure playing state is maintained
          isPlayingRef.current = true;
          
        } catch (err) {
          console.error('Error setting up model:', err);
          // Don't let model setup errors stop animations entirely
          isPlayingRef.current = true;
        }
      },
      undefined, // No progress callback needed since we removed the loader
      (error) => {
        console.error('Error loading model:', error);
        // Keep animations running even if model fails to load
        isPlayingRef.current = true;
      }
    );

    // Optimized lighting setup
    const ambientLightIntensity = width <= 767 ? 1.2 : 1;
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientLightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.15);
    directionalLight.position.set(0.1, 0.1, 2);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = width <= 767 ? 512 : 1024;
    directionalLight.shadow.mapSize.height = width <= 767 ? 512 : 1024;
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

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Cleanup function with comprehensive disposal
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
    };
  }, [animate, handleResize, handleMouseMove, handleScroll, observerCallback]);

  return (
    <div
      ref={canvasRef} 
      style={{
        width: '100%', 
        minHeight: '100vh !important',
        position: 'relative',
        overflow: 'hidden'
      }}
    />
  );
});

EyeBall.displayName = 'EyeBall';

export default EyeBall;
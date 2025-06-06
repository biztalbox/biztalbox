import React, { useEffect, useRef } from 'react';
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
const LERP_FACTOR = 0.02; // Mouse interpolation factor
const EYE_X_ROTATION_FACTOR = 0.6; // Y mouse influence on X rotation
const EYE_Z_ROTATION_FACTOR = 0.5; // X mouse influence on Z rotation
const ROOT_Y_ROTATION_FACTOR = 1; // Root bone Y rotation factor
const ROOT_X_POSITION_FACTOR = 200; // Root bone X position factor
const ANIMATION_FPS = 120; // Animation update rate

// Responsive scaling function
const getResponsiveSettings = () => {
  const width = window.innerWidth;
  
  if (width <= 480) {
    // Small Mobile
    return {
      modelScale: 40,
      cameraZ: 4,
      cameraFOV: 45,
      modelY: 0.2
    };
  } else if (width <= 767) {
    // Mobile
    return {
      modelScale: 40,
      cameraZ: 3.5,
      cameraFOV: 50,
      modelY: 0.1
    };
  } else if (width <= 1024) {
    // Tablet
    return {
      modelScale: 43,
      cameraZ: 3.3,
      cameraFOV: 50,
      modelY: 0.36
    };
  } else {
    // Desktop
    return {
      modelScale: 55,
      cameraZ: 3,
      cameraFOV: 50,
      modelY: 0
    };
  }
};

const EyeBall = () => {
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
  const isPlayingRef = useRef(false);
  const screenVisibleRef = useRef(true);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Capture current ref value to avoid stale closure in cleanup
    const currentCanvasRef = canvasRef.current;
    
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Get initial responsive settings
    let responsiveSettings = getResponsiveSettings();

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera - with responsive FOV and position
    const camera = new THREE.PerspectiveCamera(responsiveSettings.cameraFOV, width / height, 0.1, 1000);
    camera.position.set(0, 0, responsiveSettings.cameraZ);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    currentCanvasRef.appendChild(renderer.domElement);

    // Responsive resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Update responsive settings
      responsiveSettings = getResponsiveSettings();
      
      // Update renderer
      renderer.setSize(width, height);
      
      // Update camera
      camera.aspect = width / height;
      camera.fov = responsiveSettings.cameraFOV;
      camera.position.z = responsiveSettings.cameraZ;
      camera.updateProjectionMatrix();
      
      // Update model scale and position if model exists
      if (modelRef.current) {
        modelRef.current.scale.set(responsiveSettings.modelScale, responsiveSettings.modelScale, responsiveSettings.modelScale);
        modelRef.current.position.y = responsiveSettings.modelY;
      }
    };

    // Mouse move handler - with responsive sensitivity
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      
      // Normalize coordinates: 2 * (uv - 0.5)
      // Add responsive mouse sensitivity
      const sensitivity = width <= 767 ? 0.8 : 1; // Reduce sensitivity on mobile
      mouseRef.current.x = 2 * (x - 0.5) * sensitivity;
      mouseRef.current.y = -2 * (y - 0.5) * sensitivity; // Negative for correct Y direction
    };

    // Scroll detection for pausing during scroll (matching original)
    const isScrolling = () => {
      return window.lastScrollTime && new Date().getTime() < window.lastScrollTime + 50;
    };

    const handleScroll = () => {
      window.lastScrollTime = new Date().getTime();
    };

    // Viewport intersection observer for performance
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        screenVisibleRef.current = entry.isIntersecting;
      });
    };

    const observer = new IntersectionObserver(observerCallback);
    observer.observe(currentCanvasRef);

    // GLTF Loader setup
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    // Load the 3D model
    gltfLoader.load(
      '/models/eyeball_animate.glb', // Replace with your model path
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        scene.add(model);

        // Model positioning and scaling - responsive
        model.position.y = responsiveSettings.modelY;
        model.scale.set(responsiveSettings.modelScale, responsiveSettings.modelScale, responsiveSettings.modelScale);

        // Set up shadows
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
          }
        });

        // Get bone references - adjust names to match your model
        // Handle undefined return from getObjectByName by converting to null
        rootBoneRef.current = scene.getObjectByName('root') || null;
        eyeBoneRef.current = scene.getObjectByName('EyeBall') || null;
        
        if (eyeBoneRef.current) {
          eyeBoneRef.current.rotation.z = 0;
        }

        // Animation setup
        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          mixerRef.current = mixer;
          
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).reset().play();
          });
          
          mixer.setTime(2.8);
          mixer.update(1 / ANIMATION_FPS);
        }

        // Start animation after model loads
        isPlayingRef.current = true;
      },
      (progress) => {
        console.log('Loading progress:', progress);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Lighting setup - responsive lighting intensity
    const ambientLightIntensity = width <= 767 ? 1.2 : 1; // Slightly brighter on mobile
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientLightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    directionalLight.position.set(0.1, 0.1, 2);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = width <= 767 ? 512 : 1024; // Lower resolution on mobile for performance
    directionalLight.shadow.mapSize.height = width <= 767 ? 512 : 1024;
    directionalLight.shadow.camera.near = 0.01;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.bias = -0.0005;
    directionalLight.shadow.radius = 3;
    scene.add(directionalLight);

    // Shadow plane - responsive size
    const shadowSize = width <= 767 ? 3 : 5;
    const shadowGeometry = new THREE.PlaneGeometry(shadowSize, shadowSize);
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const shadowPlane = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadowPlane.receiveShadow = true;
    shadowPlane.position.z = -1;
    shadowPlane.rotation.x = -Math.PI / 2;
    scene.add(shadowPlane);

    // Animation loop - with responsive factors
    const animate = () => {
      // Only animate if not scrolling and screen is visible
      if (!isScrolling() && screenVisibleRef.current) {
        if (eyeBoneRef.current && isPlayingRef.current && rootBoneRef.current) {
          // Mouse inertia with lerp - responsive lerp factor
          const responsiveLerpFactor = width <= 767 ? LERP_FACTOR * 1.2 : LERP_FACTOR; // Slightly faster on mobile
          mouseInertiaRef.current.x += (mouseRef.current.x - mouseInertiaRef.current.x) * responsiveLerpFactor;
          mouseInertiaRef.current.y += (mouseRef.current.y - mouseInertiaRef.current.y) * responsiveLerpFactor;

          // Eye rotation - with responsive factors
          const rotationFactorX = width <= 767 ? EYE_X_ROTATION_FACTOR * 0.8 : EYE_X_ROTATION_FACTOR;
          const rotationFactorZ = width <= 767 ? EYE_Z_ROTATION_FACTOR * 0.8 : EYE_Z_ROTATION_FACTOR;
          
          eyeBoneRef.current.rotation.x = Math.PI / 2 - mouseInertiaRef.current.y * rotationFactorX;
          eyeBoneRef.current.rotation.z = 0 - mouseInertiaRef.current.x * rotationFactorZ;

          // Root bone movement - responsive
          const rootYFactor = width <= 767 ? ROOT_Y_ROTATION_FACTOR * 0.7 : ROOT_Y_ROTATION_FACTOR;
          const rootXFactor = width <= 767 ? ROOT_X_POSITION_FACTOR * 1.2 : ROOT_X_POSITION_FACTOR;
          
          rootBoneRef.current.rotation.y = mouseInertiaRef.current.x / rootYFactor;
          rootBoneRef.current.position.x = mouseInertiaRef.current.x / rootXFactor;
        }

        // Animation mixer update - matching original FPS
        if (mixerRef.current && isPlayingRef.current) {
          mixerRef.current.update(1 / ANIMATION_FPS);
        }

        // Render only if screen is visible
        if (screenVisibleRef.current) {
          renderer.render(scene, camera);
        }
      }

      requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Start animation loop
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      
      if (currentCanvasRef && renderer.domElement) {
        currentCanvasRef.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      dracoLoader.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef} 
      style={{
        width: '100%', 
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }} 
    />
  );
};

export default EyeBall;
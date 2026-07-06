'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

interface Model3DProps {
  className?: string;
  modelPath: string;
}

/**
 * Perf notes (important):
 * - The renderer, WebGL context and the .obj download are created only when
 *   the container is near the viewport (IntersectionObserver). Previously six
 *   instances each spun up a WebGL context + infinite rAF loop at page load,
 *   which blocked the main thread badly enough that Lighthouse reported
 *   "page stopped responding" on the dark home page.
 * - The rAF loop pauses entirely while the container is off-screen or the
 *   tab is hidden, and resumes when visible again.
 */
const Model3D: React.FC<Model3DProps> = ({ className, modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const visibleRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);

  // Activate (once) when the container approaches the viewport.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || active) return;
    if (typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: '50% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    // Get container dimensions
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;
    // Restrict zooming
    controls.minDistance = 3;
    controls.maxDistance = 7;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load 3D model
    const loader = new OBJLoader();
    loader.load(
      modelPath,
      (object) => {
        // Center the model
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);

        // Scale the model to fit the scene
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        object.scale.multiplyScalar(scale);

        scene.add(object);
        modelRef.current = object;
        requestRender();
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop — runs only while visible and tab is in foreground.
    const animate = () => {
      if (!visibleRef.current || document.hidden) {
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(animate);

      controls.update();

      if (modelRef.current) {
        modelRef.current.rotation.y -= 0.005;
      }

      renderer.render(scene, camera);
    };

    const requestRender = () => {
      if (rafRef.current === null && visibleRef.current && !document.hidden) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    // Pause/resume the loop as the container enters/leaves the viewport.
    let vio: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      vio = new IntersectionObserver(
        (entries) => {
          visibleRef.current = entries.some((e) => e.isIntersecting);
          requestRender();
        },
        { rootMargin: '10% 0px' }
      );
      vio.observe(container);
    } else {
      visibleRef.current = true;
      requestRender();
    }

    const onVisibilityChange = () => requestRender();
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      vio?.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      controls.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose?.();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.());
        else mat?.dispose?.();
      });
      modelRef.current = null;
    };
  }, [active, modelPath]);

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%', pointerEvents: 'none' }}/>;
};

export default Model3D;

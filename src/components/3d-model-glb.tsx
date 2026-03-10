'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ModelGLBProps {
  /** Nearest positioned ancestor must have an explicit height */
  className?: string;
  modelPath?: string;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  cameraZ?: number;
}

const ModelGLB: React.FC<ModelGLBProps> = ({
  className,
  modelPath = '/models/b-logo.glb',
  autoRotate = true,
  autoRotateSpeed = 0.8,
  cameraZ = 4,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ── Camera ─────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 1000);
    camera.position.z = cameraZ;

    // ── Renderer ───────────────────────────────────────────────────────────
    // outputColorSpace set BEFORE any texture upload prevents
    // GL_INVALID_OPERATION: glTexStorage2D: Texture is immutable
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    // Canvas absolutely fills the wrapper; setSize(w,h,false) keeps the
    // WebGL draw-buffer in sync without overriding the CSS 100%×100%
    const canvas = renderer.domElement;
    canvas.style.cssText = 'display:block;position:absolute;inset:0;width:100%;height:100%';
    wrapper.appendChild(canvas);

    // ── Controls ───────────────────────────────────────────────────────────
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = autoRotateSpeed;
    controls.enableZoom = false;
    controls.enablePan = false;

    // ── Lighting ───────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const key = new THREE.DirectionalLight(0xffffff, 2);
    key.position.set(5, 5, 5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(-5, 0, -5);
    scene.add(fill);

    // ── Load GLB ───────────────────────────────────────────────────────────
    let model: THREE.Group | null = null;

    new GLTFLoader().load(
      modelPath,
      (gltf) => {
        model = gltf.scene;

        // gltfjsx tells us the mesh (Cube001) lives at local position
        // [16.188, 6.22, 29]. Without updateMatrixWorld(true) first,
        // Box3.setFromObject treats all nodes as if they were at origin
        // because their matrixWorld hasn't been computed yet.
        model.updateMatrixWorld(true);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        if (maxDim > 0) {
          const s = 2.5 / maxDim;

          // Correct centering formula:
          //   world_pos(P) = model.position + model.scale × P
          //   For the bounding-box center (P = center) to land at world origin:
          //   0 = position + s × center  →  position = −s × center
          //
          // The old approach (position = −center, scale = s) gives:
          //   world = −center + s×center = (s−1)×center ≠ 0
          model.scale.set(s, s, s);
          model.position.set(-s * center.x, -s * center.y, -s * center.z);
        }

        scene.add(model);
      },
      undefined,
      (err) => console.error('[ModelGLB] load error:', err),
    );

    // ── Responsive sizing ──────────────────────────────────────────────────
    const syncSize = () => {
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    const ro = new ResizeObserver(syncSize);
    ro.observe(wrapper);
    syncSize();

    // ── Render loop ────────────────────────────────────────────────────────
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      controls.dispose();
      if (model) {
        model.traverse((node) => {
          const mesh = node as THREE.Mesh;
          if (!mesh.isMesh) return;
          mesh.geometry?.dispose();
          (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach((m) => {
            const mat = m as THREE.MeshStandardMaterial;
            mat.map?.dispose();
            mat.normalMap?.dispose();
            mat.roughnessMap?.dispose();
            mat.metalnessMap?.dispose();
            mat.emissiveMap?.dispose();
            mat.dispose();
          });
        });
      }
      if (wrapper.contains(canvas)) wrapper.removeChild(canvas);
      renderer.dispose();
    };
  }, [modelPath, autoRotate, autoRotateSpeed, cameraZ]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    />
  );
};

export default ModelGLB;

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const EyeballModel = ({ textureUrl }: { textureUrl: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture(textureUrl);
  const { scene } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const modelRef = useRef<THREE.Object3D | null>(null);

  // Mouse move event
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Load OBJ model dynamically
  useEffect(() => {
    let mounted = true;
    import('three/examples/jsm/loaders/OBJLoader.js').then(({ OBJLoader }) => {
      const loader = new OBJLoader();
      loader.load(
        "/models/eyeball.obj",
        (object) => {
          if (!mounted) return;
          // Center and scale
          const box = new THREE.Box3().setFromObject(object);
          const center = box.getCenter(new THREE.Vector3());
          object.position.sub(center);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 3 / maxDim;
          object.scale.multiplyScalar(scale);
          // Apply texture
          object.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ map: texture });
            }
          });
          if (groupRef.current) {
            groupRef.current.clear();
            groupRef.current.add(object);
            modelRef.current = object;
          }
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );
    });
    return () => { mounted = false; };
  }, [textureUrl, texture]);

  // Animate model to follow mouse
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += ((mouse.current.x * 0.7) - modelRef.current.rotation.y) * 0.1;
      modelRef.current.rotation.x += ((mouse.current.y * 0.7) - modelRef.current.rotation.x) * 0.1;
    }
  });

  return <group ref={groupRef} />;
};

const EyeBall = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <EyeballModel textureUrl="/assets/image/team/ashish.webp" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default EyeBall;

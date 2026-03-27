"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Group } from "three";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WigglingModel({ scene }: { scene: Group }) {
  const groupRef = useRef<Group>(null);



  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const g = groupRef.current;
    if (!g) return;
    g.rotation.x = Math.sin(t * 2.1) * 0.08;
    g.rotation.z = Math.cos(t * 1.7) * 0.1;
    g.rotation.y = Math.sin(t * 2.4) * 0.06;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

const MyCanvas = () => {

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  const can = useGLTF("/assets/lite_models/can.glb");
  const canRef = useRef<Group>(can.scene);
  // const packet = useGLTF("/assets/lite_models/packet.glb");
  // const chocolate = useGLTF("/assets/lite_models/chocolate.glb");
  // const tube = useGLTF("/assets/lite_models/tube.glb");

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section0",
        endTrigger: "#section4",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: true,
      },
    })

    tl.to(canRef.current.rotation, {
      x: "-8",
    })


    
  })


  return (
    <>
      {LITE_MODELS.map((m) => {
        const scene = sceneBySrc.get(m.src);
        if (!scene) return null;
        return (
          <WigglingModel
            key={m.id}
            scene={scene}
            position={m.position}
            animation={m.animation}
            phase={m.phase}
            speed={m.speed}
            scale={m.scale}
            rotation={m.rotation}
            scrollRef={m.scrollDriven ? scrollTargetRef : undefined}
          />
        );
      })}
      <ambientLight intensity={5.50} />
      <hemisphereLight args={["#f5f5ff", "#3a3a3a", 5.55]} />
      {/* Key: front-right-top → fills faces visible from camera side */}
      <directionalLight position={[140, 120, 160]} intensity={1.35} color="#ffffff" />
      {/* Fill: left side → opens shadows on packet / left objects */}
      <directionalLight position={[-130, 70, 90]} intensity={5.65} color="#eef2ff" />
      {/* Rim: from behind → separates models from background, reads tube & chocolate depth */}
      <directionalLight position={[40, 90, -160]} intensity={5.75} color="#ffffff" />
      {/* Low front bounce → underside / bottom of can & tube */}
      <directionalLight position={[0, -80, 120]} intensity={5.35} color="#d4d4d8" />
      {/* <OrbitControls /> */}
    </>
  );
};

export default MyCanvas;

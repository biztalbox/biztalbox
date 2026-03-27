"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import type { WiggleAnimation } from "./lite-models";

export type WigglingModelProps = {
  scene: Group;
  position?: [number, number, number];
  animation?: WiggleAnimation;
  phase?: number;
  speed?: number;
  scrollRef?: RefObject<Group>;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
};

export function WigglingModel({
  scene,
  position = [0, 0, 0],
  animation = { x: 0.08, y: 0.06, z: 0.1 },
  phase = 0,
  speed = 1,
  scrollRef,
  scale = 1,
  rotation = [0, 0, 0],
}: WigglingModelProps) {
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const wiggleRef = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + phase;
    const g = wiggleRef.current;
    if (!g) return;
    g.rotation.x = Math.sin(t * 2.1) * animation.x;
    g.rotation.z = Math.cos(t * 1.7) * animation.z;
    g.rotation.y = Math.sin(t * 2.4) * animation.y;
  });

  const scaleTuple: [number, number, number] =
    typeof scale === "number" ? [scale, scale, scale] : scale;

  return (
    <group
      ref={scrollRef}
      position={position}
      rotation={rotation}
      scale={scaleTuple}
    >
      <group ref={wiggleRef}>
        <primitive object={cloned} />
      </group>
    </group>
  );
}

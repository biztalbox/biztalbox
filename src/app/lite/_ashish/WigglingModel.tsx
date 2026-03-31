"use client";

import { useMemo, type Ref } from "react";
import { Float } from "@react-three/drei";
import type { Group } from "three";

type FloatConfig = {
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
};

export type WigglingModelProps = {
  scene: Group;
  position?: [number, number, number];
  floatConfig?: FloatConfig;
  /** Outer wrapper group (scroll / GSAP targets this). */
  groupRef?: Ref<Group>;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
};

export function WigglingModel({
  scene,
  position = [0, 0, 0],
  floatConfig,
  groupRef,
  scale = 1,
  rotation = [0, 0, 0],
}: WigglingModelProps) {
  const cloned = useMemo(() => scene.clone(true), [scene]);

  const scaleTuple: [number, number, number] =
    typeof scale === "number" ? [scale, scale, scale] : scale;

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scaleTuple}
    >
      <Float
        speed={floatConfig?.speed ?? 1}
        rotationIntensity={floatConfig?.rotationIntensity ?? 1}
        floatIntensity={floatConfig?.floatIntensity ?? 1}
        floatingRange={floatConfig?.floatingRange ?? [-0.1, 0.1]}
      >
        <primitive object={cloned} />
      </Float>
    </group>
  );
}

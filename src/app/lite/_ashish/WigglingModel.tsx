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
  /** When true, skip `<Float>` so scripted drop / GSAP motion matches the mesh 1:1. */
  disableFloat?: boolean;
};

export function WigglingModel({
  scene,
  position = [0, 0, 0],
  floatConfig,
  groupRef,
  scale = 1,
  rotation = [0, 0, 0],
  disableFloat = false,
}: WigglingModelProps) {
  const cloned = useMemo(() => scene.clone(true), [scene]);

  const scaleTuple: [number, number, number] =
    typeof scale === "number" ? [scale, scale, scale] : scale;

  const mesh = <primitive object={cloned} />;

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scaleTuple}
    >
      {disableFloat ? (
        mesh
      ) : (
        <Float
          speed={floatConfig?.speed ?? 1}
          rotationIntensity={floatConfig?.rotationIntensity ?? 1}
          floatIntensity={floatConfig?.floatIntensity ?? 1}
          floatingRange={floatConfig?.floatingRange ?? [-0.1, 0.1]}
        >
          {mesh}
        </Float>
      )}
    </group>
  );
}

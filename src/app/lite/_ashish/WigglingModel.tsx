"use client";

import { useMemo, type RefObject } from "react";
import { Float } from "@react-three/drei";
import type { Group } from "three";
import type { FloatConfig } from "./lite-models";

export type WigglingModelProps = {
  scene: Group;
  position?: [number, number, number];
  floatConfig?: FloatConfig;
  scrollRef?: RefObject<Group | null>;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
};

export function WigglingModel({
  scene,
  position = [0, 0, 0],
  floatConfig,
  scrollRef,
  scale = 1,
  rotation = [0, 0, 0],
}: WigglingModelProps) {
  const cloned = useMemo(() => scene.clone(true), [scene]);

  const scaleTuple: [number, number, number] =
    typeof scale === "number" ? [scale, scale, scale] : scale;

  return (
    <group
      ref={scrollRef}
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

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

/** Softer idle motion on narrow viewports — same meshes/materials; only animation amplitude drops. */
function softenFloatConfig(config: FloatConfig | undefined): FloatConfig {
  const base = config ?? {};
  const [lo, hi] = base.floatingRange ?? [-0.1, 0.1];
  return {
    ...base,
    speed: (base.speed ?? 1) * 0.42,
    rotationIntensity: (base.rotationIntensity ?? 1) * 0.48,
    floatIntensity: (base.floatIntensity ?? 1) * 0.52,
    floatingRange: [lo * 0.62, hi * 0.62],
  };
}

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
  /** Reduce Float amplitude for GPU savings; does not change geometry or textures. */
  floatSoft?: boolean;
};

export function WigglingModel({
  scene,
  position = [0, 0, 0],
  floatConfig,
  groupRef,
  scale = 1,
  rotation = [0, 0, 0],
  disableFloat = false,
  floatSoft = false,
}: WigglingModelProps) {
  const cloned = useMemo(() => scene.clone(true), [scene]);

  const scaleTuple: [number, number, number] =
    typeof scale === "number" ? [scale, scale, scale] : scale;

  const resolvedFloat = useMemo(
    () => (floatSoft ? softenFloatConfig(floatConfig) : floatConfig),
    [floatConfig, floatSoft],
  );

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
          speed={resolvedFloat?.speed ?? 1}
          rotationIntensity={resolvedFloat?.rotationIntensity ?? 1}
          floatIntensity={resolvedFloat?.floatIntensity ?? 1}
          floatingRange={resolvedFloat?.floatingRange ?? [-0.1, 0.1]}
        >
          {mesh}
        </Float>
      )}
    </group>
  );
}

"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

const WOOSH_SRC = "/assets/lite_models/woosh.mpeg";

type ShootSource = "button" | "pointer";

export type DartShootOptions = {
  source?: ShootSource;
  /** Runs before the shoot animation starts. */
  onBeforeAnimate?: () => void;
};

type DartSceneProps = {
  onShootReady?: (shoot: (options?: DartShootOptions) => boolean) => void;
};

const DartScene = ({ onShootReady }: DartSceneProps) => {
  const dartModel = useGLTF("/assets/lite_models/dartboard2.glb");
  const { actions } = useAnimations(dartModel.animations, dartModel.scene);
  const wooshRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(WOOSH_SRC);
    audio.preload = "auto";
    audio.setAttribute("playsinline", "");
    audio.load();
    wooshRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      wooshRef.current = null;
    };
  }, []);

  const playShootAnimation = useCallback(() => {
    if (!actions["Animation"]) return false;

    const dart = actions["Animation"];
    dart.reset();
    dart.setLoop(THREE.LoopOnce, 1);
    dart.clampWhenFinished = true;
    dart.play();

    const woosh = wooshRef.current;
    if (woosh) {
      woosh.pause();
      woosh.currentTime = 0;
      void woosh.play().catch(() => {});
    }

    return true;
  }, [actions]);

  const tryShoot = useCallback(
    (options: DartShootOptions = {}) => {
      options.onBeforeAnimate?.();
      return playShootAnimation();
    },
    [playShootAnimation],
  );

  useEffect(() => {
    onShootReady?.(tryShoot);
  }, [onShootReady, tryShoot]);

  return (
    <group scale={0.12} position={[-2, 0, 0]}>
      <primitive object={dartModel.scene} />
    </group>
  );
};

export default DartScene;

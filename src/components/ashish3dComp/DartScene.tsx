"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

import { isDartDesktopViewport } from "./dart-viewport";

const WOOSH_SRC = "/assets/lite_models/woosh.mpeg";
/** GLB node name that accepts desktop pointer hits (dartboard2.glb). */
export const DART_HIT_MESH_NAME = "Object_0033_4";

type ShootSource = "button" | "pointer";

export type DartShootOptions = {
  source?: ShootSource;
  /** Viewport client coordinates — required for desktop button hit-test. */
  screenX?: number;
  screenY?: number;
  /** Runs after validation passes, before the shoot animation starts. */
  onBeforeAnimate?: () => void;
};

type DartSceneProps = {
  onShootReady?: (shoot: (options?: DartShootOptions) => boolean) => void;
  setWow?: (wow: boolean) => void;
  setDiss?: (diss: boolean) => void;
};

function isTargetDartMesh(object: THREE.Object3D | null | undefined) {
  if (!object) return false;

  let node: THREE.Object3D | null = object;
  while (node) {
    if (node.name === DART_HIT_MESH_NAME) return true;
    node = node.parent;
  }

  return false;
}

const DartScene = ({ onShootReady, setWow, setDiss }: DartSceneProps) => {
  const dartModel = useGLTF("/assets/lite_models/dartboard2.glb");
  const { actions } = useAnimations(dartModel.animations, dartModel.scene);
  const { camera, size } = useThree();
  const wooshRef = useRef<HTMLAudioElement | null>(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const ndcRef = useRef(new THREE.Vector2());

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

  const isScreenPointOnTargetMesh = useCallback(
    (screenX: number, screenY: number) => {
      if (!(camera instanceof THREE.PerspectiveCamera)) return false;

      ndcRef.current.set(
        (screenX / size.width) * 2 - 1,
        -(screenY / size.height) * 2 + 1,
      );
      raycasterRef.current.setFromCamera(ndcRef.current, camera);

      const hits = raycasterRef.current.intersectObject(dartModel.scene, true);
      return hits.some((hit) => isTargetDartMesh(hit.object));
    },
    [camera, dartModel.scene, size.height, size.width],
  );

  const playShootAnimation = useCallback(() => {
    setWow?.(true);
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
      const source = options.source ?? "button";

      if (isDartDesktopViewport() && source === "button") {
        const { screenX, screenY } = options;
        if (screenX == null || screenY == null) {
          setDiss?.(true);
          return false;
        }
        if (!isScreenPointOnTargetMesh(screenX, screenY)) {
          setDiss?.(true);
          return false;
        }
      }

      options.onBeforeAnimate?.();
      return playShootAnimation();
    },
    [isScreenPointOnTargetMesh, playShootAnimation],
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

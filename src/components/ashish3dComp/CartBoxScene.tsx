"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LITE_CART_GLB_URL } from "./lite-model-assets";

gsap.registerPlugin(ScrollTrigger);

const CART_BOX_GLB = LITE_CART_GLB_URL;
const ANIMATION_CLIP_NAME = "Animation";
const CTA_SCROLL_ANCHOR = "#ctaScrollAnchor";
const CTA_SECTION = "#ctaSection";

// Preload + parse the cart GLB as soon as this module is imported (LiteHero
// mounts it while the route loader / Dart intro is still on screen), so the
// model is cached well before the idle-deferred CartCanvas mounts. Without this
// the GLB only started loading on canvas mount, so it popped in mid-animation.
if (typeof window !== "undefined") {
  useGLTF.preload(CART_BOX_GLB);
}

function findAnimationClip(animations: THREE.AnimationClip[]) {
  return (
    animations.find((clip) => clip.name === ANIMATION_CLIP_NAME) ??
    animations[0] ??
    null
  );
}

function resolveCtaTriggerEl() {
  return (
    document.querySelector(CTA_SCROLL_ANCHOR) ??
    document.querySelector(CTA_SECTION)
  );
}

const CartBoxScene = () => {
  const { scene, animations } = useGLTF(CART_BOX_GLB);
  const model = useMemo(() => scene.clone(true), [scene]);
  const { gl, scene: renderScene, camera } = useThree();

  useEffect(() => {
    const clip = findAnimationClip(animations);
    if (!clip) return;

    const triggerEl = resolveCtaTriggerEl();
    if (!triggerEl) return;

    const mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.reset();
    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.enabled = true;
    action.play();
    action.paused = true;

    const applyTime = (normalized: number) => {
      action.time = THREE.MathUtils.clamp(normalized, 0, 1) * clip.duration;
      mixer.update(0);
    };

    applyTime(0);

    // First-scroll jitter fix: the very first time the model animates, the GPU
    // has to compile shader programs (including the HDR-environment permutation)
    // and upload skinning/morph buffers, which stutters. Do that work up-front
    // while the canvas is still ~1.5 screens away, so the first real scroll is
    // as smooth as every subsequent pass. Stepping the clip forces every pose's
    // buffers to be realized, and gl.render links + uploads them synchronously.
    let warmUpRaf = 0;
    const warmUp = () => {
      gl.compile(renderScene, camera);
      const samples = 8;
      for (let i = 0; i <= samples; i += 1) {
        applyTime(i / samples);
        gl.render(renderScene, camera);
      }
      applyTime(0);
    };
    warmUp();
    // Re-run next frame in case the HDR environment map just finished loading
    // and introduced a fresh shader permutation that wasn't warm on pass one.
    warmUpRaf = requestAnimationFrame(warmUp);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      applyTime(1);
      return () => {
        cancelAnimationFrame(warmUpRaf);
        action.stop();
        mixer.stopAllAction();
        mixer.uncacheRoot(model);
      };
    }

    const progress = { value: 0 };
    const tl = gsap.timeline({ paused: true });
    tl.to(progress, {
      value: 1,
      duration: 1,
      ease: "none",
      onUpdate: () => applyTime(progress.value),
    });

    const isMobile = window.innerWidth < 768;
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerEl,
      start: "top bottom",
      end: "top top",
      scrub: isMobile ? 7 : 7,
      invalidateOnRefresh: true,
      fastScrollEnd: window.innerWidth < 1024,
      animation: tl,
    });

    // Lazy canvas can mount while user is already mid-CTA — snap scrub to real
    // scroll once. The canvas is position:absolute + pointer-events-none, so its
    // mount can't shift the trigger's geometry; a global ScrollTrigger.refresh()
    // here is unnecessary and, when it lands mid-scroll, forces a reflow that
    // hitches the very first animation pass. Just sync the timeline progress.
    const syncScrubToScroll = () => {
      tl.progress(scrollTrigger.progress);
      applyTime(progress.value);
    };

    let syncRaf = requestAnimationFrame(() => {
      syncRaf = requestAnimationFrame(syncScrubToScroll);
    });

    return () => {
      cancelAnimationFrame(warmUpRaf);
      cancelAnimationFrame(syncRaf);
      scrollTrigger.kill();
      tl.kill();
      action.stop();
      mixer.stopAllAction();
      mixer.uncacheRoot(model);
    };
  }, [model, animations]);

  return (
    <group scale={0.15} rotation={[0, 3.6, 0]} position={[0, -7, 0]}>
      <primitive object={model} />
    </group>
  );
};

export default CartBoxScene;

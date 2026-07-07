"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CART_BOX_GLB = "/assets/lite_models/minified/cart_box.glb";
const ANIMATION_CLIP_NAME = "Animation";
const CTA_SCROLL_ANCHOR = "#ctaScrollAnchor";
const CTA_SECTION = "#ctaSection";
const LITE_SCROLL_LAYOUT_READY = "lite:scroll-layout-ready";

// NOTE: module-level `useGLTF.preload(CART_BOX_GLB)` was removed on purpose.
// It forced the (large) cart model to download during the initial page load,
// destroying LCP/TBT. The model now loads only when <CartCanvas /> mounts its
// lazy canvas (see CartCanvas.tsx), shortly before the section scrolls into view.

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

  useEffect(() => {
    const clip = findAnimationClip(animations);
    if (!clip) return;

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

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      applyTime(1);
      return () => {
        action.stop();
        mixer.stopAllAction();
        mixer.uncacheRoot(model);
      };
    }

    const progress = { value: 0 };
    let tl: gsap.core.Timeline | null = null;
    let scrollTrigger: ScrollTrigger | null = null;

    const disposeScroll = () => {
      scrollTrigger?.kill();
      scrollTrigger = null;
      tl?.kill();
      tl = null;
      progress.value = 0;
      applyTime(0);
    };

    const mountScroll = () => {
      const triggerEl = resolveCtaTriggerEl();
      if (!triggerEl) return;

      disposeScroll();

      tl = gsap.timeline({ paused: true });
      tl.to(progress, {
        value: 1,
        duration: 1,
        ease: "none",
        onUpdate: () => applyTime(progress.value),
      });

      scrollTrigger = ScrollTrigger.create({
        trigger: triggerEl,
        start: "top bottom",
        end: "top top",
        scrub: window.innerWidth < 768 ? 5 : 7,
        invalidateOnRefresh: true,
        fastScrollEnd: window.innerWidth < 1024,
        animation: tl,
        onLeaveBack: () => {
          tl?.pause(0);
          tl?.progress(0);
          progress.value = 0;
          applyTime(0);
        },
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    };

    const onLayoutReady = () => mountScroll();

    window.addEventListener(LITE_SCROLL_LAYOUT_READY, onLayoutReady);
    window.addEventListener("lite:loader-hidden", onLayoutReady);

    // If service scan pins never mount (no hero canvas), still enable CTA scrub.
    const fallbackTimer = window.setTimeout(() => {
      if (!scrollTrigger) mountScroll();
    }, 3000);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener(LITE_SCROLL_LAYOUT_READY, onLayoutReady);
      window.removeEventListener("lite:loader-hidden", onLayoutReady);
      disposeScroll();
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

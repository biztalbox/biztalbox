"use client";

import Header from "@/app/_lite/_ashish/Header";
import Ashish3dCanvas from "./Ashish3dCanvas";
import DartCanvas from "./DartCanvas";
import LiteHeroSections from "./LiteHeroSections";
import { useEffect, useState } from "react";
import CartCanvas from "./CartCanvas";
import LiteVolumeButton from "./LiteVolumeButton";
import Wrapper from "@/layouts/wrapper";

/**
 * Flip to `true` to show the dart intro overlay before the lite page.
 * When `false`, the lite page (header + Ashish3d + sections) loads immediately.
 */
const ENABLE_DART_CANVAS = false;

/**
 * Lite homepage hero — 3D canvas layer + scroll DOM sections (v2 layout).
 */
export default function LiteHero() {
  const [showDartCanvas, setShowDartCanvas] = useState(ENABLE_DART_CANVAS);
  const [showAshish3dCanvas, setShowAshish3dCanvas] = useState(!ENABLE_DART_CANVAS);

  useEffect(() => {
    if (!ENABLE_DART_CANVAS) {
      document.body.style.overflow = "auto";
    }
  }, []);

  const handleEnter = () => {
    setTimeout(() => {
      setShowDartCanvas(false);
      document.body.style.overflow = "auto";
    }, 2800);

    setTimeout(() => {
      setShowAshish3dCanvas(true);
    }, 1000);
  };

  return (
    <div className="relative">
      {showDartCanvas && <DartCanvas onEnter={handleEnter} />}
      <Wrapper>
        <Header />
        {showAshish3dCanvas && <Ashish3dCanvas />}
        <LiteHeroSections />
        <CartCanvas />
        <LiteVolumeButton />
      </Wrapper>
    </div>
  );
}

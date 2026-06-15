"use client";

import Ashish3dCanvas from "./Ashish3dCanvas";
import DartCanvas from "./DartCanvas";
import LiteHeroSections from "./LiteHeroSections";
import { useState } from "react";

/**
 * Lite homepage hero — 3D canvas layer + scroll DOM sections (v2 layout).
 */
export default function LiteHero() {
  const [showDartCanvas, setShowDartCanvas] = useState(true);
  const handleEnter = () => {

    setTimeout(() => {
      setShowDartCanvas(false);
      document.body.style.overflow = 'auto';
    }, 2500);
  }
  return (
    <div className="relative">
      {showDartCanvas && <DartCanvas onEnter={handleEnter} />}
      <Ashish3dCanvas />
      <LiteHeroSections />
    </div>
  );
}

"use client";

import Ashish3dCanvas from "./Ashish3dCanvas";
import LiteHeroSections from "./LiteHeroSections";

/**
 * Lite homepage hero — 3D canvas layer + scroll DOM sections (v2 layout).
 */
export default function LiteHero() {
  return (
    <div className="relative">
      <Ashish3dCanvas />
      <LiteHeroSections />
    </div>
  );
}

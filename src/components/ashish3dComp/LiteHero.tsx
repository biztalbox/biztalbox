"use client";

import Header from "@/app/_lite/_ashish/Header";
import Ashish3dCanvas from "./Ashish3dCanvas";
import DartCanvas from "./DartCanvas";
import LiteHeroSections from "./LiteHeroSections";
import { useState } from "react";
import CartCanvas from "./CartCanvas";
import Wrapper from "@/layouts/wrapper";

/**
 * Lite homepage hero — 3D canvas layer + scroll DOM sections (v2 layout).
 */
export default function LiteHero() {
  const [showDartCanvas, setShowDartCanvas] = useState(true);
  const [showAshish3dCanvas, setShowAshish3dCanvas] = useState(false);
  const handleEnter = () => {

    setTimeout(() => {
      setShowDartCanvas(false);
      document.body.style.overflow = 'auto';
    }, 2800);

    setTimeout(() => {
      setShowAshish3dCanvas(true);
    }, 1000);
  }
  return (
    <div className="relative">
      {showDartCanvas && <DartCanvas onEnter={handleEnter} />}
      <Wrapper>
      <Header />
      {showAshish3dCanvas && <Ashish3dCanvas />}
      <LiteHeroSections />

      <CartCanvas />
      </Wrapper>
    </div>
  );
}

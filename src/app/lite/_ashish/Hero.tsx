"use client";

import Image from "next/image";
import MyCanvas from "./MyCanvas";
import { Canvas, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import * as THREE from "three";
import { LITE_HERO_SURFACE_STYLE } from "./lite-hero-surface";

const SECTION3_SEO_IMAGE_SRC =
  "https://biztalbox.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseo.0f33ee3b.webp&w=1200&q=75";

/** Tweaks default perspective camera when the canvas resizes so the scene reads on phones and tablets. */
function ResponsiveHeroCamera() {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const w = size.width;
    if (w < 480) {
      camera.fov = 82;
      camera.position.set(-4, 255, 440);
    } else if (w < 640) {
      camera.fov = 78;
      camera.position.set(-4, 268, 495);
    } else if (w < 1024) {
      camera.fov = 74;
      camera.position.set(-4, 285, 560);
    } else {
      camera.fov = 70;
      camera.position.set(-4, 303, 622);
    }
    camera.updateProjectionMatrix();
  }, [camera, size.width]);
  return null;
}

const Hero = () => {
  return (
    <div className="relative">
      <section id="section0" className="relative min-h-[100svh] overflow-hidden" style={LITE_HERO_SURFACE_STYLE}>
        <Canvas
          className="!fixed top-0 z-10 h-full w-full inset-0"
          dpr={[1, 2]}
          gl={{ alpha: true }}
          style={{ background: "transparent" }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 0);
          }}
          camera={{ position: [-4, 303, 622], fov: 70 }}
        >
          <ResponsiveHeroCamera />
          <MyCanvas />
        </Canvas>

        <div
          className="relative z-10 min-h-[100svh] w-full px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(5rem,env(safe-area-inset-top)+3.5rem)] text-black sm:px-6 sm:pb-10 sm:pt-24 md:px-8"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif' }}
        >
          {/* Left vertical — hidden on narrow screens to free horizontal space */}
          <div className="absolute left-2 top-1/2 hidden -translate-y-1/2 min-[400px]:block sm:left-4">
            <div
              className="text-[8px] tracking-[0.18em] text-black/80 sm:text-[10px] sm:tracking-[0.2em]"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              STORE © WELCOME
            </div>
          </div>

          <div className="grid min-h-0 grid-rows-[auto_auto] content-start sm:min-h-[calc(100svh-6rem)] sm:grid-rows-[auto_1fr_auto] sm:content-stretch">
            {/* Center — mobile: natural height only; sm+: fills middle row for vertical centering */}
            <div className="flex items-start justify-center pt-2 max-sm:self-start sm:-translate-y-4 sm:items-center sm:pt-0">
              <div className="w-full max-w-[1120px] px-1 text-center sm:px-0">
                <h1
                  className="mx-auto leading-[0.88] sm:leading-[0.9]"
                  style={{
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    fontSize: "clamp(2rem, 10vw + 0.5rem, 12.5rem)",
                  }}
                >
                  DIGITAL
                  <br />
                  PRODUCTS
                </h1>

                <div
                  className="mt-3 flex flex-col items-center justify-center gap-1 text-[11px] uppercase tracking-[0.1em] sm:mt-5 sm:flex-row sm:gap-0 sm:text-base sm:tracking-[0.12em]"
                  style={{ fontWeight: 500 }}
                >
                  <span>FOR CONTEMPORARY</span>
                  <span className="leading-none sm:px-1" aria-hidden>
                    ✖
                  </span>
                  <span>BRANDS</span>
                </div>

                <p
                  className="mx-auto mt-2 max-w-[780px] px-1 text-[9px] leading-[1.65] text-black/75 sm:mt-3 sm:px-0 sm:text-[10px]"
                  style={{ letterSpacing: "0.06em" }}
                >
                  WE CRAFT UNIQUE, INNOVATIVE AND MEMORABLE DIGITAL EXPERIENCES THAT STRIVE TO PUSH THE BOUNDARIES AND LEAVE A
                  LASTING IMPACT THROUGH DESIGN AND INTERACTIVITY
                </p>

                <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-black/55 sm:mt-5 sm:text-[10px] sm:tracking-[0.22em]">
                  SCROLL TO DISCOVER
                </div>
              </div>
            </div>

            {/* Bottom row — receipt card (items-start on mobile avoids a tall cell + items-end gap above the card) */}
            <div className="flex items-start justify-center pt-2 max-sm:self-start sm:items-end sm:justify-end sm:pt-6">
              <div className="w-full max-w-[220px] border-[0.5px] border-black/20 bg-white/80 px-3 py-3 text-left text-[8px] leading-snug tracking-[0.1em] backdrop-blur-sm sm:text-[9px] sm:tracking-[0.12em]">
                <div className="flex justify-between uppercase">
                  <span>SILENCIO</span>
                  <span>28/03/26</span>
                </div>
                <div className="mt-2 text-center uppercase">** DIGITAL PRODUCTS **</div>
                <div className="mt-2 uppercase">BRANDING DIGITAL x1</div>
                <div className="mt-1 uppercase">REF: SHH 0001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section
        id="section1"
        className="relative z-0 min-h-[100svh] w-full overflow-hidden bg-[#EAEAEA] text-black"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif' }}
      >
        <div className="relative mx-auto min-h-[100svh] max-w-[1800px] px-5 pb-28 pt-8 sm:px-8 lg:px-12">
          {/* Top: centered nav + right pill */}
          <header className="relative z-10 flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:justify-between">
            <nav className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[9px] font-medium uppercase tracking-[0.14em] sm:text-[10px] sm:gap-x-8">
              <span className="whitespace-nowrap">DIGITAL BRANDING #01</span>
              <span className="whitespace-nowrap">VISUAL LANGUAGES #02</span>
              <span className="whitespace-nowrap">INTERACTIVE WEBSITES #03</span>
              <span className="whitespace-nowrap">DISRUPTIVE COMM. #04</span>
            </nav>
            <div className="flex shrink-0 justify-center lg:justify-end">
              <button
                type="button"
                className="rounded-full border-[0.5px] border-black/40 bg-white/60 px-5 py-2.5 text-[9px] uppercase tracking-[0.16em] backdrop-blur-sm sm:text-[10px]"
              >
                SELECTED WORKS ↗
              </button>
            </div>
          </header>

          {/* Left vertical */}
          <div className="pointer-events-none absolute left-2 top-[42%] z-10 -translate-y-1/2 sm:left-5 lg:left-8">
            <div
              className="text-[9px] uppercase tracking-[0.22em] text-black/75"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              AUTHENTIC DIGITAL PRODUCTS © SILENCIO
            </div>
          </div>

          {/* Main headline */}
          <div className="relative z-10 mx-auto mt-14 max-w-[1100px] text-center sm:mt-20 lg:mt-24">
            <h2
              className="space-y-3 uppercase sm:space-y-4"
              style={{
                fontSize: "clamp(13px, 2.8vw, 32px)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                lineHeight: 1.12,
              }}
            >
              <div>® SILENCIO IS A DESIGN STUDIO FOCUSED</div>

              <div className="flex flex-wrap items-end justify-center gap-x-1.5 sm:gap-x-2">
                <span>ON DIGITAL</span>
                <span className="inline-block text-left">
                  <span className="relative inline-block align-bottom">
                    <span className="absolute bottom-full left-0 mb-0.5 flex flex-col text-left text-[5px] font-normal normal-case leading-[1.15] tracking-normal sm:text-[6px] md:text-[7px]">
                      <span>UNIQUE,</span>
                      <span>INNOVATIVE AND</span>
                      <span>MEMORABLE</span>
                    </span>
                    VISUAL
                  </span>{" "}
                  LANGUAGES FOR
                </span>
              </div>

              <div>
                DARING BRANDS OUTSIDE THE 🔥 ⚠️ NORM
              </div>
            </h2>
          </div>

          {/* Bottom two columns + CTA */}
          <div className="relative z-10 mx-auto mt-16 grid max-w-[920px] gap-10 sm:mt-20 lg:mt-28 lg:grid-cols-2 lg:gap-14">
            <p className="text-[9px] font-medium uppercase leading-[1.7] tracking-[0.08em] text-black/85 sm:text-[10px]">
              WE ARE A DESIGN STUDIO SPECIALISED IN INTERACTIVE VISUAL LANGUAGES FOR ORGANISATIONS THAT WANT TO PUSH THE
              BOUNDARIES. WE BUILD FLEXIBLE AND AGILE BRANDS CAPABLE OF ADAPTING TO THE CONTEMPORARY CONTEXT, IN WHICH THE SPEED
              OF CONSUMPTION REQUIRES HIGH-IMPACT CONTENT TO BE RELEVANT.
            </p>
            <div className="flex flex-col">
              <p className="text-[9px] font-medium uppercase leading-[1.7] tracking-[0.08em] text-black/85 sm:text-[10px]">
                WE BUILD DIGITAL PRODUCTS WHERE INTERACTION WITH THE USER AND MOVEMENT ARE OF GREAT IMPORTANCE, WHICH ALLOWS US
                TO GENERATE UNIQUE EMOTIONS AND SENSATIONS.
              </p>
              <div className="mt-6 inline-flex w-fit items-center gap-2 border-[0.5px] border-black/35 bg-white/50 px-3 py-2 text-[8px] font-medium uppercase tracking-[0.14em] sm:text-[9px]">
                <span className="text-sm" aria-hidden>
                  🎬
                </span>
                PLEASE READ CAREFULLY
              </div>
            </div>
          </div>

          {/* Receipt — monospace, thin border, taller middle line */}
          
            
        </div>
            
    
      </section>

      <section
        id="section2"
        className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#f2f2f2] text-black"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif' }}
      >
        <div className="relative mx-auto h-[min(100svh,100dvh)] min-h-[100svh] w-full max-w-[1920px]">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Products
            </span>
          </div>

          {/* Left — SELF SERVICE STORE (mid, large bold vertical) */}
          <div
            className="pointer-events-none absolute left-2 top-[52%] z-10 sm:left-4 lg:left-6"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            
          </div>

          {/* Top right — pill buttons */}
          <div className="absolute right-4 top-[max(1.25rem,env(safe-area-inset-top))] z-20 flex flex-wrap items-center justify-end gap-2 sm:right-6 sm:gap-3 lg:right-10">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-transparent px-3 py-2 text-[8px] font-medium uppercase tracking-[0.14em] sm:px-4 sm:py-2.5 sm:text-[9px] sm:tracking-[0.16em]"
            >
              <span className="text-[11px] leading-none sm:text-xs" aria-hidden>
                🎬
              </span>
              Please read carefully
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-transparent px-3 py-2 text-[8px] font-medium uppercase tracking-[0.14em] sm:px-4 sm:py-2.5 sm:text-[9px] sm:tracking-[0.16em]"
            >
              Selected works
              <span
                className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-black text-[10px] leading-none sm:h-5 sm:w-5 sm:text-[11px]"
                aria-hidden
              >
                ↗
              </span>
            </button>
          </div>

          {/* Center — #01 card */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(88vw,280px)] -translate-x-1/2 -translate-y-1/2 sm:w-[240px]">
            <div className="rounded-md border border-black bg-transparent px-6 py-8 text-center sm:px-8 sm:py-10">
              <p className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-none tracking-tight">#01</p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em]">
                Digital branding
              </p>
            </div>
          </div>

          {/* Bottom right — receipt */}
          </div>
        
        
            
    
      </section>

      <section
        id="section3"
        className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#E5E5E5] text-black"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif' }}
      >
        <div className="relative mx-auto min-h-[100svh] max-w-[1800px] px-4 pb-28 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-8 lg:px-12">
          {/* Top right — SELECTED WORKS */}
          <div className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-20 sm:right-8 lg:right-12">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-transparent px-4 py-2.5 text-[8px] font-medium uppercase tracking-[0.16em] sm:px-5 sm:text-[9px] sm:tracking-[0.18em]"
            >
              Selected works
              <span
                className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-black text-[10px] leading-none sm:h-5 sm:w-5 sm:text-[11px]"
                aria-hidden
              >
                ↗
              </span>
            </button>
          </div>

          {/* Left edge — vertical copy (hidden on very narrow screens) */}
          <div className="pointer-events-none absolute bottom-[14%] left-2 top-[14%] z-10 hidden min-[400px]:block sm:left-4 lg:left-6">
            <div className="relative h-full w-[max-content]">
              <div
                className="absolute top-0 text-[7px] uppercase tracking-[0.22em] text-black sm:text-[8px]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Very limited qua…
              </div>
              <div
                className="absolute bottom-0 text-[7px] uppercase tracking-[0.22em] text-black sm:text-[8px]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                ailable 365 days
              </div>
            </div>
          </div>

          {/* Center — headline + subhead */}
          <div className="relative z-10 mx-auto max-w-[min(100%,920px)] px-2 pt-16 text-center sm:px-6 sm:pt-20 lg:pt-24">
            {/* Center-left pill badge */}
            <div className="pointer-events-none absolute left-3 top-[28%] z-0 hidden sm:left-6 sm:block lg:left-10">
              <div className="flex flex-col items-center justify-center gap-y-1.5 rounded-full border border-black px-3 py-4 text-[6px] font-medium uppercase leading-tight tracking-[0.12em] sm:gap-y-2 sm:px-3.5 sm:py-5 sm:text-[7px] sm:tracking-[0.14em]">
                <span>330ml</span>
                <span>/</span>
                <span>92%</span>
                <span>/</span>
                <span>Thinking</span>
                <span>/</span>
                <span>Bold</span>
              </div>
            </div>

            <h2
              className="relative z-10 mx-auto uppercase"
              style={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                fontSize: "clamp(2.75rem, 12vw, 8.5rem)",
              }}
            >
              <span className="block">Bold</span>
              <span className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:mt-2 sm:gap-x-3">
                <span>Thinking</span>
                <span className="inline-flex shrink-0 items-center self-center">
                  <Image
                    src={SECTION3_SEO_IMAGE_SRC}
                    alt=""
                    width={72}
                    height={108}
                    className="h-[clamp(2.25rem,7vw,4.25rem)] w-auto rounded-[3px] object-cover sm:rounded-[4px]"
                    sizes="(max-width: 640px) 48px, 72px"
                  />
                </span>
                <span>As</span>
              </span>
              <span className="mt-1 block sm:mt-2">A basis</span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-[520px] text-balance uppercase sm:mt-8"
              style={{
                fontSize: "clamp(11px, 2vw, 15px)",
                fontWeight: 500,
                letterSpacing: "0.08em",
                lineHeight: 1.35,
              }}
            >
              Refresh your business identity
            </p>
          </div>

          {/* Icon strip — above right column (desktop); stacks on small screens */}
          <div className="relative z-10 mx-auto mt-12 flex max-w-[1100px] justify-center px-2 sm:mt-16 sm:justify-end sm:px-6 lg:mt-20">
            <div className="inline-flex items-stretch gap-0 border border-black">
              {(["❄", "🍷", "🌐"] as const).map((icon) => (
                <span
                  key={icon}
                  className="flex aspect-square w-9 items-center justify-center border-r border-black text-[13px] last:border-r-0 sm:w-10 sm:text-[15px]"
                  aria-hidden
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Two-column body */}
          <div className="relative z-10 mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div className="space-y-6 text-[8px] font-medium uppercase leading-[1.75] tracking-[0.08em] text-black sm:text-[9px] sm:tracking-[0.09em]">
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div className="space-y-6 text-[8px] font-medium uppercase leading-[1.75] tracking-[0.08em] text-black sm:text-[9px] sm:tracking-[0.09em]">
              <p>
                WE BELIEVE THAT DESIGNING BRANDS THAT REMAIN GRAPHICALLY UNCHANGED FOR 30 YEARS NO LONGER MAKES SENSE. WE WORK
                BASED ON CONCEPTS THAT GO BEYOND TIME AND PROVIDE THE BASIS OF AESTHETICS.
              </p>
              <p>
                DIGITAL, COHERENT AND IDENTIFIABLE UNIVERSES, BASED ON THE NEEDS OF EACH CLIENT. WITH RESOURCEFULNESS AS A TOOL
                THROUGHOUT THE ENTIRE PROCESS.
              </p>
            </div>
          </div>

          {/* Bottom right receipt */}
          <div className="pointer-events-none absolute bottom-8 right-4 z-20 sm:bottom-10 sm:right-8 lg:right-12">
            <div className="pointer-events-auto w-[min(220px,70vw)] border border-black bg-[#E5E5E5] px-3 py-3 text-left font-mono text-[7px] leading-snug tracking-[0.08em] sm:text-[8px] sm:tracking-[0.1em]">
              <div className="flex justify-between uppercase">
                <span>Silencio</span>
                <span>28/03/26</span>
              </div>
              <div className="mt-2 text-center uppercase">** DIGITAL PRODUCTS **</div>
              <div className="mt-2 uppercase">BRANDING DIGITAL x1</div>
              <div className="mt-1 uppercase">REF: SHH 0001</div>
            </div>
          </div>
        </div>
      </section>
      <section id="section4" className="h-screen border border-red-500 bg-green-500" />
    </div>
  );
};

export default Hero;

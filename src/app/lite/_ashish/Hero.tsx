"use client";

import Image from "next/image";
import MyCanvas from "./MyCanvas";
import { Canvas, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import * as THREE from "three";
import { LITE_HERO_SURFACE_STYLE } from "./lite-hero-surface";
import WhyChooseUs from "@/components/about/why-choose-us";
import ContactOne from "@/components/contact/contact-one";

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
      camera.fov = 50;
      camera.position.set(-4, 265, 560);
    } else {
      camera.fov = 55;
      camera.position.set(300, 230, 650);
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
        >
          <ResponsiveHeroCamera />
          <MyCanvas />
        </Canvas>


        {/* Hero Content  */}
        <div
          className="relative z-10 pt-32"

        >
          <div className="container flex flex-col gap-16">
            {/* Center — mobile: natural height only; sm+: fills middle row for vertical centering */}
            <div className="flex items-start justify-center pt-2 max-sm:self-start sm:-translate-y-4 sm:items-center sm:pt-0">
              <div className="w-full max-w-[1120px] px-1 text-center sm:px-0">
                <h1
                  className="mx-auto leading-[0.88] sm:leading-[0.9] font-light text-[9.5rem]"
                >
                  DIGITAL
                  <br />
                  PRODUCTS
                </h1>

                <div
                  className="mt-3 flex flex-col items-center justify-center gap-1 text-[11px] uppercase tracking-[0.1em] sm:mt-5 sm:flex-row sm:gap-0 sm:text-base sm:tracking-[0.12em]"

                >
                  <span>FOR CONTEMPORARY</span>
                  <span className="leading-none sm:px-1" aria-hidden>
                    ✖
                  </span>
                  <span>BRANDS</span>
                </div>

                <p
                  className="mx-auto mt-2 px-1 text-[9px] leading-[1.65] text-black/75 sm:mt-3 sm:px-0 sm:text-[10px]"

                >
                  WE CRAFT UNIQUE, INNOVATIVE AND MEMORABLE DIGITAL EXPERIENCES THAT STRIVE TO PUSH THE BOUNDARIES AND LEAVE A
                  LASTING IMPACT THROUGH DESIGN AND INTERACTIVITY
                </p>

                <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-black/55 sm:mt-5 sm:text-[10px] sm:tracking-[0.22em]">
                  SCROLL TO DISCOVER
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* about section */}
      <section
        id="section1"
        className="relative"
      >
        <div className="container relative">
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
              className="space-y-3 uppercase sm:space-y-4 text-4xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.
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

      {/* SEO Service Section */}
      <section
        id="section2"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Service Name
            </span>
          </div>

          {/* #01 card */}
          <div className="flex justify-center">
            <div className="rounded-md border border-black bg-transparent px-6 py-8 text-center sm:px-8 sm:py-10">
              <p className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-none tracking-tight">#01</p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em]">
                SEO
              </p>
            </div>
          </div>


          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Search Engine Optimization
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-seo">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #01
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #02
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* SMO Service Section */}
      <section
        id="section3"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
            Social Media Optimization
            </span>
          </div>

          {/* #01 card */}
          {/* <div className="flex justify-center">
            <div className="rounded-md border border-black bg-transparent px-6 py-8 text-center sm:px-8 sm:py-10">
              <p className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-none tracking-tight">#01</p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em]">
                SMO
              </p>
            </div>
          </div> */}


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Social Media Optimization
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-smo">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #02
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #03
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Website Development */}
      <section
        id="section4"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
            Website Development
            </span>
          </div>


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Website Development
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-webdev">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #03
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #04
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>


      {/* Graphic Designing */}
      <section
        id="section5"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
            Graphic Designing
            </span>
          </div>


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Graphic Designing
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-graphic">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #04
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #05
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>


      {/* Video Editing */}
      <section
        id="section6"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Video Editing
            </span>
          </div>

          {/* #01 card */}
          {/* <div className="flex justify-center">
            <div className="rounded-md border border-black bg-transparent px-6 py-8 text-center sm:px-8 sm:py-10">
              <p className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-none tracking-tight">#01</p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em]">
                SMO
              </p>
            </div>
          </div> */}


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Video Editing
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-video">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #05
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #06
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Content Writing */}
      <section
        id="section7"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Content Writing
            </span>
          </div>


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Content Writing
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-content">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #06
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #07
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Performance Marketing */}
      <section
        id="section8"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Performance Marketing
            </span>
          </div>


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Performance Marketing
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-ads">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #07
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #08
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* App Development */}
      <section
        id="section9"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              App Development
            </span>
          </div>


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              App Development
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-appdev">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #08
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #09
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Algorithm Analysis */}
      <section
        id="section10"
        className="relative bg-[#f2f2f2]"
      >
        <div className="container flex flex-col">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="pointer-events-none absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Algorithm Analysis
            </span>
          </div>

          {/* #01 card */}
          {/* <div className="flex justify-center">
            <div className="rounded-md border border-black bg-transparent px-6 py-8 text-center sm:px-8 sm:py-10">
              <p className="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-none tracking-tight">#01</p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em]">
                SMO
              </p>
            </div>
          </div> */}


          <div className="text-center ">
            {/* Center-left pill badge */}

            <h2
              className="relative text-center uppercase font-thin text-[8rem] z-20"
            >
              Algorithm Analysis
            </h2>

            <p
              className="text-balance uppercase"
            >
              Refresh your business identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 text-justify sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
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



          {/* Center ticket */}

          <div className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-algo">

            {/* Two panels in one row: GSAP `xPercent` on the track scrubs forward/back (no DOM text swaps). */}
            <div className="relative overflow-hidden text-left">
              <div
                className="numberTrack flex w-[200%] will-change-transform"
              >
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #09
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #10
                </span>
              </div>
            </div>

            {/* Spacer for 3D “slot” / layout height */}
            <div className="mt-14 h-44" />

            {/* Barcode + purchased */}
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div style={{ display: "none" }} className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500" />
              </div>
              <div style={{ width: "0px", color: "transparent" }} className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                PURCHASED
              </div>
            </div>

            {/* Ingredients / footer */}
            <div className="mt-2 grid grid-cols-2 gap-3 text-[7px] font-medium uppercase leading-[1.45] tracking-[0.08em] text-black/70">
              <div>
                <div className="opacity-80">INGREDIENTS</div>
                <div>CONCEPT MINING,</div>
                <div>STRATEGY, IDENTITY,</div>
                <div>POSITIONING, BRAND PURPOSE</div>
                <div className="mt-1">• CONCEPT DARKNESS</div>
                <div>• CREATIVE DUCT TAPE</div>
                <div>• DIGITAL PRODUCTS</div>
              </div>
              <div className="text-right">
                <div className="opacity-80">FOR</div>
                <div>DIGITAL PRODUCTS FOR</div>
                <div>CONTEMPORARY BRANDS</div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Scroll end marker for last scanner pin (GSAP ScrollTrigger endTrigger) */}
      <div id="lite-scroll-tail" className="pointer-events-none h-px w-full shrink-0" aria-hidden />

      <WhyChooseUs />
      {/* service area end */}

      {/* contact area start */}
      {/* <ContactOne /> */}
      {/* contact area end */}


      {/* receipt bill card */}
      {/* <section className="fixed bottom-0 right-0 z-30">
        <div className="flex flex-col gap-1 p-2 bg-white w-48 rounded shadow">
          <div className="flex justify-between uppercase">
            <span>Invoice</span>
            <span>28/03/26</span>
          </div>
          <div className="mt-2 text-center uppercase">** DIGITAL PRODUCTS **</div>
          <div className="mt-2 uppercase">BRANDING DIGITAL x1</div>
          <div className="mt-1 uppercase">REF: SHH 0001</div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;

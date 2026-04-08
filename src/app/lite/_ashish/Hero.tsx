"use client";

import Image from "next/image";
import MyCanvas from "./MyCanvas";
import { Canvas, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import * as THREE from "three";
import { LITE_HERO_SURFACE_STYLE } from "./lite-hero-surface";
import WhyChooseUs from "@/components/about/why-choose-us";
import ContactOne from "@/components/contact/contact-one";
import Link from "next/link";
import WhyChooseUsLite from "./WhyChooseUs";

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
      <section id="section0" className="relative min-h-[100svh] overflow-hidden">
        <Canvas
          className="!fixed top-0 z-10 h-full w-full inset-0"
          dpr={[1, 2]}
          gl={{ alpha: true }}
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
              <div className="w-full max-w-[1120px] text-center flex flex-col gap-6">
                <h1
                >
                  DIGITAL
                  <br />
                  PRODUCTS
                </h1>

                <div
                  className="mt-3 flex flex-col items-center justify-center gap-1 text-base uppercase"

                >
                  <span>FOR CONTEMPORARY</span>
                  <span className="leading-none" aria-hidden>
                    ✖
                  </span>
                  <span>BRANDS</span>
                </div>

                <p

                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse exercitationem explicabo in cum corrupti temporibus odio eius quidem, eligendi, ex eveniet delectus quasi iste soluta?
                </p>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ad perspiciatis tempora! Nihil quas placeat, labore quos dolores nemo a iste quis modi ad. Dolor dolorem modi veniam molestiae illum.
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
        <div className="container relative py-32 text-center">
          {/* Top: centered nav + right pill */}
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row items-center lg:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-xs uppercase">
              <span className="whitespace-nowrap">DIGITAL BRANDING #01</span>
              <span className="whitespace-nowrap">VISUAL LANGUAGES #02</span>
              <span className="whitespace-nowrap">INTERACTIVE WEBSITES #03</span>
              <span className="whitespace-nowrap">DISRUPTIVE COMM. #04</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="relative z-10 mx-auto mt-14 max-w-[1100px] text-center sm:mt-20 lg:mt-24">
            <h2
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.
            </h2>
          </div>

          {/* Bottom two columns + CTA */}
          <div className="relative z-10 mx-auto mt-16 grid  gap-10 sm:mt-20 lg:mt-28 lg:grid-cols-2 lg:gap-14">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint odit est, at sunt unde quibusdam debitis pariatur architecto alias, repellendus veniam obcaecati recusandae vitae labore maxime laudantium? Ipsa dignissimos tenetur accusamus esse beatae voluptas, aliquid a pariatur ipsum, nesciunt soluta.
            </p>
            <div className="flex flex-col items-center lg:items-start">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta ducimus veniam, ullam, hic distinctio at dolores eligendi dolore sit aliquid rem quo nobis? Facere.
              </p>
              <Link href="/about" className="relative bg-neutral-200 hover:bg-orange-600 hover:text-white z-10 mt-6 w-fit items-center gap-2 px-3 py-2 font-medium border">
                About Us ↗
              </Link>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Service Name
            </span>
          </div>

          {/* #01 card */}
          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#01</p>
            </div>
          </div>


          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aspernatur laboriosam soluta doloribus numquam recusandae, magnam eos iste, deleniti praesentium ullam cupiditate veniam a ut inventore autem quos sequi, porro minima. Fugit facilis alias unde.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum sint, saepe eos sapiente id aliquam quisquam quas, molestias, nam veritatis qui expedita! Asperiores, assumenda?
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aspernatur laboriosam soluta doloribus numquam recusandae, magnam eos iste, deleniti praesentium ullam cupiditate veniam a ut inventore autem quos sequi, porro minima. Fugit facilis alias unde.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum sint, saepe eos sapiente id aliquam quisquam quas, molestias, nam veritatis qui expedita! Asperiores, assumenda?
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">Our Services</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>CONCEPT DARKNESS</span>
                <span>CREATIVE DUCT TAPE</span>
                <span>DIGITAL PRODUCTS</span>
              </div>

              {/* right Col */}
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">Super Powers</span>
                <span>FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Social Media Optimization
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Website Development
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Graphic Designing
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Video Editing
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Content Writing
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Performance Marketing
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              App Development
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
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
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Algorithm Analysis
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2
              className="relative z-20"
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
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
            <div>
              <p>
                WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE CONSTRUCT THE ENTIRE BRAND COMMUNICATION. AN
                INGENIOUS CONCEPT THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR GOALS.
              </p>
              <p>
                WE NEVER SETTLE FOR A BRIEF IF WE DETECT OTHER OPPORTUNITIES. WE ATTEMPT TO GO FURTHER AND PROPOSE DIFFERENT
                SOLUTIONS THAT ALLOW OUR CLIENTS TO POSITION THEMSELVES IN A DISRUPTIVE WAY.
              </p>
            </div>
            <div>
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
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
              <div className="flex flex-col">
                <span className="font-bold block text-xs uppercase mb-1">INGREDIENTS</span>
                <span>CONCEPT MINING,</span>
                <span>STRATEGY, IDENTITY,</span>
                <span>POSITIONING, BRAND PURPOSE</span>
                <span>• CONCEPT DARKNESS</span>
                <span>• CREATIVE DUCT TAPE</span>
                <span>• DIGITAL PRODUCTS</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-bold block text-xs uppercase mb-1">FOR</span>
                <span>DIGITAL PRODUCTS FOR</span>
                <span>CONTEMPORARY BRANDS</span>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Scroll end marker for last scanner pin (GSAP ScrollTrigger endTrigger) */}
      {/* <div id="section11" className="" aria-hidden /> */}

      <WhyChooseUsLite />
      {/* service area end */}

      {/* contact area start */}
      {/* <ContactOne /> */}
      {/* contact area end */}


      {/* receipt bill card */}
      {/* <section className="fixed bottom-0 right-0 z-30">
        <div className="flex flex-col p-2 bg-white w-48 rounded shadow">
          <div className="flex justify-between uppercase">
            <span>Invoice</span>
            <span>28/03/26</span>
          </div>
          <div className="mt-2 text-center uppercase">** DIGITAL PRODUCTS **</div>
          <div className="mt-2 uppercase">BRANDING DIGITAL x1</div>
          <div className="mt-1 uppercase">REF: SHH 0001</div>
        </div>
      </section> */}

      <section id="ctaSection" className="pt-10 pb-32">
        <div className="container flex flex-col gap-10 overflow-hidden">
          <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-thin uppercase leading-none mx-auto text-center">
            Thanks for <br />your visit!
          </h3>
          <div className="h-48"></div>
          <Link href="#" className="hover:!bg-black bg-white hover:!text-white relative z-10 text-center uppercase text-5xl md:text-7xl lg:text-[6rem] font-thin mx-auto px-5 py-4 border border-black rounded-full">
            Let&apos;s Talk!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;

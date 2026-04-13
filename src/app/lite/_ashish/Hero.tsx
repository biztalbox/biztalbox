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

/** Matches `src/app/(service)/*` routes (e.g. https://biztalbox.com/best-seo-agency). */
const LITE_SERVICE_PAGE_PATHS = {
  seo: "/best-seo-agency",
  smo: "/social-media-marketing",
  webdev: "/website-development",
  graphic: "/graphic-designing",
  video: "/motion-graphics",
  content: "/content-marketing",
  ads: "/google-ads-service",
  appdev: "/app-development",
  algo: "/analysis-algorithm",
} as const;

type LiteServicePageKey = keyof typeof LITE_SERVICE_PAGE_PATHS;

function LiteServiceViewMoreLink({ service }: { service: LiteServicePageKey }) {
  return (
    <div className="relative z-20 mx-auto mt-10 flex justify-center px-2 sm:mt-12">
      <Link
        href={LITE_SERVICE_PAGE_PATHS[service]}
        className="inline-flex rounded-full border border-black bg-white px-10 py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-neutral-900 hover:text-white"
      >
        View More
      </Link>
    </div>
  );
}

/** Tweaks default perspective camera when the canvas resizes so the scene reads on phones and tablets. */
function ResponsiveHeroCamera() {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const w = size.width;
    if (w < 480) {
      camera.fov = 80;
      camera.position.set(0, 0, 400);
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

              {/* Eight-point decorative mark (screenshot-style) */}
              <div className="relative mt-10 h-28 w-28 text-black sm:mt-12 sm:h-32 sm:w-32" aria-hidden>
                <svg viewBox="0 0 100 100" className="h-full w-full opacity-[0.92]" fill="none">
                  <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                      <line
                        key={deg}
                        x1="50"
                        y1="50"
                        x2={50 + 38 * Math.cos(((deg - 90) * Math.PI) / 180)}
                        y2={50 + 38 * Math.sin(((deg - 90) * Math.PI) / 180)}
                      />
                    ))}
                  </g>
                </svg>
              </div>
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

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              Search Engine Optimization
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              Long-term SEO grounded in clarity, intent, and measurable growth
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12 [&_p]:text-[10px] [&_p]:leading-[1.85] [&_p]:sm:text-[11px] [&_p]:md:text-xs">
            <div className="space-y-6">
              <p>
                Search influences how a brand is first encountered, how it is assessed, and whether it is taken seriously.
              </p>
              <p>
                At Biztalbox, we approach SEO as a long-term system grounded in clarity and intent, one that begins with a thorough audit. We study your website in detail, understanding how it is understood by search engines and users, where it falls short, and how it compares within its competitive space. This early clarity allows every subsequent step to remain grounded and precise.
              </p>
              <p>
                Our SEO experts then turn to search intent, looking beyond keywords to the underlying patterns of behaviour. What people are actually looking for. What leads them forward? These insights inform how we refine the technical foundation of your website, bringing greater coherence to its structure, speed, and internal movement.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Content at Biztalbox is crafted with intention and patience. It connects with your audience, builds trust through relevance, and grows into authority over time. Our Off-page SEO services add another layer. This includes earning relevant backlinks, strengthening brand mentions, and placing your website within a network of trusted sources that search engines already recognise.
              </p>
              <p>
                Our SEO services do not stop at implementation. We revisit and refine the work regularly as search behaviour continues to evolve. At Biztalbox, we always keep the client in the loop with clear reporting. It gives a clear view of progress and business growth.
              </p>
              <p>
                What follows is a presence in search that carries weight, holds consistency, and earns its position over time.
              </p>
            </div>

          </div>



          <LiteServiceViewMoreLink service="seo" />

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

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              Social Media Optimization
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              At Biztalbox, social media is about how your brand shows up consistently in everyday attention.
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12 [&_p]:text-[10px] [&_p]:leading-[1.85] [&_p]:sm:text-[11px] [&_p]:md:text-xs">
            <div>
              <p>
                Our social media managers begin by understanding your brand, your audience, and how your competitors are
                positioning themselves. This gives us a clear direction before anything goes live. We then plan content calendars to
                bring consistency and direction to your presence.
              </p>
              <p>
                We don&apos;t just chase trends or virality, but focus on building a social presence that actually reflects your brand
                and stays consistent over time. Our social media marketing services focus on making content feel clear and natural.
                Not forced trends or random ideas, but communication that fits your brand and makes sense to your audience.
              </p>
            </div>
            <div>
              <p>
                We also pay attention to how people respond. What they engage with, what they ignore, and what brings them back.
                This helps us refine what your brand should keep doing and what it should leave behind.
              </p>
              <p>
                Over time, this builds familiarity. Your brand starts to feel recognisable, not because of one post, but because of
                consistent presence.
              </p>
              <p>
                With our expert social media services, we aim to make your brand feel active, relevant, and easy to connect with on
                a daily basis.
              </p>
            </div>
          </div>



          <LiteServiceViewMoreLink service="smo" />

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

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              Website Development
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              Performance-focused websites
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12 [&_p]:text-[10px] [&_p]:leading-[1.85] [&_p]:sm:text-[11px] [&_p]:md:text-xs">
            <div className="space-y-6">
              <p>
                At Biztalbox, we believe a website should make things easier for your users, not more complicated. Our web development approach reflects that thinking.
              </p>
              <p>
                We begin with understanding what the business actually needs the website to carry. Not just information, but direction. What should be seen first, what should be understood next, and what should lead a user toward action? This thinking sets the foundation before any layout is discussed.
              </p>
              <p>
                Web development is then approached through structure first, not visuals. Our web development experts focus on making websites that offer a guided experience, rather than isolated pages. Information is arranged to reduce effort for the user, so nothing feels misplaced or difficult to reach. The goal is simple navigation that still feels intentional.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Our web development firm takes pride in the quality of our execution. Clean development practices, consistent responsiveness, and reliable performance are maintained across every project.
              </p>
              <p>
                Lastly, Biztalbox always ensures the website remains manageable after it goes live.
              </p>
            </div>
          </div>



          <LiteServiceViewMoreLink service="webdev" />

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

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              Graphic Designing
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              Clear and consistent brand identity
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12 [&_p]:text-[10px] [&_p]:leading-[1.85] [&_p]:sm:text-[11px] [&_p]:md:text-xs">
            <div className="space-y-6">
              <p>
                At Biztalbox, we understand that visual design plays a defining role in how a brand is interpreted and remembered.
              </p>
              <p>
                We treat graphic design as a connected system rather than standalone visuals. Every piece we create has to work with the next one. So the brand feels consistent wherever it shows up.
              </p>
              <p>
                Our graphic designers start by looking at how your brand currently shows up across different touchpoints. We look for gaps in consistency. We notice where clarity is lost. We see where the visual language is not holding attention the way it should.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                From there, our graphic design services focus on how information is perceived. Typography, spacing, colour, and layout are crafted so that the design feels easy to read and naturally organised.
              </p>
              <p>
                We keep attention where it matters. Important information is made clear at first glance. Supporting elements stay in the background without distracting from the message.
              </p>
              <p>
                We stay consistent across every asset we create. So your brand does not feel different on each platform. It feels like one identity, carried forward with discipline.
              </p>
              <p>
                Each design decision at Biztalbox is made with one goal in mind: To make your brand easier to recognise, easier to understand, and harder to forget.
              </p>
            </div>
          </div>



          <LiteServiceViewMoreLink service="graphic" />

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


      {/* Motion Graphics */}
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
              Motion Graphics
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              Motion Graphics
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              Storytelling through motion
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12 [&_p]:text-[10px] [&_p]:leading-[1.85] [&_p]:sm:text-[11px] [&_p]:md:text-xs">
            <div className="space-y-6">
              <p>
                At Biztalbox, we turn to motion graphics when a message is too layered to be understood in a single static frame.
              </p>
              <p>
                Motion graphics play a direct role in how clearly a brand is understood and how strongly it is remembered.
              </p>
              <p>
                Motion graphic designers at Biztalbox approach motion as a way to sharpen brand communication. We start by looking at how your brand currently shows up visually and where its communication weakens.
              </p>
              <p>
                This helps us decide the structure, sequence, and emphasis each part needs.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                We design motion around how attention actually moves. What draws focus, what holds it, and what needs to be reinforced before moving forward. This is where our process stays deliberate rather than decorative.
              </p>
              <p>
                Our motion graphics agency brings consistency to every layer, from typography to transitions to rhythm. Everything works together, so the viewer is not interpreting multiple signals at once.
              </p>
              <p>
                We keep motion purposeful. It exists only to make the idea easier to follow and quicker to absorb. Every piece is designed to support how your brand is perceived.
              </p>
            </div>
          </div>



          <LiteServiceViewMoreLink service="video" />

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

      {/* Copywriting (content-marketing route) */}
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
              Copywriting
            </span>
          </div>

          <div className="pt-40 text-center">
            {/* Center-left pill badge */}

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              Copywriting
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              Words that drive action
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12 [&_p]:text-[10px] [&_p]:leading-[1.85] [&_p]:sm:text-[11px] [&_p]:md:text-xs">
            <div className="space-y-6">
              <p>
                At Biztalbox, we see copywriting as the layer that decides how a brand is understood, positioned, and ultimately responded to.
              </p>
              <p>
                The purpose is not to describe what a brand does, but to influence how it is perceived at the exact moment a decision is being formed.
              </p>
              <p>
                Biztalbox&apos;s copywriting services have helped brands improve how they express value and position themselves. This has led to clearer responses, stronger engagement, and more confident decision-making.
              </p>
              <p>
                Across all communication, we maintain control over tone and consistency so the brand feels aligned in every context it appears in. This consistency is what builds recognition and trust over time.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Our copywriting experts begin by understanding how your audience evaluates a brand like yours. What they compare. What they doubt. What they need to take you seriously. Because brand positioning is influenced by the language used to describe it.
              </p>
              <p>
                From there, our copywriters focus on how decisions move. Copy is written to reduce hesitation, close interpretation gaps, and bring clarity to what would otherwise feel uncertain or incomplete. It is also structured to carry the reader forward without forcing attention.
              </p>
              <p>
                We also use language to strengthen perception. The same offering can feel ordinary or credible depending on how it is expressed. Copy plays a direct role in that shift.
              </p>
            </div>
          </div>



          <LiteServiceViewMoreLink service="content" />

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

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              Performance Marketing
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              Measurable marketing outcomes
            </p>
          </div>

          {/* Two-column body */}
          <div className="mx-auto mt-8 grid max-w-[1100px] gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12 [&_p]:text-[10px] [&_p]:leading-[1.85] [&_p]:sm:text-[11px] [&_p]:md:text-xs">
            <div className="space-y-6">
              <p>
                Performance marketing, for us at Biztalbox, is a revenue system first. Every part of it has to support a clear commercial outcome.
              </p>
              <p>
                We begin by looking at how growth is currently being generated and where it is breaking down. In some cases, the issue sits in acquisition. In others, it is the offer itself or what happens after the click. The point is to locate the real constraint, not just the visible symptom.
              </p>
              <p>
                We evaluate the entire journey together as part of a full funnel performance marketing strategy. Audience targeting, messaging, creative direction, landing experience, and tracking. If even one of these is misaligned, performance stays capped regardless of spend.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                We also read performance beyond surface metrics. We look at lead quality, drop-off behaviour, and consistency of results over time. These patterns show what is actually working and what is not.
              </p>
              <p>
                Our performance marketing agency brings structure across the full revenue flow through performance marketing solutions. So performance is not driven by assumptions or isolated wins, but by a system that holds together under scale.
              </p>
            </div>
          </div>



          <LiteServiceViewMoreLink service="ads" />

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

            <h2 className="relative z-20 text-[clamp(2.5rem,7vw,5.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-black md:text-[clamp(3rem,6.5vw,6.25rem)]">
              App Development
            </h2>

            <p className="text-balance text-[clamp(1.05rem,2.8vw,1.5rem)] font-normal uppercase text-black md:text-[clamp(1.15rem,2.4vw,1.7rem)]">
              Built for long-term performance
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



          <LiteServiceViewMoreLink service="appdev" />

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



          <LiteServiceViewMoreLink service="algo" />

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

      <section id="recieptSection" className="fixed bottom-0 left-5 bg-white p-3 translate-y-full">
        <div className="flex flex-col gap-1 w-44 divide-y-2 divide-x-0 divide-dashed text-sm font-thin font-mono">

          <div className="flex justify-between">
            <span>BIZTALBOX</span>
            <span>09/04/26</span>
          </div>

          <span className="text-center">DIGITAL SERVICES</span>
          

{/* Item list and total */}
          <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="min-w-0 break-words">Search Engine Optimization</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">Social Media Optimization</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">Website Development</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">Graphic Designing</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">Motion Graphics</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">Copywriting</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">Performance Marketing</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">App Development</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="min-w-0 break-words">Algorithm Analysis</span>
                <span className="shrink-0 whitespace-nowrap">x1</span>
              </div>
            <div className="flex mt-2 justify-between">
              <span>TOTAL:</span>
              <span>SPECIAL PROJECT</span>
            </div>

            <span className="text-center">
              *******************
            </span>
            

            <span className="text-center normal-case">Thanks for your visit!</span>
            <Image src="/assets/image/barcode.svg" alt="barcode" className="w-full h-fit" width={100} height={100} />
          </div>
          <span className="text-center leading-tight">
              we love meeting people with whom we can work and share projects.
              WRITE TO US!
            </span>
{/* contact email and no. */}
          <div className="flex flex-col">
            
            <span>info@biztalbox.com</span>
            <span>PHONE: +91 9876543210</span>
          </div>

        </div>
      </section>

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

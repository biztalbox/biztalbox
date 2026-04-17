"use client";

import Image from "next/image";
import MyCanvas from "./MyCanvas";
import { AdaptiveDpr } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { LITE_HERO_SURFACE_STYLE } from "./lite-hero-surface";
import WhyChooseUs from "@/components/about/why-choose-us";
import ContactOne from "@/components/contact/contact-one";
import Link from "next/link";
import WhyChooseUsLite from "./WhyChooseUs";
import { getTicketSpecNameColumns, type LiteServiceTicketSpecKey } from "./lite-service-ticket-specs";
import dynamic from "next/dynamic";

/** Matches `src/app/(service)/*` routes (e.g. https://biztalbox.com/best-seo-agency). */
const LITE_SERVICE_PAGE_PATHS = {
  seo: "/best-seo-agency",
  smo: "/social-media-marketing",
  webdev: "/website-development",
  graphic: "/graphic-designing",
  video: "/motion-graphics",
  content: "/content-marketing",
  ads: "/google-ads-service",
  google: "/google-ads-service",
  meta: "/facebook-ads-service",
  appdev: "/app-development",
  algo: "/analysis-algorithm",
} as const;

type LiteServicePageKey = keyof typeof LITE_SERVICE_PAGE_PATHS;

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);

function formatReceiptDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear() % 100).padStart(2, "0");
  return `${dd}/${mm}/${yy}`;
}

function LiteServiceViewMoreLink({ service, text = "View More" }: { service: LiteServicePageKey, text?: string }) {
  return (
    <Link
      href={LITE_SERVICE_PAGE_PATHS[service]}
      className="relative z-20 mx-auto block w-fit mt-5 rounded-full border border-black bg-[#F2F2F2] px-10 py-2.5 text-sm font-medium uppercase text-black transition-colors hover:bg-orange-600 hover:!text-white"
    >
      {text}
    </Link>
  );
}

function LiteTicketSpecsFooter({ service }: { service: LiteServiceTicketSpecKey }) {
  const { left, right } = getTicketSpecNameColumns(service);
  return (
    <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
      <div className="flex flex-col">
        <span className="font-bold block text-xs uppercase mb-1">What we do</span>
        {left.map((name, i) => (
          <span key={`${service}-spec-l-${i}`}>{name}</span>
        ))}
      </div>
      <div className="flex flex-col text-right">
        <span className="font-bold block text-xs uppercase mb-1">----</span>
        {right.map((name, i) => (
          <span key={`${service}-spec-r-${i}`}>{name}</span>
        ))}
      </div>
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
  const [showCanvas, setShowCanvas] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1440);

  // Avoid blocking first paint with heavy GLB parsing on /lite.
  // Mount the WebGL scene once the browser is idle (or shortly after).
  useEffect(() => {
    const w = globalThis as any;
    let t: any = null;
    let idleId: any = null;

    const enable = () => setShowCanvas(true);

    if (w?.requestIdleCallback) {
      idleId = w.requestIdleCallback(enable, { timeout: 1200 });
    } else {
      t = w.setTimeout(enable, 250);
    }

    return () => {
      if (t) w.clearTimeout(t);
      if (idleId && w?.cancelIdleCallback) w.cancelIdleCallback(idleId);
    };
  }, []);

  useEffect(() => {
    const w = globalThis as any;
    const syncViewportWidth = () => setViewportWidth(w?.innerWidth ?? 1440);
    syncViewportWidth();
    w?.addEventListener?.("resize", syncViewportWidth, { passive: true });
    return () => w?.removeEventListener?.("resize", syncViewportWidth);
  }, []);

  const isPhone = viewportWidth < 640;
  const isTablet = viewportWidth < 1024;
  /** Clamp DPR by tier — full asset quality; AdaptiveDpr only lowers effective DPR when FPS dips. */
  const canvasDpr: [number, number] = isPhone ? [1, 1.35] : isTablet ? [1, 1.55] : [1, 1.85];

  return (
    <div className="relative">

      <section id="section0" className="relative min-h-[100svh] overflow-hidden">
        {showCanvas && (
          <Canvas
            className="!fixed top-0 z-10 h-full w-full inset-0"
            dpr={canvasDpr}
            performance={{ min: 0.5, max: 1, debounce: 280 }}
            gl={{
              alpha: true,
              antialias: true,
            }}
          >
            <ResponsiveHeroCamera />
            <AdaptiveDpr />
            <Suspense fallback={null}>
              <MyCanvas />
            </Suspense>
          </Canvas>
        )}

        <Loader />

        {/* Hero Content  */}
        <div className="relative z-10 pt-80 lg:pt-36" >
          <div className="container flex flex-col gap-16">
            {/* Center — mobile: natural height only; sm+: fills middle row for vertical centering */}
            <div className="flex items-start justify-center pt-2 max-sm:self-start sm:-translate-y-4 sm:items-center sm:pt-0">
              <div className="w-full max-w-screen text-center flex flex-col gap-0">
                <p className="whitespace-nowrap uppercase text-center"
                >
                  Creative Souls, Strategic Minds
                </p>

                <h1 className="font-century-gothic">biztalbox</h1>
                {/* <span className="h-[1px] w-40 mx-auto bg-black"></span> */}

                <h3 className="text-[16px] md:!text-[22px]">Breakthrough Marketing Solutions,<br /> Igniting Brand Potential</h3>
                <p className="uppercase">
                  Sustainable Growth Guided by Expertise, Rooted in Partnership
                </p>


              </div>
            </div>


          </div>
        </div>
      </section>

      {/* about section */}
      <section id="section1" className="relative" >
        <div className="container relative py-10">
          {/* Top: centered nav + right pill */}
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row items-center lg:justify-between">
            <div className="flex flex-wrap items-center mx-auto justify-center gap-x-5 gap-y-2 text-center text-xs uppercase">
              <span className="whitespace-nowrap">Search Visibility</span>
              <span className="whitespace-nowrap">Brand Strategy</span>
              <span className="whitespace-nowrap">Visual Design</span>
              <span className="whitespace-nowrap">Business Growth</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="relative z-10 mx-auto mt-14 max-w-[1100px] sm:mt-20 lg:mt-24">
            <h2 className="text-center"
            >
              We don’t just build a
              brand’s reputation
              — we set brands ablaze.
            </h2>
          </div>

          {/* Bottom two columns + CTA */}
          <div className="relative z-10 mx-auto mt-16 grid  gap-10 sm:mt-20 lg:mt-28 lg:grid-cols-2 lg:gap-14">
            <p>
              Biztal Box is a marketing agency that enhances brand&apos;s online presence through a range of services including SEO optimization, web development, graphic design, and more. Our dynamic agency crafts strategies that stick while bringing every client&apos;s unique perspective to life.            </p>
            <div className="flex flex-col lg:items-start">
              <p>
                We understand a brand’s goals and ideas to the finest detail by immersing ourselves in its unique vision. By brainstorming creative solutions, we improve visibility and ensure that every interaction with your audience leaves a memorable mark.              </p>

            </div>
          </div>
          <Link href="/about" className="relative bg-neutral-200 hover:bg-orange-600 hover:text-white z-10 mt-6 w-fit block mx-auto text-center items-center gap-2 px-3 py-2 font-medium border">
            About Us ↗
          </Link>
          {/* Receipt — monospace, thin border, taller middle line */}


        </div>


      </section>

      {/* SEO Service Section */}
      <section id="section2" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          {/* Left — PRODUCTS (top, vertical) */}
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Search Engine Optimization
            </span>
          </div>

          {/* #01 card */}
          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#01</p>
            </div>
          </div>


          <div className="pt-40 max-w-screen mx-auto">
            {/* Center-left pill badge */}

            <h2 className="text-center whitespace-nowrap">Search Engine Optimization</h2>

            <h3
              className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20"
            >
              Organic Growth through search
            </h3>
            {/* Two-column body */}
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                At Biztalbox, we approach SEO as a long-term system that begins with a thorough audit. We understand how your website performs on search engines, where it falls short, and how it compares within its competitive space. This allows every subsequent step to remain grounded and precise.


                We prioritize search intent, focusing on behavioural patterns beyond just keywords. Then we refine the technical foundation of your website, bringing greater coherence to its structure, speed, and internal movement.
              </p>
              <p>
                Content at Biztalbox is crafted with patience. It connects with your audience, builds trust and builds authority over time. Our Off-page SEO services add another layer by strengthening your overall brand reputation.

                Our SEO experts revisit and refine the work regularly as search behaviour continues to evolve.  We always keep the client in the loop with clear reporting so that they have a clear view of progress and business growth.

                Biztalbox builds an online presence that leads to tangible business growth.

              </p>
            </div>


            <LiteServiceViewMoreLink service="seo" />
          </div>





          {/* Center ticket */}

          <div className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3" style={{ background: "transparent" }} id="lite-scanner-seo">

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

            <LiteTicketSpecsFooter service="seo" />
          </div>
        </div>


      </section>

      {/* SMO Service Section */}
      <section id="section3" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Social Media Optimization
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center whitespace-nowrap">Social Media Optimization</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Building everyday brand presence
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                The social media team at Biztalbox, we begin by understanding your brand, your audience, and how your competitors are positioning themselves. This helps us set a clear direction before we put anything out in the world. Then we create content calendars that bring structure and consistency to your social presence.

                We don&apos;t just chase trends or push for viral moments. The focus stays on building a presence that feels true to your brand. We focus on making content that fits your brand and makes sense to your audience.
              </p>
              <p>We also pay attention to how people respond. What they engage with and ignore. And what brings them back again? This helps us understand what your brand should keep doing and what it should leave behind.

                Over time, this builds familiarity. Your brand starts to feel recognisable, not because of one post, but because of consistent presence.

                Biztalbox aims to make your brand feel active, relevant, and easy to connect with.

              </p>
            </div>
            <LiteServiceViewMoreLink service="smo" />
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-smo"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #02
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #03
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="smo" />
          </div>
        </div>
      </section>

      {/* Website Development */}
      <section id="section4" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Website Development
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Website Development</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Performance-focused websites
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                At Biztalbox, we believe a website should make things easier for your users, not more complicated. Our web development approach reflects that thinking.

                We begin with understanding what the business actually needs the website to carry. What should be seen first, what should be understood next, and what should lead a user toward action? This thinking sets the foundation before any layout is discussed.


              </p>
              <p>
                We approached through structure first, not visuals. Our web development experts focus on making websites that offer a guided experience, rather than isolated pages. Information is arranged to reduce effort for the user, so nothing feels misplaced or difficult to reach. The goal is simple navigation that still feels intentional.


                Our web development firm takes pride in the quality of our execution. Clean development practices, consistent responsiveness, and reliable performance are maintained across every project.

                Lastly, Biztalbox always ensure the website remains manageable after it goes live.

              </p>
            </div>
            <LiteServiceViewMoreLink service="webdev" />
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-webdev"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #03
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #04
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="webdev" />
          </div>
        </div>
      </section>

      {/* Graphic Designing */}
      <section id="section5" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Graphic Designing
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Graphic Designing</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Clear and consistent brand identity
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                At Biztalbox, we understand that visual design plays a defining role in how a brand is interpreted and remembered. We treat graphic design as a connected system rather than standalone visuals. Every piece we create works with the next one. This makes the brand feel consistent wherever it shows up.


                We focus on how information is perceived. Typography, spacing, colour, and layout are crafted so that the design feels easy to read and naturally organised.

              </p>
              <p>
                We keep attention where it matters. Important information is made clear at first glance. Supporting elements stay in the background without distracting from the message.
                We stay consistent across every asset we create. So your brand does not feel different on each platform. It feels like one identity, carried forward with discipline.

                Each design decision at Biztalbox is made with one goal in mind: To make your brand easier to recognise, easier to understand, and harder to forget.


              </p>
            </div>
            <LiteServiceViewMoreLink service="graphic" />
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-graphic"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #04
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #05
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="graphic" />
          </div>
        </div>
      </section>

      {/* Video Editing / Motion Graphics */}
      <section id="section6" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Motion Graphics
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Motion Graphics</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Storytelling Through Motion
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                At Biztalbox, we turn to motion graphics when a message is too layered to be understood in a single static frame.

                Motion graphic designers at Biztalbox approach motion as a way to sharpen brand communication. We start by looking at how your brand currently shows up visually and where its communication weakens.


                This helps us decide the structure, sequence, and emphasis each part needs.
              </p>
              <p>
                We design motion around how attention actually moves. What draws focus, what holds it, and what needs to be reinforced before moving forward. This is where our process stays deliberate rather than decorative.

                Our motion graphics agency brings consistency to every layer, from typography to transitions to rhythm. Everything works together, so the viewer is not interpreting multiple signals at once.

                Biztalbox keeps motion purposeful. It exists only to make the idea easier to follow and quicker to absorb. Every piece is designed to support how your brand is perceived.


              </p>
            </div>
            <LiteServiceViewMoreLink service="video" />
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-video"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #05
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #06
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="video" />
          </div>
        </div>
      </section>

      {/* Content Writing */}
      <section id="section7" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Copywriting
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Content Writing</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Words that drive action
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                At Biztalbox, we see copywriting as the layer that decides how your brand is experienced.


                Biztalbox&apos;s copywriting services have helped brands improve how they express value and position themselves. This has led to clearer responses, stronger engagement, and more confident decision-making.

                Our copywriting experts begin by understanding how your audience evaluates a brand like yours. What they compare. What they doubt. What they need to take you seriously.
              </p>
              <p>
                From there, we focus on the decision-making process. Copy is written to reduce hesitation, close interpretation gaps, and bring clarity to what would otherwise feel uncertain or incomplete.

                The same offering can feel ordinary or credible depending on how it is expressed. And Biztalbox’s content plays a direct role in that shift.



                We maintain consistency over tone and voice so the brand feels aligned in every context it appears in. This consistency is what builds recognition and trust over time.



              </p>
            </div>
            <LiteServiceViewMoreLink service="content" />
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-content"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #06
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #07
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="content" />
          </div>
        </div>
      </section>

      {/* Performance Marketing */}
      <section id="section8" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Performance Marketing
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Performance Marketing</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Measurable marketing outcomes
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <div className="flex flex-col">

                <p>
                  Biztalbox views Performance marketing as a revenue system first. Every part of it supports a clear commercial outcome.

                  We begin by looking at how growth is currently being generated and where it is breaking down. Then we figure out the real constraints, not just the visible symptoms.

                  We evaluate the entire journey together as part of a full funnel performance marketing strategy.
                </p>
                <div className="md:block w-fit md:ml-auto hidden">

                  <LiteServiceViewMoreLink service="google" text="Google Ads" />
                </div>
              </div>
              <div className="flex flex-col ">

                <p>
                  Biztalbox evaluates performance beyond surface metrics. We consider lead quality, drop-off behaviour, and consistency of results over time. These patterns show what is working and what is not.

                  The goal of our performance marketing services is to generate meaningful actions that contribute to business growth. This includes audience targeting, messaging, creative direction, landing experience, and tracking. If even one of these is misaligned, performance stays capped regardless of spend.


                </p>

                <div className="block w-fit mx-auto md:mx-0 md:mr-auto">

                  <LiteServiceViewMoreLink service="meta" text="Meta Ads" />
                  <div className="md:hidden block w-fit">

                    <LiteServiceViewMoreLink service="google" text="Google Ads" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-ads"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #07
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #08
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="ads" />
          </div>
        </div>
      </section>

      {/* App Development */}
      <section id="section9" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              App Development
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">App Development</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Built for long-term performance
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                App development at Biztalbox begins with clarity on what the product is meant to achieve in real use,  rather than just how it is created.


                Throughout the many apps that we have designed, this understanding has consistently made our products more engaging, adoptable, and usable.

                Our app developers focus on structure before starting the development process. They pay attention to how easily users can move through it without friction. Flow and ease of use guide all decisions so the product feels easy to adopt from day one.
              </p>
              <p>
                Our app development services also consider how the system will behave as it grows. Stability, speed, and structure are planned early so the experience does not break as it grows.

                After launch, our app development consultants continue to observe how users interact with the product. Real usage patterns guide refinements and improvements over time.

                We build Apps that feel clear in purpose, stable in performance, and practical in real-world use.


              </p>
            </div>
            <LiteServiceViewMoreLink service="appdev" />
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-appdev"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #08
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #09
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="appdev" />
          </div>
        </div>
      </section>

      {/* Algorithm Analysis */}
      <section id="section10" className="relative bg-[#f2f2f2]">
        <div className="container flex flex-col pt-16">
          <div
            className="absolute left-3 top-[18%] z-10 sm:left-5 lg:left-8 hidden md:block"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <span className="block whitespace-nowrap text-[11px] font-normal uppercase tracking-[0.2em] sm:text-xs">
              Algorithm Analysis
            </span>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Algorithm Analysis</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Understanding platform behaviour
            </h3>
            <div className="grid md:grid-cols-2 md:gap-10 mt-6">
              <p>
                At Biztalbox, Algorithm analysis is about understanding what actually drives visibility in a system, not chasing surface-level signals.


                We use it to help brands stay aligned with how platforms distribute content at any given point in time. Algorithm analysis helps us read patterns behind performance instead of reacting after it drops. The focus stays on understanding behaviour, not guessing outcomes.


                We also translate these signals into a clear direction for content and communication. Small adjustments in structure, timing, or format often decide how far something travels within a platform.
              </p>
              <p>
                At our digital marketing agency, we understand that algorithms don&apos;t have fixed rules but are characterised by dynamic behaviour that evolves. That is what allows us to adjust direction early, instead of correcting performance after it drops.


                What this gives brands is more stable visibility, better alignment with platform behaviour, and fewer fluctuations in how content performs over time.

              </p>
            </div>
            <LiteServiceViewMoreLink service="algo" />
          </div>

          <div
            className="relative z-10 mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
            style={{ background: "transparent" }}
            id="lite-scanner-algo"
          >
            <div className="relative overflow-hidden text-left">
              <div className="numberTrack flex w-[200%] will-change-transform">
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #09
                </span>
                <span className="basis-1/2 shrink-0 grow-0 text-left text-[34px] font-semibold leading-none tracking-tight">
                  #10
                </span>
              </div>
            </div>
            <div className="mt-14 h-44" />
            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="relative h-[22px] w-[140px]">
                <div className="barcode absolute inset-0 h-full w-full rounded-[2px] border border-black/30 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_4px)] opacity-80" />
                <div
                  style={{ display: "none" }}
                  className="barcoadCheck absolute inset-0 top-1/2 h-[2px] w-full scale-110 rotate-2 -translate-y-1/2 bg-red-500"
                />
              </div>
              <div
                style={{ width: "0px", color: "transparent" }}
                className="purchaseStatus mr-auto overflow-hidden rounded-full border border-red-500 text-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              >
                PURCHASED
              </div>
            </div>
            <LiteTicketSpecsFooter service="algo" />
          </div>
        </div>
      </section>

      <WhyChooseUsLite />
      {/* service area end */}


      <section id="recieptSection" className="fixed hidden md:block z-20 bottom-0 left-5 bg-white p-3 translate-y-full">
        <div className="flex flex-col gap-1 w-44 divide-y-2 divide-x-0 divide-dashed text-sm font-thin font-mono">

          <div className="flex justify-between">
            <span>BIZTALBOX</span>
            <span>{formatReceiptDate(new Date())}</span>
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
              <span className="min-w-0 break-words">Content Writing</span>
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
            <span>PHONE: +91 9485699709</span>
          </div>

        </div>
      </section>

      <section id="ctaSection" className="pt-10 pb-5">
        <div className="container flex flex-col gap-10 overflow-hidden">
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-thin uppercase leading-none mx-auto text-center">
            Thanks for being here<br />Let’s take this forward.
          </h3>
          <div className="h-48 2xl:h-[30rem]"></div>
          <Link href="/contact" className="hover:!bg-black bg-[#F2F2F2] hover:!text-white relative z-10 text-center uppercase text-3xl md:text-5xl lg:text-7xl font-thin mx-auto px-5 py-4 border border-black rounded-full">

            Let&apos;s Talk ↗
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;

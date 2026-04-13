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
import { getTicketSpecNameColumns } from "./lite-service-ticket-specs";

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
        className="inline-flex rounded-full border border-black bg-[#F2F2F2] px-10 py-2.5 text-sm font-medium uppercase text-black transition-colors hover:bg-orange-600 hover:!text-white"
      >
        View More
      </Link>
    </div>
  );
}

function LiteTicketSpecsFooter({ service }: { service: LiteServicePageKey }) {
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
          className="relative z-10 pt-20"

        >
          <div className="container flex flex-col gap-16">
            {/* Center — mobile: natural height only; sm+: fills middle row for vertical centering */}
            <div className="flex items-start justify-center pt-2 max-sm:self-start sm:-translate-y-4 sm:items-center sm:pt-0">
              <div className="w-full max-w-screen text-center flex flex-col gap-6">
                <h3
                >
                  Creativity? Always
                  <br />
                  Calculated? Definitely
                </h3>

                <h1>biztalbox</h1>

                <h3>Igniting your brand's
                  potential with
                  out-of-the-box
                  Marketing Solutions</h3>
                <p className="text-sm uppercase">
                  Expert digital marketing, SEO, and web development tailored for your success. Contact us & we will find that solution for you!
                </p>


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
        <div className="container relative py-32">
          {/* Top: centered nav + right pill */}
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row items-center lg:justify-between">
            <div className="flex flex-wrap items-center mx-auto justify-center gap-x-5 gap-y-2 text-center text-xs uppercase">
              <span className="whitespace-nowrap">DIGITAL BRANDING</span>
              <span className="whitespace-nowrap">VISUAL Designing</span>
              <span className="whitespace-nowrap">INTERACTIVE WEBSITES</span>
              <span className="whitespace-nowrap">DISRUPTIVE COMM.</span>
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
              Biztal Box is a marketing agency that enhances brands' online presence through a range of services including SEO optimization, web development, graphic design, and more. Our dynamic agency crafts strategies that stick while bringing every client' unique perspective to life.            </p>
            <div className="flex flex-col lg:items-start">
              <p>
                We understand a brand’s goals and ideas to the finest detail by immersing ourselves in its unique vision. By brainstorming creative solutions, we improve visibility and ensure that every interaction with your audience leaves a memorable mark.              </p>
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

            <h2 className="text-center">Search Engine Optimization</h2>

            <h3
              className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20"
            >
              Organic Rankings & Visibility
            </h3>
            {/* Two-column body */}
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  At Biztalbox, we approach SEO as a long-term system grounded in clarity and intent, one that begins with a thorough audit. We study your website in detail, understanding how it is understood by search engines and users, where it falls short, and how it compares within its competitive space. This early clarity allows every subsequent step to remain grounded and precise.
                </p>
                <p>
                  Our SEO experts then turn to search intent, looking beyond keywords to the underlying patterns of behaviour. What people are actually looking for. What leads them forward? These insights inform how we refine the technical foundation of your website, bringing greater coherence to its structure, speed, and internal movement.
                </p>
              </div>
              <div>
                <p>
                  Content at Biztalbox is crafted with intention and patience. It connects with your audience, builds trust through relevance, and grows into authority over time. Our Off-page SEO services add another layer. This includes earning relevant backlinks, strengthening brand mentions, and placing your website within a network of trusted sources that search engines already recognise.
                </p>
                <p>
                  Our SEO services do not stop at implementation. We revisit and refine the work regularly as search behaviour continues to evolve. At Biztalbox, we always keep the client in the loop with clear reporting. It gives a clear view of progress and business growth.
                  What follows is a presence in search that carries weight, holds consistency, and earns its position over time.
                </p>
              </div>

            </div>


            <LiteServiceViewMoreLink service="seo" />
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#02</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Social Media Optimization</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Reach, Engagement, & Growth
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  Our social media managers begin by understanding your brand, your audience, and how your competitors are
                  positioning themselves. This gives us a clear direction before anything goes live. We then plan content
                  calendars to bring consistency and direction to your presence.
                </p>
                <p className="mt-4">
                  We don&apos;t just chase trends or virality, but focus on building a social presence that actually reflects
                  your brand and stays consistent over time. Our social media marketing services focus on making content feel
                  clear and natural. Not forced trends or random ideas, but communication that fits your brand and makes sense
                  to your audience.
                </p>
              </div>
              <div>
                <p>
                  We also pay attention to how people respond. What they engage with, what they ignore, and what brings them
                  back. This helps us refine what your brand should keep doing and what it should leave behind.
                </p>
                <p className="mt-4">
                  Over time, this builds familiarity. Your brand starts to feel recognisable, not because of one post, but
                  because of consistent presence.
                </p>
                <p className="mt-4">
                  With our expert social media services, we aim to make your brand feel active, relevant, and easy to connect
                  with on a daily basis.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="smo" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#03</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Website Development</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Performance-focused websites
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  At Biztalbox, we believe a website should make things easier for your users, not more complicated. Our web
                  development approach reflects that thinking.
                </p>
                <p className="mt-4">
                  We begin with understanding what the business actually needs the website to carry. Not just information, but
                  direction. What should be seen first, what should be understood next, and what should lead a user toward
                  action? This thinking sets the foundation before any layout is discussed.
                </p>
              </div>
              <div>
                <p>
                  Web development is then approached through structure first, not visuals. Our web development experts focus
                  on making websites that offer a guided experience, rather than isolated pages. Information is arranged to
                  reduce effort for the user, so nothing feels misplaced or difficult to reach. The goal is simple navigation
                  that still feels intentional.
                </p>
                <p className="mt-4">
                  Our web development firm takes pride in the quality of our execution. Clean development practices,
                  consistent responsiveness, and reliable performance are maintained across every project.
                </p>
                <p className="mt-4">
                  Lastly, Biztalbox always ensure the website remains manageable after it goes live.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="webdev" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#04</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Graphic Designing</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Clear and consistent brand identity
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  At Biztalbox, we understand that visual design plays a defining role in how a brand is interpreted and
                  remembered.
                </p>
                <p className="mt-4">
                  We treat graphic design as a connected system rather than standalone visuals. Every piece we create has to
                  work with the next one. So the brand feels consistent wherever it shows up.
                </p>
                <p className="mt-4">
                  Our graphic designers start by looking at how your brand currently shows up across different touchpoints. We
                  look for gaps in consistency. We notice where clarity is lost. We see where the visual language is not holding
                  attention the way it should.
                </p>
              </div>
              <div>
                <p>
                  From there, our graphic design services focus on how information is perceived. Typography, spacing, colour, and
                  layout are crafted so that the design feels easy to read and naturally organised.
                </p>
                <p className="mt-4">
                  We keep attention where it matters. Important information is made clear at first glance. Supporting elements
                  stay in the background without distracting from the message.
                </p>
                <p className="mt-4">
                  We stay consistent across every asset we create. So your brand does not feel different on each platform. It
                  feels like one identity, carried forward with discipline.
                </p>
                <p className="mt-4">
                  Each design decision at Biztalbox is made with one goal in mind: To make your brand easier to recognise,
                  easier to understand, and harder to forget.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="graphic" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#05</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Motion Graphics</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Storytelling Through Motion
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  At Biztalbox, we turn to motion graphics when a message is too layered to be understood in a single static
                  frame.
                </p>
                <p className="mt-4">
                  Motion graphics play a direct role in how clearly a brand is understood and how strongly it is remembered.
                </p>
                <p className="mt-4">
                  Motion graphic designers at Biztalbox approach motion as a way to sharpen brand communication. We start by
                  looking at how your brand currently shows up visually and where its communication weakens.
                </p>
                <p className="mt-4">This helps us decide the structure, sequence, and emphasis each part needs.</p>
              </div>
              <div>
                <p>
                  We design motion around how attention actually moves. What draws focus, what holds it, and what needs to be
                  reinforced before moving forward. This is where our process stays deliberate rather than decorative.
                </p>
                <p className="mt-4">
                  Our motion graphics agency brings consistency to every layer, from typography to transitions to rhythm.
                  Everything works together, so the viewer is not interpreting multiple signals at once.
                </p>
                <p className="mt-4">
                  We keep motion purposeful. It exists only to make the idea easier to follow and quicker to absorb. Every piece
                  is designed to support how your brand is perceived.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="video" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#06</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Content Writing</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Words that drive action
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  At Biztalbox, we see copywriting as the layer that decides how a brand is understood, positioned, and ultimately
                  responded to.
                </p>
                <p className="mt-4">
                  The purpose is not to describe what a brand does, but to influence how it is perceived at the exact moment a
                  decision is being formed.
                </p>
                <p className="mt-4">
                  Biztalbox&apos;s copywriting services have helped brands improve how they express value and position themselves.
                  This has led to clearer responses, stronger engagement, and more confident decision-making.
                </p>
                <p className="mt-4">
                  Our copywriting experts begin by understanding how your audience evaluates a brand like yours. What they
                  compare. What they doubt. What they need to take you seriously. Because brand positioning is influenced by the
                  language used to describe it.
                </p>
              </div>
              <div>
                <p>
                  From there, our copywriters focus on how decisions move. Copy is written to reduce hesitation, close
                  interpretation gaps, and bring clarity to what would otherwise feel uncertain or incomplete. It is also
                  structured to carry the reader forward without forcing attention.
                </p>
                <p className="mt-4">
                  We also use language to strengthen perception. The same offering can feel ordinary or credible depending on how
                  it is expressed. Copy plays a direct role in that shift.
                </p>
                <p className="mt-4">
                  Across all communication, we maintain control over tone and consistency so the brand feels aligned in every
                  context it appears in. This consistency is what builds recognition and trust over time.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="content" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#07</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Performance Marketing</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Measurable marketing outcomes
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  Performance marketing, for us at Biztalbox, is a revenue system first. Every part of it has to support a
                  clear commercial outcome.
                </p>
                <p className="mt-4">
                  We begin by looking at how growth is currently being generated and where it is breaking down. In some cases,
                  the issue sits in acquisition. In others, it is the offer itself or what happens after the click. The point is
                  to locate the real constraint, not just the visible symptom.
                </p>
                <p className="mt-4">
                  We evaluate the entire journey together as part of a full funnel performance marketing strategy. Audience
                  targeting, messaging, creative direction, landing experience, and tracking. If even one of these is misaligned,
                  performance stays capped regardless of spend.
                </p>
              </div>
              <div>
                <p>
                  We also read performance beyond surface metrics. We look at lead quality, drop-off behaviour, and consistency
                  of results over time. These patterns show what is actually working and what is not.
                </p>
                <p className="mt-4">
                  Our performance marketing agency brings structure across the full revenue flow through performance marketing
                  solutions. So performance is not driven by assumptions or isolated wins, but by a system that holds together
                  under scale.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="ads" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#08</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">App Development</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Built for long-term performance
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  App development, for us at Biztalbox, begins with clarity on what the product is meant to achieve in real
                  use, not just how it is built.
                </p>
                <p className="mt-4">
                  Throughout the many apps that we have designed, this understanding has repeatedly made our products more
                  engaging, adoptable, and usable.
                </p>
                <p className="mt-4">
                  Our app developers start by defining the core problem, the user journey, and what success should look like.
                  Then they focus on the structure before starting the development process. They pay attention to how easily
                  users can move through it without friction. Flow and ease of use guide all decisions so the product feels easy
                  to adopt from day one.
                </p>
              </div>
              <div>
                <p>
                  Our app development services also consider how the system will behave as it grows. Stability, speed, and
                  structure are planned early so the experience does not break as it grows.
                </p>
                <p className="mt-4">
                  After launch, our app development consultants continue to observe how users interact with the product. Real
                  usage patterns guide refinements and improvements over time.
                </p>
                <p className="mt-4">
                  Apps that we build at Biztalbox feel clear in purpose, stable in performance, and practical in real-world use.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="appdev" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

          <div className="flex justify-center self-end">
            <div className="rounded-md border border-black p-3.5 text-center">
              <p className="text-4xl font-semibold leading-none tracking-tight">#09</p>
            </div>
          </div>

          <div className="pt-40 max-w-screen mx-auto">
            <h2 className="text-center">Algorithm Analysis</h2>
            <h3 className="text-black mt-10 uppercase text-center text-lg md:text-xl lg:text-3xl relative z-20">
              Understanding platform behaviour
            </h3>
            <div className="grid gap-x-10 gap-y-8 px-2 sm:mt-10 sm:grid-cols-2 sm:gap-x-14 sm:px-6 lg:mt-12">
              <div>
                <p>
                  At Biztalbox, Algorithm analysis is about understanding what actually drives visibility in a system, not
                  chasing surface-level signals.
                </p>
                <p className="mt-4">
                  We use it to help brands stay aligned with how platforms distribute content at any given point in time.
                  Algorithm analysis helps us read patterns behind performance instead of reacting after it drops. The focus
                  stays on understanding behaviour, not guessing outcomes.
                </p>
                <p className="mt-4">
                  We also translate these signals into a clear direction for content and communication. Small adjustments in
                  structure, timing, or format often decide how far something travels within a platform.
                </p>
              </div>
              <div>
                <p>
                  At our digital marketing agency, we understand that algorithms don&apos;t have fixed rules but are characterised
                  by dynamic behaviour that evolves. That is what allows us to adjust direction early, instead of correcting
                  performance after it drops.
                </p>
                <p className="mt-4">
                  What this gives brands is more stable visibility, better alignment with platform behaviour, and fewer
                  fluctuations in how content performs over time.
                </p>
              </div>
            </div>
            <LiteServiceViewMoreLink service="algo" />
          </div>

          <div
            className="relative mt-40 w-80 mx-auto overflow-hidden rounded-[14px] border border-black px-3 pb-4 pt-3"
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

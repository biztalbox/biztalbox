"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
import { IoChevronDown, IoChevronForward, IoChevronUp } from "react-icons/io5";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterFour from "@/layouts/footers/footer-four";
import SafeHtml from "@/components/seo-page/SafeHtml";
import type { GraphicPageData } from "@/lib/cms-graphic-pages";
import GraphicIndustryCards from "@/components/service/graphic-industry-cards";

const SERVICES = [
  "ILLUSTRATION",
  "BRAND IDENTITY",
  "PRINT DESIGN",
  "UI/UX",
  "PACKAGING",
  "MOTION GRAPHICS",
] as const;

const CLIENT_LOGOS = Array.from({ length: 25 }, (_, i) => `/clients/${i + 1}.png`);

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery",
    text: "Deep-dive into your brand, audience, competitors, and goals. We ask the questions others dont.",
  },
  {
    num: "02",
    title: "Strategy",
    text: "Define positioning, messaging hierarchy, and creative direction before a single pixel is placed.",
  },
  {
    num: "03",
    title: "Design",
    text: "Iterative visual development with structured feedback rounds. You guide the direction - we execute it brilliantly.",
  },
  {
    num: "04",
    title: "Delivery",
    text: "Production-ready files, brand guidelines, and an ongoing support relationship — because great design is never one and done.",
  },
] as const;

const WHY_CHOOSE_ITEMS = [
  {
    title: "Provide Better Customer Experience.",
    icon: "users",
  },
  {
    title: "Process Driven Approach",
    icon: "tie",
  },
  {
    title: "Strong Communication Channels",
    icon: "person",
  },
  {
    title: "Strong Branding Expertise",
    icon: "gear-person",
  },
  {
    title: "Ability To Handle Complex Projects",
    icon: "bulb",
  },
  {
    title: "On Time Delivery.",
    icon: "clock",
  },
] as const;

const GRAPHIC_SERVICE_OPTIONS = [
  "Ad Design",
  "Social Design",
  "Presentation Design",
  "Print Design",
  "Branding",
  "UI/UX",
  "Illustrations",
  "Collateral Design",
] as const;

const CREATIVE_SERVICES = [
  {
    id: 1,
    title: "Marketing & Advertising Graphic Design Services",
    layout: "a",
    row: 0,
    image: "/graphic/creative-services/marketing-advertising.png",
  },
  {
    id: 2,
    title: "Social Media Graphic Design Services",
    layout: "b",
    row: 0,
    image: "/graphic/creative-services/social-media.png",
  },
  {
    id: 3,
    title: "eBook, Report & Presentation Graphic Design Services",
    layout: "a",
    row: 0,
    image: "/graphic/creative-services/ebook-report-presentation.png",
  },
  {
    id: 4,
    title: "Print & Packaging Graphic Design Services",
    layout: "b",
    row: 0,
    image: "/graphic/creative-services/print-packaging.png",
  },
  {
    id: 5,
    title: "Branding & Brand Identity Graphic Design Services",
    layout: "a",
    row: 1,
    image: "/graphic/creative-services/branding-identity.png",
  },
  {
    id: 6,
    title: "Website & UI/UX Graphic Design Services",
    layout: "b",
    row: 1,
    image: "/graphic/creative-services/website-ui-ux.png",
  },
  {
    id: 7,
    title: "Illustration & Digital Artwork Graphic Design Services",
    layout: "a",
    row: 1,
    image: "/graphic/creative-services/illustration-artwork.png",
  },
  {
    id: 8,
    title: "Marketing Collateral Graphic Design Services",
    layout: "b",
    row: 1,
    image: "/graphic/creative-services/marketing-collateral.png",
  },
] as const;

const CREATIVE_SERVICE_DETAIL_LOREM =
  "OUR COMPREHENSIVE GRAPHIC DESIGN SERVICES EMPOWER YOUR BUSINESS TO STAND OUT IN A COMPETITIVE MARKETPLACE. FROM CONCEPT TO DELIVERY, WE CREATE VISUALS THAT CAPTURE ATTENTION, BUILD TRUST, AND DRIVE RESULTS. LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.";

const DEFAULT_HERO_HEADING =
  "Graphic Designing Services in Gibraltar UK.";

const DEFAULT_HERO_PARAGRAPH =
  "Bring your content to new heights using professional graphic design solutions made for business makers, creators, and brands. Biztalbox assists in transforming ideas into engaging visual stories that boost customer engagement, establish trust, and help support the long-term growth of businesses.";

const DEFAULT_HOW_WE_WORK = {
  subtitle: "HOW WE WORK",
  heading: "A process built for results",
  paragraph:
    "Every project follows our proven four-stage process - from discovery to delivery, keeping you informed and in control throughout.",
};

const DEFAULT_GOOD_DESIGN_HEADING = "Good Graphic Design";

const DEFAULT_CREATIVE_SERVICES_HEADING = "Creative Services";

const DEFAULT_FAQ_HEADING = "Frequently asked questions";

type CreativeService = {
  id: number;
  title: string;
  paragraph: string;
  layout: "a" | "b";
  row: 0 | 1;
  image: string;
};

function CreativeServiceArrowIcon({
  isDark,
  isOpen,
  direction,
}: {
  isDark: boolean;
  isOpen?: boolean;
  direction: "up" | "down";
}) {
  const showUp = isOpen ? direction === "down" : direction === "up";
  const ArrowIcon = showUp ? IoChevronUp : IoChevronDown;

  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover/learn:scale-110"
      style={{ backgroundColor: isDark ? "#ffffff" : "#18181b" }}
      aria-hidden
    >
      <ArrowIcon
        className="h-4 w-4"
        style={{ color: isDark ? "#18181b" : "#ffffff" }}
      />
    </span>
  );
}

function CreativeServiceLearnMore({
  isDark,
  isOpen,
  onClick,
  overlayPosition,
}: {
  isDark: boolean;
  isOpen?: boolean;
  onClick: () => void;
  overlayPosition: "top" | "bottom";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`group/learn absolute inset-x-0 z-10 flex w-full items-center justify-between gap-3 px-3 py-3 text-left transition-all duration-300 sm:px-4 sm:py-3.5 ${
        overlayPosition === "top" ? "top-0" : "bottom-0"
      }`}
    >
      <span
        className="text-sm font-medium transition-all duration-300 group-hover/learn:font-semibold sm:text-[15px]"
        style={{
          color: "#ffffff",
          textShadow: "0 1px 6px rgba(0,0,0,0.45)",
        }}
      >
        <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 group-hover/learn:after:w-full">
          {isOpen ? "Show less" : "Learn more"}
        </span>
      </span>
      <CreativeServiceArrowIcon
        isDark={isDark}
        isOpen={isOpen}
        direction={overlayPosition === "top" ? "up" : "down"}
      />
    </button>
  );
}

function CreativeServiceImageBlock({
  service,
  isDark,
  isOpen,
  onToggle,
  learnMorePosition,
  flushEdge,
}: {
  service: CreativeService;
  isDark: boolean;
  isOpen?: boolean;
  onToggle: () => void;
  learnMorePosition: "top" | "bottom";
  flushEdge: "top" | "bottom";
}) {
  const edgeRadius = flushEdge === "top" ? "rounded-b-2xl" : "rounded-t-2xl";

  return (
    <div className={`group/image relative w-full overflow-hidden bg-white ${edgeRadius}`}>
      <div className="relative min-h-[180px] w-full sm:min-h-[220px] lg:min-h-[240px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover/image:scale-105 sm:p-3"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/image:bg-black/10" />
        
        <CreativeServiceLearnMore
          isDark={isDark}
          isOpen={isOpen}
          onClick={onToggle}
          overlayPosition={learnMorePosition}
        />
      </div>
    </div>
  );
}

function CreativeServiceDetailPanel({
  isDark,
  html,
  plain = false,
}: {
  isDark: boolean;
  html: string;
  plain?: boolean;
}) {
  return (
    <div className={plain ? undefined : "rounded-xl px-4 py-4 sm:rounded-2xl sm:px-5 sm:py-5"} style={plain ? undefined : { backgroundColor: isDark ? "#1e1e1e" : "#e0e0e0" }}>
      <div style={{ color: isDark ? "rgba(255,255,255,0.88)" : "rgba(24,24,27,0.82)" }}>
        <SafeHtml
          html={html}
          className="text-[11px] font-medium leading-[1.85] tracking-[0.06em] sm:text-xs sm:leading-[1.9]"
        />
      </div>
    </div>
  );
}

function CreativeServiceCard({
  service,
  isDark,
  isOpen,
  expandInline,
  onToggle,
}: {
  service: CreativeService;
  isDark: boolean;
  isOpen: boolean;
  expandInline: boolean;
  onToggle: () => void;
}) {
  const cardBg = isDark ? "#2a2a2a" : "#ececec";
  const titleColor = isDark ? "#ffffff" : "#18181b";

  const titleBlock = (
    <div style={{ color: titleColor }}>
      <SafeHtml
        html={service.title}
        className="text-base font-bold leading-snug sm:text-[1.05rem] sm:leading-[1.35]"
      />
    </div>
  );

  return (
    <article
      className={`flex w-full flex-col overflow-hidden rounded-2xl ${
        expandInline ? "self-start" : "h-full"
      }`}
      style={{ backgroundColor: cardBg }}
    >
      {service.layout === "b" ? (
        <>
          <div className="px-2.5 sm:px-4">
            <CreativeServiceImageBlock
              service={service}
              isDark={isDark}
              onToggle={onToggle}
              learnMorePosition="top"
              flushEdge="top"
              isOpen={isOpen}
            />
          </div>
          <div
            className={`flex flex-col px-3 py-4 pt-3 sm:px-5 sm:py-5 sm:pt-4 ${
              expandInline ? "" : "flex-1"
            }`}
          >
            {titleBlock}
          </div>
        </>
      ) : (
        <>
          <div className="px-3 py-4 pb-3 sm:px-5 sm:py-5 sm:pb-4">{titleBlock}</div>
          <div className={`w-full px-2.5 sm:px-4 ${expandInline ? "" : "mt-auto"}`}>
            <CreativeServiceImageBlock
              service={service}
              isDark={isDark}
              onToggle={onToggle}
              learnMorePosition="bottom"
              flushEdge="bottom"
              isOpen={isOpen}
            />
          </div>
        </>
      )}

      {expandInline && isOpen ? (
        <div className="px-3 pb-4 pt-1 sm:px-5 sm:pb-5">
          <CreativeServiceDetailPanel isDark={isDark} html={service.paragraph} plain />
        </div>
      ) : null}
    </article>
  );
}

const SHAPE_BG = "/graphic/shape-bg.png";
const TEXTURE_BG = "/graphic/texture-bg.png";

const DESIGN_ELEMENTS_INTRO =
  "DESIGN IS ALL ABOUT COMBINING IMAGES, TEXTS AND IDEAS TO COMMUNICATE THE VALUE OF A COMPANY — VISUALLY, AND INSTANTLY. BY USING VISUAL ELEMENTS SUCH AS TYPOGRAPHY, PHOTOGRAPHS, COLOUR AND LAYOUT, GRAPHIC DESIGNERS HELP BUSINESSES CONNECT WITH THEIR AUDIENCE AND CREATE A LASTING IMPRESSION.";

const COLOUR_SWATCHES = ["#1a2744", "#6b8fa3", "#e8c547", "#d4c4a8", "#8fa68f", "#2d4a3e"] as const;

function DirectionArrows({ color }: { color: string }) {
  const arrowClass = "flex h-7 w-7 items-center justify-center";
  const stroke = color;

  return (
    <div className="grid shrink-0 grid-cols-2 gap-1.5" aria-hidden>
      <span className={arrowClass}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.8">
          <path d="M12 19V5M12 5l-5 5M12 5l5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={arrowClass}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.8">
          <path d="M5 12h14M19 12l-5-5M19 12l-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={arrowClass}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.8">
          <path d="M19 12H5M5 12l5-5M5 12l5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={arrowClass}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.8">
          <path d="M12 5v14M12 19l-5-5M12 19l5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

function GoodGraphicDesignSection({
  isDark,
  heading,
  paragraph,
}: {
  isDark: boolean;
  heading: string;
  paragraph: string;
}) {
  const borderColor = isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.88)";
  const cardBg = isDark ? "#2a2a2a" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#18181b";
  const mutedText = isDark ? "rgba(255,255,255,0.72)" : "rgba(24,24,27,0.72)";
  const bodyText = isDark ? "rgba(255,255,255,0.78)" : "rgba(24,24,27,0.78)";

  const row1Card = "overflow-hidden rounded-[18px] border p-4 sm:p-5 lg:h-[210px]";
  const row2Card = "overflow-hidden rounded-[18px] border p-4 sm:p-4 lg:h-[165px]";
  const row1Title = "text-[1.35rem] font-bold uppercase sm:text-[1.5rem]";
  const row2Title = "text-[1.2rem] font-bold uppercase leading-none tracking-tight sm:text-[1.35rem]";
  const bodySm = "text-[11px] sm:text-xs sm:leading-4";

  return (
    <section className="graphic-design-elements pb-12 pt-4 sm:pb-20 sm:pt-6">
      <div className="container">
        <SafeHtml
          html={heading}
          className="graphic-section-title text-[1.65rem] font-light leading-tight tracking-tight sm:text-[2rem] md:text-[2.35rem] lg:text-[2.75rem]"
        />
        <div
          className="graphic-divider mt-5 h-px w-full"
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }}
          role="presentation"
          aria-hidden
        />

        <SafeHtml
          html={paragraph}
          className="mt-6 text-[11px] leading-[1.85] tracking-[0.05em] sm:mt-8 sm:text-xs sm:leading-[1.9] graphic-muted"
        />

        <p
          className="mt-8 text-sm font-bold uppercase dark:text-white tracking-[0.04em] sm:mt-10 sm:text-[15px]"
          
        >
          Great design starts with 8 essential elements.
        </p>

        {/* Row 1 — taller cards */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:gap-3.5 md:grid-cols-2 lg:grid-cols-12 lg:gap-3.5">
          <article className="flex flex-col justify-between rounded-[18px] bg-black p-4 sm:p-5 lg:col-span-4 lg:h-[210px]">
            <div className="flex items-start justify-between gap-3">
              <h3 className={`${row1Title} text-white`} style={{ fontFamily: "var(--tp-ff-syne), sans-serif" }}>
                Direction
              </h3>
              <DirectionArrows color="#ffffff" />
            </div>
            <p className={`${bodySm} max-w-md text-white/85`}>
              Direction is what we want the viewer to look at first. It gives the design movement and guides the eye
              through the composition.
            </p>
          </article>

          <article
            className={`${row1Card} relative min-h-[130px] sm:min-h-[150px] lg:col-span-4`}
            style={{
              borderColor,
              backgroundColor: cardBg,
              backgroundImage: `url(${SHAPE_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className={`${row1Title} black_text`}>
              Shape
            </h3>
          </article>

          <article
            className={`${row1Card} relative min-h-[130px] sm:min-h-[150px] lg:col-span-2`}
            style={{
              borderColor,
              backgroundImage: `url(${TEXTURE_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className={`${row1Title} black_text`}>
              Texture
            </h3>
          </article>

          <article className={`${row1Card} flex flex-col justify-between lg:col-span-2`} style={{ borderColor, backgroundColor: cardBg }}>
            <h3
              className="text-[1.2rem] font-bold uppercase leading-none sm:text-[1.35rem] md:text-[1.5rem]"
              style={{
               
                WebkitTextStroke: `1.5px ${isDark ? "#ffffff" : "#18181b"}`,
                WebkitTextFillColor: "transparent",
              }}
            >
              Line
            </h3>
            <p className={bodySm} style={{ color: bodyText }}>
              Lines can be used to divide space and direct the viewer&apos;s eye. They can be used to create emphasis or
              movement.
            </p>
          </article>
        </div>

        {/* Row 2 — shorter cards */}
        <div className="mt-3.5 grid grid-cols-1 gap-3 sm:gap-3.5 md:grid-cols-2 lg:mt-3.5 lg:grid-cols-12 lg:gap-3.5">
          <article className={`${row2Card} flex flex-col justify-between lg:col-span-4`} style={{ borderColor, backgroundColor: cardBg }}>
            <h3
              className="text-[1.75rem] font-bold lowercase leading-none sm:text-[1.9rem]"
              style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive", color: textColor }}
            >
              typography
            </h3>
            <p className={bodySm} style={{ color: bodyText }}>
              Typography is the art of arranging type to make written language legible, readable and appealing when
              displayed.
            </p>
          </article>

          <article className={`${row2Card} lg:col-span-2`} style={{ borderColor, backgroundColor: cardBg }}>
            <div className="flex h-full flex-col items-start gap-3 sm:flex-row sm:items-center">
              <div className="flex shrink-0 flex-col font-bold leading-[0.9]" style={{ color: textColor }}>
                {Array.from({ length: 6 }, (_, i) => (
                  <span
                    key={i}
                    style={{
                      
                      fontSize: `${Math.max(0.65, 1.28 - i * 0.14)}rem`,
                      lineHeight: 1,
                    }}
                  >
                    SIZE
                  </span>
                ))}
              </div>
              <p className={`${bodySm} pt-3`} style={{ color: bodyText }}>
                Size is simply how small or large something is. Size can be used to create emphasis or visual hierarchy.
              </p>
            </div>
          </article>

          <article className={`${row2Card} flex flex-col justify-between lg:col-span-3`} style={{ borderColor, backgroundColor: cardBg }}>
            <div className="flex items-start justify-between gap-2">
              <h3 className={row2Title} style={{ fontFamily: "var(--tp-ff-syne), sans-serif", color: textColor }}>
                Colour
              </h3>
              <div className="flex shrink-0 gap-0.5 sm:gap-1">
                {COLOUR_SWATCHES.map((color) => (
                  <span key={color} className="h-9 w-2.5 rounded-sm sm:h-12 sm:w-[15px] md:h-[52px] md:w-4" style={{ backgroundColor: color }} aria-hidden />
                ))}
              </div>
            </div>
            <p className={`${bodySm} pt-3`} style={{ color: bodyText }}>
              Colour helps set the mood and tone of a design. It can be used to create contrast, emphasis and visual
              interest.
            </p>
          </article>

          <article className={`${row2Card} flex flex-col justify-between lg:col-span-3`} style={{ borderColor, backgroundColor: cardBg }}>
            <h3 className={row2Title} style={{ fontFamily: "var(--tp-ff-syne), sans-serif", color: textColor }}>
              Value
            </h3>
            <p className={bodySm} style={{ color: bodyText }}>
              Value refers to the lightness or darkness of a colour. It helps create depth, contrast and visual interest
              in a design.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CreativeServicesSection({
  isDark,
  openId,
  onToggle,
  sectionHeading,
  services,
}: {
  isDark: boolean;
  openId: number | null;
  onToggle: (id: number) => void;
  sectionHeading: string;
  services: CreativeService[];
}) {
  const openService = services.find((service) => service.id === openId) ?? null;

  const renderDesktopRow = (row: 0 | 1) => {
    const rowServices = services.filter((service) => service.row === row);
    const showAbove = openService?.row === row && openService.layout === "b";
    const showBelow = openService?.row === row && openService.layout === "a";
    const openParagraph = openService?.paragraph ?? CREATIVE_SERVICE_DETAIL_LOREM;

    return (
      <div key={row}>
        {showAbove ? (
          <div className="mb-4 sm:mb-5">
            <CreativeServiceDetailPanel isDark={isDark} html={openParagraph} />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5 xl:grid-cols-4 xl:gap-6">
          {rowServices.map((service) => (
            <CreativeServiceCard
              key={service.id}
              service={service}
              isDark={isDark}
              isOpen={openId === service.id}
              expandInline={false}
              onToggle={() => onToggle(service.id)}
            />
          ))}
        </div>

        {showBelow ? (
          <div className="mb-6 mt-4 sm:mt-5 sm:mb-8">
            <CreativeServiceDetailPanel isDark={isDark} html={openParagraph} />
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <section className="graphic-creative-services pb-12 pt-4 sm:pb-20 sm:pt-6">
      <div className="container">
        <SafeHtml
          html={sectionHeading}
          className="graphic-section-title text-[1.65rem] font-light leading-tight tracking-tight sm:text-[2rem] md:text-[2.35rem] lg:text-[2.75rem]"
        />
        <div
          className="graphic-divider mt-5 h-px w-full"
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }}
          role="presentation"
          aria-hidden
        />

        <div className="mt-6 grid auto-rows-min grid-cols-1 items-start gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:hidden">
          {services.map((service) => (
            <div key={service.id} className="min-w-0 self-start">
              <CreativeServiceCard
                service={service}
                isDark={isDark}
                isOpen={openId === service.id}
                expandInline
                onToggle={() => onToggle(service.id)}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 hidden flex-col gap-3 sm:mt-8 sm:gap-4 lg:flex lg:gap-5">
          {renderDesktopRow(0)}
          {renderDesktopRow(1)}
        </div>
      </div>
    </section>
  );
}

const FAQ_LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

const FAQ_ITEMS = [
  { id: 1, question: 'What is "Creative-as a Service"?' },
  { id: 2, question: "What makes Superside's design services different?" },
  { id: 3, question: "How does a design subscription work?" },
  { id: 4, question: "What is graphic design?" },
  { id: 5, question: "What do graphic designers do?" },
  { id: 6, question: "Who needs graphic design services?" },
  { id: 7, question: "Do you do custom plans?" },
  { id: 8, question: "What billing options do you offer?" },

] as const;

function GraphicFaqItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  isDark,
}: {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isDark: boolean;
}) {
  const answerId = `graphic-faq-answer-${id}`;

  return (
    <article
      className="rounded-2xl px-4 py-3 sm:px-6 sm:py-4"
      style={{
        backgroundColor: isDark ? "#2a2a2a" : "#ececec",
      }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span
          className="pr-2 text-base font-semibold leading-snug sm:text-[1.125rem] md:text-[1.2rem]"
          style={{
            fontFamily: "var(--tp-ff-syne), sans-serif",
            color: isDark ? "#ffffff" : "#18181b",
          }}
        >
          <SafeHtml html={question} as="span" />
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: isDark ? "#ffffff" : "#18181b" }}
          aria-hidden
        >
          <IoChevronDown
            className="h-4 w-4 transition-transform duration-200"
            style={{
              color: isDark ? "#18181b" : "#ffffff",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          id={answerId}
          className="mt-3 text-[15px] leading-[1.65] sm:text-base sm:leading-[1.7]"
          style={{ color: isDark ? "rgba(255,255,255,0.62)" : "rgba(24,24,27,0.58)" }}
        >
          <SafeHtml html={answer} />
        </div>
      ) : null}
    </article>
  );
}

function GraphicQuoteSection({ isDark }: { isDark: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [selectedService, setSelectedService] = useState("");

  const panelBg = isDark ? "#0a0a0a" : "#f3f3f3";
  const inputBg = isDark ? "#333333" : "#e0e0e0";
  const inputText = isDark ? "#ffffff" : "#18181b";
  const textColor = isDark ? "#ffffff" : "#18181b";
  const mutedText = isDark ? "rgba(255,255,255,0.92)" : "rgba(24,24,27,0.78)";
  const placeholderClass = isDark ? "placeholder:text-white/40" : "placeholder:text-zinc-600/50";
  const placeholderTextClass = isDark ? "text-white/40" : "text-zinc-600/50";
  const fieldClass = `h-[52px] w-full min-w-0 max-w-full rounded-lg border-0 px-4 text-base font-normal outline-none ring-0 focus:outline-none sm:h-[54px] sm:px-5 ${placeholderClass}`;
  const selectClass = `${fieldClass} cursor-pointer appearance-none truncate bg-[length:14px] bg-[right_0.875rem_center] bg-no-repeat pr-10 sm:bg-[length:16px] sm:bg-[right_1.25rem_center] sm:pr-12`;
  const textareaClass = `w-full min-w-0 max-w-full resize-none overflow-hidden rounded-lg border-0 px-4 py-3 text-base font-normal outline-none ring-0 focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-5 ${placeholderClass}`;
  const selectArrow = isDark
    ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ffffff66' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2318181b66' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage(null);
    setIsSuccess(null);

    try {
      const formData = new FormData(e.currentTarget);
      if (!formData.get("budget")) formData.set("budget", "Not specified");
      const formObject = Object.fromEntries(formData.entries());

      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const timestamp = new Date().toLocaleString("en-IN");

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formObject,
          pageUrl,
          userAgent,
          timestamp,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormMessage(result.message);
        setIsSuccess(true);
        setSelectedService("");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(
          result.message ||
            "Sorry, there was an error submitting your enquiry. Please try again.",
        );
      }
    } catch (error: unknown) {
      setFormMessage(error instanceof Error ? error.message : "Request failed");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fieldStyle = {
    backgroundColor: inputBg,
    color: inputText,
  };

  const selectStyle = {
    ...fieldStyle,
    backgroundImage: `url("${selectArrow}")`,
  };

  return (
    <section id="graphic-quote-section" className="graphic-quote pt-8 sm:pb-24 sm:pt-12 lg:pb-28">
      <div className="container">
        <div
          className="graphic-quote-panel mx-auto min-w-0 overflow-hidden rounded-2xl px-4 py-10 text-center sm:rounded-3xl sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20"
          style={{ backgroundColor: panelBg }}
        >
          <p
            className="text-base font-normal leading-relaxed sm:text-[17px]"
            style={{ color: mutedText }}
          >
            Are you ready to create the perfect graphic design with us?
          </p>

          <h2
            className="mt-5 text-[2rem] font-bold uppercase leading-[0.95] tracking-tight sm:mt-6 sm:text-[2.75rem] md:mt-7 md:text-[3.5rem] lg:text-[4.25rem]"
            style={{
              
              color: textColor,
            }}
          >
            GET A QUOTE
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-relaxed sm:mt-6 sm:text-base md:mt-7 md:text-[17px] md:leading-8"
            style={{ color: mutedText }}
          >
            Let our experienced designers create unique visual art for you.
            <br />
            If you want to ask a question or speak directly to the team, please call us{" "}
            <a
              href="tel:07546681556"
              className="transition-opacity hover:opacity-80"
              style={{ color: textColor }}
            >
              07546 681 556
            </a>
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-4xl min-w-0 text-left sm:mt-12 md:mt-14">
            <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2">
              <div className="min-w-0">
                <input
                  id="graphic-quote-name"
                  name="name"
                  type="text"
                  required
                  minLength={3}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  aria-label="Name"
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="min-w-0">
                <input
                  id="graphic-quote-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  aria-label="Email Address"
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="min-w-0">
                <input
                  id="graphic-quote-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  autoComplete="tel"
                  minLength={10}
                  maxLength={15}
                  inputMode="tel"
                  aria-label="Phone No."
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="min-w-0">
                <select
                  id="graphic-quote-service"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  aria-label="Select Your Graphic Design Service"
                  className={`${selectClass} ${selectedService === "" ? placeholderTextClass : ""}`}
                  style={selectStyle}
                >
                  <option value="" disabled>
                    Select Your Graphic Design Service
                  </option>
                  {GRAPHIC_SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} style={{ backgroundColor: inputBg, color: inputText }}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-0">
                <input
                  id="graphic-quote-budget"
                  name="budget"
                  type="text"
                  placeholder="Enter your budget"
                  aria-label="Budget"
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>

              <div className="min-w-0">
                <textarea
                  id="graphic-quote-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message"
                  aria-label="Your message"
                  className={textareaClass}
                  style={fieldStyle}
                />
              </div>

              <div className="flex justify-end md:col-span-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-auto min-w-[9.5rem] items-center justify-center gap-2.5 rounded-lg px-8 py-3.5 text-base font-bold uppercase tracking-wide transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-0"
                  style={{
                    fontFamily: "var(--tp-ff-syne), sans-serif",
                    backgroundColor: isDark ? "#ffffff" : "#18181b",
                    color: isDark ? "#18181b" : "#ffffff",
                  }}
                >
                  {isLoading ? "Submitting…" : "Send"}
                  {!isLoading ? <IoChevronForward className="h-5 w-5" aria-hidden /> : null}
                </button>
              </div>
            </div>

            {formMessage ? (
              <p
                className={`mt-6 text-center text-base ${isSuccess ? "text-emerald-500" : "text-red-500"}`}
                role={isSuccess ? "status" : "alert"}
              >
                {formMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function WhyChooseIcon({ type, active }: { type: (typeof WHY_CHOOSE_ITEMS)[number]["icon"]; active: boolean }) {
  const bgColor = active ? "#000000" : "#a3a3a3";
  const iconMap = {
    users: GoPeople,
    tie: IoPersonOutline,
    person: BsTelephoneInbound,
    "gear-person": IoPersonOutline,
    bulb: HiOutlineLightBulb,
    clock: FaRegClock,
  } as const;

  const Icon = iconMap[type];

  return (
    <span
      className="inline-flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
      style={{ backgroundColor: bgColor }}
      aria-hidden
    >
      <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
    </span>
  );
}

function ProcessArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M5 12h12M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GraphicPageLayout({ data }: { data: GraphicPageData }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredWhyChoose, setHoveredWhyChoose] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [openCreativeServiceId, setOpenCreativeServiceId] = useState<number | null>(null);

  const creativeServices = useMemo<CreativeService[]>(() => {
    return CREATIVE_SERVICES.map((service, index) => {
      const cmsCard = data.creativeServices.cards[index];
      return {
        ...service,
        title: cmsCard?.title?.trim() || service.title,
        paragraph: cmsCard?.paragraph?.trim() || CREATIVE_SERVICE_DETAIL_LOREM,
      };
    });
  }, [data.creativeServices.cards]);

  const faqItems = useMemo(() => {
    const fromCms = data.faqs.filter((item) => item.question.trim() || item.answer.trim());
    if (fromCms.length > 0) {
      return fromCms.map((item, index) => ({
        id: index + 1,
        question: item.question,
        answer: item.answer,
      }));
    }

    return FAQ_ITEMS.map((item) => ({
      id: item.id,
      question: item.question,
      answer: FAQ_LOREM,
    }));
  }, [data.faqs]);

  const faqSplitIndex = Math.ceil(faqItems.length / 2);

  const heroHeading = data.hero.heading.trim() || DEFAULT_HERO_HEADING;
  const heroParagraph = data.hero.paragraph.trim() || DEFAULT_HERO_PARAGRAPH;
  const howWeWorkSubtitle = data.howWeWork.subtitle.trim() || DEFAULT_HOW_WE_WORK.subtitle;
  const howWeWorkHeading = data.howWeWork.heading.trim() || DEFAULT_HOW_WE_WORK.heading;
  const howWeWorkParagraph = data.howWeWork.paragraph.trim() || DEFAULT_HOW_WE_WORK.paragraph;
  const goodDesignHeading = data.goodDesign.heading.trim() || DEFAULT_GOOD_DESIGN_HEADING;
  const goodDesignParagraph = data.goodDesign.paragraph.trim() || DESIGN_ELEMENTS_INTRO;
  const creativeServicesHeading =
    data.creativeServices.heading.trim() || DEFAULT_CREATIVE_SERVICES_HEADING;
  const faqHeading = data.faqHeading.trim() || DEFAULT_FAQ_HEADING;

  const handleFaqToggle = (id: number) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  const handleCreativeServiceToggle = (id: number) => {
    setOpenCreativeServiceId((current) => (current === id ? null : id));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <Wrapper>
      <div data-graphic-page className="graphic-page min-h-screen overflow-x-hidden">
        <HeaderEleven transparent={isDark} cls={isDark ? "" : "tp-inner-header-border"} />

        <main>
          <section>
            <div className="container pb-12  sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-10">
              <div className="grid min-h-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                <div className="max-lg:order-2">
                  {/* <p className="graphic-muted mb-6 text-[11px] font-light uppercase tracking-[0.32em] sm:mb-8 sm:text-xs">
                    UK GRAPHIC DESIGN STUDIO
                  </p> */}

                  <h1 className="graphic-heading mb-6 text-[1.85rem] font-bold leading-[1.05] tracking-tight sm:mb-8 sm:text-5xl sm:leading-[1.02] lg:mb-10 lg:text-[3rem] xl:text-[3.3rem]">
                    { heroHeading }
                  </h1>

                  <SafeHtml
                    html={heroParagraph}
                    as="p"
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <Link
                      href="#graphic-quote-section"
                      className={`graphic-btn-secondary inline-flex w-full items-center justify-center border px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors sm:min-w-[168px] sm:w-auto sm:px-8 sm:text-xs ${
                        isDark
                          ? "border-white text-white hover:bg-white hover:!text-black !font-bold "
                          : "border-zinc-900 !text-zinc-900 hover:bg-black hover:!text-white !font-bold "
                      }`}
                    >
                      Start a Project
                    </Link>
                  </div>
                </div>

                <div className="relative max-lg:order-1 mx-auto flex w-full max-w-[320px] items-center justify-center sm:max-w-[420px] lg:mx-0 lg:max-w-none lg:justify-end">
                  <div className="relative aspect-square w-full max-w-[min(100%,280px)] sm:max-w-[min(100%,420px)] lg:max-w-[min(100%,480px)]">
                    <Image
                      src="/graphic/hero-visual.gif"
                      alt="Graphic design tools and creative workflow animation"
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 480px"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="graphic-divider h-px w-full"
              style={{ backgroundColor: isDark ? "#ffffff" : "#18181b" }}
              role="presentation"
              aria-hidden
            />

            <div className="pt-3 sm:py-4">
              <div className="w-full">
                <Marquee speed={35} autoFill gradient={false} pauseOnHover={false}>
                  {SERVICES.map((service) => (
                    <span
                      key={service}
                      className="flex shrink-0 items-center"
                    >
                      <span className="graphic-marquee-text whitespace-nowrap text-xs font-light uppercase tracking-[0.14em] sm:text-sm sm:tracking-[0.18em] md:text-base lg:text-lg">
                        {service}
                      </span>
                      <li
                        className="mx-6 flex shrink-0 items-center text-xl !text-[#ff6b2b] sm:mx-8 sm:text-2xl md:text-3xl"
                        aria-hidden
                      >
                        ★
                      </li>
                    </span>
                  ))}
                </Marquee>
              </div>
            </div>
          </section>

          

          {/* How we work */}
          <section className="graphic-process py-12 sm:py-20 sm:pt-6 lg:py-24">
            <div className="container">
              <p className="graphic-muted mb-4 text-[11px] font-light uppercase tracking-[0.28em] sm:text-xs">
                {howWeWorkSubtitle}
              </p>
              <h2
                className="graphic-section-title text-[1.65rem] font-light leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem]"
              >
                {howWeWorkHeading}
              </h2>
              <div
                className="graphic-divider mt-6 h-px w-full "
                style={{ backgroundColor: isDark ? "#ffffff" : "#18181b" }}
                role="presentation"
                aria-hidden
              />
              <SafeHtml
                html={howWeWorkParagraph}
                className="graphic-muted mt-6 text-sm leading-relaxed sm:text-[15px] sm:leading-7 lg:text-base"
              />

              <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-12 sm:mt-14 sm:grid-cols-2 sm:gap-y-14 md:gap-y-16 xl:grid-cols-4">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.num} className="relative pt-7 sm:pt-10">
                    <article
                      className="graphic-process-card relative flex min-h-[220px] flex-col rounded-2xl px-5 pb-7 pt-12 sm:min-h-[260px] sm:px-6 sm:pb-8 sm:pt-14 md:min-h-[280px] md:px-7 md:pb-9 md:pt-16"
                      style={{
                        backgroundColor: isDark ? "#1e1e1e" : "#f3f3f3",
                      }}
                    >
                      <span
                        className="graphic-process-num pointer-events-none absolute -top-7 left-4 z-10 text-[3.25rem] font-bold leading-none sm:-top-8 sm:left-5 sm:text-[4.5rem] md:-top-10 md:left-6 md:text-[5.5rem]"
                        
                      >
                        {step.num}
                      </span>
                      <span
                        className="graphic-process-icon absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border sm:right-6 sm:top-6"
                        style={{
                          borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
                          color: isDark ? "#ffffff" : "#18181b",
                        }}
                      >
                        <ProcessArrowIcon />
                      </span>
                      <h3
                        className="graphic-process-title mb-3 text-center text-lg font-semibold sm:mb-4 sm:text-xl md:text-2xl"
                        style={{ fontFamily: "var(--tp-ff-syne), sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p className="graphic-muted graphic-process-text text-center text-sm leading-relaxed sm:text-[15px]">
                        {step.text}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <GoodGraphicDesignSection
            isDark={isDark}
            heading={goodDesignHeading}
            paragraph={goodDesignParagraph}
          />

          <CreativeServicesSection
            isDark={isDark}
            openId={openCreativeServiceId}
            onToggle={handleCreativeServiceToggle}
            sectionHeading={creativeServicesHeading}
            services={creativeServices}
          />

          <section className="graphic-why-choose pb-16 pt-2 sm:pb-24">
            <div className="container">
              <h2
                className="graphic-section-title text-[1.65rem] font-light leading-tight tracking-tight sm:text-[2rem] md:text-[2.35rem]"
                
              >
                Why Choose Creative Biztalbox
              </h2>
              <div
                className="graphic-divider mt-5 h-px w-full"
                style={{ backgroundColor: isDark ? "#ffffff" : "#18181b" }}
                role="presentation"
                aria-hidden
              />

              <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:gap-6 xl:grid-cols-3">
                {WHY_CHOOSE_ITEMS.map((item) => {
                  const isActive = hoveredWhyChoose === item.title;
                  const cardTextColor = isActive
                    ? isDark
                      ? "#ffffff"
                      : "#000000"
                    : isDark
                      ? "rgba(255,255,255,0.55)"
                      : "rgba(24,24,27,0.42)";

                  return (
                    <article
                      key={item.title}
                      className="group flex min-h-[140px] items-center justify-center rounded-[20px] border px-5 py-8 text-center transition-colors duration-300 sm:min-h-[162px] sm:rounded-[24px] sm:px-8 sm:py-10 md:min-h-[176px]"
                      style={{
                        borderColor: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.42)",
                      }}
                      onMouseEnter={() => setHoveredWhyChoose(item.title)}
                      onMouseLeave={() => setHoveredWhyChoose(null)}
                    >
                      <div className="flex max-w-[250px] flex-col items-center">
                        <WhyChooseIcon type={item.icon} active={isActive} />
                        <h3
                          className="mt-4 text-base font-semibold leading-[1.35] transition-colors duration-300 sm:mt-6 sm:text-[1.05rem] md:text-[1.1rem]"
                          style={{
                            fontFamily: "var(--tp-ff-syne), sans-serif",
                            color: cardTextColor,
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <GraphicIndustryCards title="Industries We Serve" />

          <section className="graphic-cta">
            <div
              className="graphic-cta-panel w-full py-12 sm:py-20 md:py-24 lg:py-28"
              style={{
                backgroundColor: isDark ? "#f3f3f3" : "#1a1a1a",
              }}
            >
              <div className="container">
                <h2
                  className="text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  
                >
                  <span
                    className="box-decoration-clone px-1.5 py-1 leading-[1.12] sm:px-2"
                    style={{
                      backgroundColor: isDark ? "#18181b" : "#ffffff",
                      color: isDark ? "#ffffff" : "#1a1a1a",
                    }}
                  >
                    Ready to elevate your brand?
                  </span>
                </h2>

                <div
                  className="mt-6  text-lg font-light leading-[1.3] sm:mt-10 sm:text-[1.65rem] sm:leading-[1.25] md:mt-12 md:text-[2.15rem] lg:mt-14 lg:text-[2.65rem] lg:leading-[1.2]"
                  style={{
                    
                    color: isDark ? "#18181b" : "#ffffff",
                  }}
                >
                  Let&apos;s discuss your graphic design project - no obligation.
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-block text-base font-semibold tracking-tight transition-opacity hover:opacity-80 sm:mt-12 sm:text-[1.35rem] md:mt-14 md:text-[1.75rem] lg:mt-16 lg:text-[2rem]"
                  style={{
                    fontFamily: "var(--tp-ff-syne), sans-serif",
                    color: isDark ? "#18181b" : "#ffffff",
                    borderBottom: `1px solid ${isDark ? "#18181b" : "#ffffff"}`,
                    paddingBottom: "3px",
                  }}
                >
                  Get Your Free Quote Today
                </Link>
              </div>
            </div>
          </section>

          <section className="graphic-faq pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pb-28">
            <div className="container">
              <h2
                className="graphic-section-title text-[1.65rem] font-light leading-tight tracking-tight sm:text-[2rem] md:text-[2.35rem] lg:text-[2.75rem]"
              >
                {faqHeading}
              </h2>
              <div
                className="graphic-divider mt-5 h-px w-full"
                style={{ backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }}
                role="presentation"
                aria-hidden
              />

              <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:gap-2.5 lg:hidden">
                {faqItems.map((item) => (
                  <GraphicFaqItem
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openFaqId === item.id}
                    onToggle={() => handleFaqToggle(item.id)}
                    isDark={isDark}
                  />
                ))}
              </div>

              <div className="mt-6 hidden gap-3 sm:mt-8 lg:grid lg:grid-cols-2 lg:gap-x-10">
                <div className="flex flex-col gap-3">
                  {faqItems.slice(0, faqSplitIndex).map((item) => (
                    <GraphicFaqItem
                      key={item.id}
                      id={item.id}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openFaqId === item.id}
                      onToggle={() => handleFaqToggle(item.id)}
                      isDark={isDark}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {faqItems.slice(faqSplitIndex).map((item) => (
                    <GraphicFaqItem
                      key={item.id}
                      id={item.id}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openFaqId === item.id}
                      onToggle={() => handleFaqToggle(item.id)}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <GraphicQuoteSection isDark={isDark} />
        </main>
      </div>

      <FooterFour />
    </Wrapper>
  );
}

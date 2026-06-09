"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Wrapper from "@/layouts/wrapper";
import VideoPageHeader from "../VideoPageHeader";
import VideoTrustedMarquee from "../VideoTrustedMarquee";
import VideoServicesSection from "../VideoServicesSection";
import VideoContactSection from "../VideoContactSection";
import VideoBouquetServicesSection from "../VideoBouquetServicesSection";
import VideoClientIndustriesSection from "../VideoClientIndustriesSection";
import VideoProcessSection from "../VideoProcessSection";
import VideoLetsTalkSection from "../VideoLetsTalkSection";
import FooterFour from "@/layouts/footers/footer-four";
import ServiceThree from "@/components/service/service-three";
import { str } from "@/lib/cms-video-pages";
import Image from "next/image";
import { RiGlobalFill } from "react-icons/ri";
import { IoChevronDown, IoSettings } from "react-icons/io5";
import SafeHtml from "@/components/seo-page/SafeHtml";
import GraphicIndustryCards from "@/components/service/graphic-industry-cards";

function HeroPlayVisual() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-10 w-10 text-white" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function HeroCircularLabel({ pathId }: { pathId: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 animate-hero-orbit motion-reduce:animate-none"
      style={{ transformOrigin: "center center" }}
      aria-hidden
    >
      <svg className="h-full w-full font-medium uppercase tracking-[0.14em] text-white dark:text-white" viewBox="0 0 100 100">
        <defs>
          <path
            id={pathId}
            d="M 50 50 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0"
            fill="none"
          />
        </defs>
        <text fill="currentColor" fontSize="5" fontWeight="500">
          <textPath href={`#${pathId}`} startOffset="0%">
            Top Video Editing • Top Video Editing • Top Video Editing •{" "}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

const HERO_VIDEOS = [
  "https://res.cloudinary.com/ddinu18dy/video/upload/v1777978443/Did_you_know_the_BMW_logo_isn_t_just_a_fancy_circle_It_s_packed_with_history.The_blue_and_whi_onpohi.mp4",
  "https://res.cloudinary.com/ddinu18dy/video/upload/v1777980721/You_ve_been_using_the_brand_name_not_the_product_Frisbee_isn_t_what_it_s_called.That_s_just_igqnjr.mp4",
  "https://res.cloudinary.com/ddinu18dy/video/upload/v1777980069/What_if_Apple_loses_the_one_thing_that_made_it_special_For_years_Apple_built_its_reputation_a_lc6av1.mp4",
] as const;

function HeroVideoFill({
  src,
  label,
  className,
  style,
}: {
  src: string;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 ${className ?? ""}`} style={style}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
}

const HERO_COPY_FALLBACK = {
  kicker: "Video Editing Services in India -",
  heading: "Top Video\nEditing Agency",
  body: `Vidzy is the leading video editing agency in India, offering top-notch video editing services that transform your video clips into attention-grabbing, compelling visual effects, and captivating stories that educate, influence, and inspire your target audience at scale. Enhance your video content with a top-notch video editing company that can transform your raw footage into a well-polished professional-looking video. Transform your vision into reality with India's premier video editing and post-production experts!`,
} as const;

const GRID = {
  rightTopH: 192,
  stackGap: 12,
  rightBottomH: 206,
  totalH: 192 + 12 + 206,
  leftColPct: 62,
  colGap: 12,
  leftTopInset: 56,
} as const;

const leftImageH = GRID.totalH - GRID.leftTopInset;
const playCenterY = GRID.rightTopH + GRID.stackGap / 2;

function MobileHeroVideoCollage({
  playCenterY: playY,
  leftImageH: leftH,
}: {
  playCenterY: number;
  leftImageH: number;
}) {
  const mobileHeroH = Math.min(GRID.totalH, 340);
  const mobileScale = mobileHeroH / GRID.totalH;
  const mobilePlayTop = playY * mobileScale;

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,320px)] lg:hidden sm:max-w-[min(100%,340px)]">
      <div className="relative mx-auto flex w-full gap-3 sm:gap-4" style={{ height: mobileHeroH }}>
        <div className="flex h-full w-[52%] shrink-0 flex-col justify-end">
          <HeroVideoFill
            src={HERO_VIDEOS[0]}
            label="Video editing workspace"
            className="rounded-2xl"
            style={{ height: Math.round(leftH * mobileScale) }}
          />
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 sm:gap-3">
          <HeroVideoFill
            src={HERO_VIDEOS[1]}
            label="Editing and timeline"
            className="shrink-0 rounded-2xl"
            style={{ height: Math.round(GRID.rightTopH * mobileScale) }}
          />
          <HeroVideoFill
            src={HERO_VIDEOS[2]}
            label="Post-production"
            className="shrink-0 rounded-3xl"
            style={{ height: Math.round(GRID.rightBottomH * mobileScale) }}
          />
        </div>

        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 left-[calc(52%+0.375rem)] sm:left-[calc(52%+0.5rem)]"
          style={{ top: mobilePlayTop }}
          aria-hidden
        >
          <div className="pointer-events-auto relative h-[112px] w-[112px] overflow-hidden rounded-full bg-zinc-900 shadow-lg ring-1 ring-zinc-900/20 dark:bg-black dark:ring-white/25">
            <HeroCircularLabel pathId="video-hero-circ-m" />
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900/0 p-0">
              <HeroPlayVisual />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function splitHeadingLines(heading: string): [string, string] {
  const parts = heading.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (parts.length === 0) return ["Top Video", "Editing Agency"];
  if (parts.length === 1) return [parts[0], ""];
  return [parts[0], parts.slice(1).join(" ")];
}

function IconFilmEdit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="6" y="12" width="28" height="22" rx="2" />
      <path d="M10 16h4M10 20h4M10 24h4" strokeLinecap="round" />
      <path d="M36 18l6-4v20l-6-4V18z" fill="currentColor" stroke="none" opacity="0.35" />
      <path d="M22 34l8-8" strokeLinecap="round" />
      <circle cx="30" cy="26" r="2.5" fill="currentColor" />
    </svg>
  );
}

function RowVerticalRule() {
  return <div aria-hidden className="mx-auto w-px shrink-0 self-stretch bg-zinc-300 dark:bg-zinc-600" />;
}

function useCountUp(target: number, durationMs: number, inView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setValue(0);
      return;
    }

    let start: number | null = null;
    let frame = 0;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / durationMs, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, durationMs]);

  return value;
}

function useStatsInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
      rootMargin: "0px 0px -8% 0px",
    });

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-[#f4f4f4] dark:bg-zinc-800/90">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-3 px-4 py-3.5 text-left sm:items-center sm:py-4"
        aria-expanded={isOpen}
      >
        <span className="min-w-0 flex-1 text-[14px] font-semibold uppercase leading-snug tracking-wide   sm:text-[15px]">
          {question}
        </span>
        <span
          className="pointer-events-none mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white sm:mt-0"
          aria-hidden
        >
          <IoChevronDown
            className={`h-[14px] w-[14px] transition-transform duration-200 ease-out ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </button>

      {isOpen ? (
        <div className="px-4 pb-4 pt-1">
          <p className="text-[15px] font-normal leading-relaxed   sm:text-[13px]">
            <SafeHtml html={answer} as="span" />
          </p>
        </div>
      ) : null}
    </div>
  );
}

type CmsAgencyItem = {
  title: string;
  paragraphs: string[];
  imageAlt: string;
};

function toStringArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.filter((v) => typeof v === "string") as string[];
  if (typeof val === "string") return [val];
  return [];
}

export default function VideoPageLayout({ data }: { data: Record<string, unknown> }) {
  const heroObj = data.hero && typeof data.hero === "object" ? (data.hero as Record<string, unknown>) : null;
  
  const heroKicker =
    str(heroObj, "kicker") || str(data, "hero_kicker", "heroKicker", "kicker") || HERO_COPY_FALLBACK.kicker;

  const heroH1Line1 = str(heroObj, "h1_line_1", "h1Line1", "line1") || str(data, "hero_h1_line_1", "heroH1Line1");
  const heroH1Line2 = str(heroObj, "h1_line_2", "h1Line2", "line2") || str(data, "hero_h1_line_2", "heroH1Line2");

  const heroHeading =
    str(heroObj, "heading") || str(data, "hero_heading", "heroHeading", "heading") || HERO_COPY_FALLBACK.heading;

  const [splitLine1, splitLine2] = splitHeadingLines(heroHeading);
  const h1Line1 = heroH1Line1 || splitLine1;
  const h1Line2 = heroH1Line2 || splitLine2;

  const heroBody =
    str(heroObj, "body") || str(data, "hero_body", "heroBody", "body") || HERO_COPY_FALLBACK.body;

  const statsTitle =
    str(data, "statsTitle", "stats_title", "statsHeading", "stats_heading") ||
    `Leading Video Editing Agency In ${data.county}`;

  const { ref: statsRef, inView: statsInView } = useStatsInView();
  const brands = useCountUp(Number(str(data, "brands", "stats_brands")) || 100, 1400, statsInView);
  const videos = useCountUp(Number(str(data, "videos", "stats_videos")) || 500, 2000, statsInView);
  const years = useCountUp(Number(str(data, "years", "stats_years")) || 5, 700, statsInView);

  const agencyItems: CmsAgencyItem[] = useMemo(() => {
    const raw = (data.agencyServices ?? data.agency_services ?? data.agency_services_items) as unknown;
    if (!Array.isArray(raw)) return [];
    return raw
      .map((it) => (it && typeof it === "object" ? (it as Record<string, unknown>) : null))
      .filter((it): it is Record<string, unknown> => Boolean(it))
      .map((it) => ({
        title: str(it, "title"),
        paragraphs: toStringArray(it.paragraphs ?? it.body ?? it.description ?? it.content),
        imageAlt: str(it, "imageAlt", "image_alt", "alt", "altText", "alt_text"),
      }));
  }, [data]);

  const faqHeading = str(data, "faqHeading", "faq_heading", "heading_faq") || "Frequently Asked Questions";
  const faqs = useMemo(() => {
    const raw = (data.faqs ?? data.faq ?? data.faq_items) as unknown;
    if (!Array.isArray(raw)) return [];
    return raw
      .map((f) => (f && typeof f === "object" ? (f as Record<string, unknown>) : null))
      .filter(Boolean)
      .map((f, index) => ({
        id: str(f, "id") || `faq-${index + 1}`,
        question: str(f, "question", "q"),
        answer: str(f, "answer", "a"),
      }))
      .filter((f) => f.question && f.answer);
  }, [data]);

  const [faqLeft, faqRight] = useMemo(() => {
    const mid = Math.ceil(faqs.length / 2);
    return [faqs.slice(0, mid), faqs.slice(mid)];
  }, [faqs]);

  const [openById, setOpenById] = useState<Record<string, boolean>>({});
  const toggleFaq = useCallback((id: string) => {
    setOpenById((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const IMG_SOCIAL =
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&auto=format&fit=crop&q=80";

  // Hardcoded images (8) — CMS controls only copy + alt text.
  const AGENCY_IMAGES = useMemo(
    () =>
      [
        "/assets/image/video_services/social.webp",
        "/assets/image/video_services/promotional.webp",
        "/assets/image/video_services/motion.webp",
        "/assets/image/video_services/educational.webp",
        "/assets/image/video_services/reels.webp",
        "/assets/image/video_services/3d.webp",
        "/assets/image/video_services/youtube.webp",
        "/assets/image/video_services/ai.webp",
      ] as const,
    [],
  );

  const agencyFallback: CmsAgencyItem[] = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => ({
        title: "Social Media Video Editing Services In UK",
        paragraphs: [
          "Short-form content moves fast. We cut reels, stories, and ads that hold attention in the first seconds, match platform-safe pacing, and keep your brand voice consistent across every upload — so your social presence looks intentional, not improvised.",
          "From hooks and captions timing to clean subtitles and end-cards, we deliver edits that are ready to publish. Share your raw clips or batch content; we return polished versions sized for each channel, optimised for engagement in the UK market and beyond.",
        ],
        imageAlt: "Social media and content creation",
      })),
    [],
  );

  const agencyGridItems = agencyItems.length ? agencyItems.slice(0, 8) : agencyFallback;

  return (
    <Wrapper>
      <VideoPageHeader />

      <main className="video_page">
        <section className="bg-zinc-50 py-10  dark:bg-[#121212] dark:text-white sm:py-12 lg:py-14">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
              <div className="">
                <h1 className="mb-5 text-3xl leading-[1.05] tracking-tight  dark:text-white md:text-4xl lg:mb-6 lg:text-5xl lg:leading-[1.08]">
                  {h1Line1}
                  {h1Line2 ? (
                    <>
                      <br />
                      {h1Line2}
                    </>
                  ) : null}
                </h1>
                <p className="mb-3 text-2xl tracking-wide  ">{heroKicker}</p>
                <p className="mt-7 text-[15px] leading-relaxed   sm:text-base">
                  <SafeHtml html={heroBody} as="p" />
                </p>
              </div>

              <div className="relative place-self-center md:place-self-end w-full max-w-[min(100%,340px)] shrink-0 sm:max-w-[min(100%,360px)] lg:max-w-[400px] xl:max-w-[430px]">
                <div className="relative mx-auto hidden w-full lg:ml-0 lg:mr-0 lg:block" style={{ height: GRID.totalH }}>
                  <div className="relative flex h-full w-full" style={{ gap: GRID.colGap }}>
                    <div className="flex h-full shrink-0 flex-col justify-end" style={{ width: `${GRID.leftColPct}%` }}>
                      <HeroVideoFill
                        src={HERO_VIDEOS[0]}
                        label="Video editing workspace"
                        className="rounded-2xl"
                        style={{ height: leftImageH }}
                      />
                    </div>

                    <div className="flex min-h-0 min-w-0 flex-1 flex-col" style={{ gap: GRID.stackGap }}>
                      <HeroVideoFill
                        src={HERO_VIDEOS[1]}
                        label="Editing and timeline"
                        className="shrink-0 rounded-2xl"
                        style={{ height: GRID.rightTopH }}
                      />
                      <HeroVideoFill
                        src={HERO_VIDEOS[2]}
                        label="Post-production"
                        className="shrink-0 rounded-3xl"
                        style={{ height: GRID.rightBottomH }}
                      />
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(${GRID.leftColPct}% + ${GRID.colGap / 2}px)`,
                      top: playCenterY,
                    }}
                    aria-hidden
                  >
                    <div className="pointer-events-auto relative h-[112px] w-[112px] overflow-hidden rounded-full bg-zinc-900 shadow-lg ring-1 ring-zinc-900/20 dark:bg-black dark:ring-white/25">
                      <HeroCircularLabel pathId="video-hero-circ-d" />
                      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <HeroPlayVisual />
                      </div>
                    </div>
                  </div>
                </div>

                <MobileHeroVideoCollage playCenterY={playCenterY} leftImageH={leftImageH} />
              </div>
            </div>
          </div>
        </section>

        {/* <VideoTrustedMarquee /> */}
        <section className="bg-zinc-60 pb-14 pt-2 dark:bg-[#121212] sm:pb-16">
          <div className="container">
            <div className="rounded-3xl bg-zinc-100 px-6 py-8 shadow-sm dark:bg-[#1e1e1e] dark:shadow-none sm:px-8 sm:py-10 lg:px-12 lg:py-12">
              <h2 className="mb-10 text-left text-2xl  dark:text-white sm:text-2xl">{statsTitle}</h2>

              <div ref={statsRef} className="flex flex-col">
                <div className="hidden min-h-0 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-x-0 md:grid">
                  <div className="flex flex-col items-center px-3 py-2 text-center">
                    <div className="relative grid min-h-[5.5rem] place-items-center">
                      <div className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] sm:text-6xl md:text-[8rem] dark:text-white/[0.08]">
                        {brands}+
                      </div>
                      <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em] text-zinc-900 dark:text-white sm:text-sm">
                        BRANDS
                      </span>
                    </div>
                  </div>
                  <RowVerticalRule />
                  <div className="flex flex-col items-center px-3 py-2 text-center">
                    <div className="relative grid min-h-[5.5rem] place-items-center">
                      <div className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] sm:text-6xl md:text-[8rem] dark:text-white/[0.08]">
                        {videos}+
                      </div>
                      <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em] text-zinc-900 dark:text-white sm:text-sm">
                        VIDEOS
                      </span>
                    </div>
                  </div>
                  <RowVerticalRule />
                  <div className="flex flex-col items-center px-3 py-2 text-center">
                    <div className="relative grid min-h-[5.5rem] place-items-center">
                      <div className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] sm:text-6xl md:text-[8rem] dark:text-white/[0.08]">
                        {years}+
                      </div>
                      <span className="col-start-1 row-start-1 z-10 max-w-[5.5rem] text-center text-[10px] font-bold leading-snug tracking-[0.12em] text-zinc-900 dark:text-white sm:text-xs sm:tracking-[0.16em]">
                        YEARS
                        <br />
                        EXPERIENCE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden min-h-0 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-x-0 pt-8 md:grid md:pt-10 lg:pt-12">
                  <div className="flex flex-col items-center gap-3 px-3 pb-2 pt-2 text-center">
                    <IconFilmEdit className="h-10 w-10  " />
                    <p className="max-w-[11rem] text-center text-xs leading-relaxed   sm:text-sm">
                      Professional Video Editor Experts
                    </p>
                  </div>
                  <RowVerticalRule />
                  <div className="flex flex-col items-center gap-3 px-3 pb-2 pt-2 text-center">
                    <RiGlobalFill className="h-10 w-10  " aria-hidden />
                    <p className="max-w-[11rem] text-center text-xs leading-relaxed   sm:text-sm">
                      Global Presence
                    </p>
                  </div>
                  <RowVerticalRule />
                  <div className="flex flex-col items-center gap-3 px-3 pb-2 pt-2 text-center">
                    <IoSettings className="h-10 w-10  " aria-hidden />
                    <p className="max-w-[11rem] text-center text-xs  leading-relaxed tracking-wide   sm:text-sm">
                      40+ PREMIUM TOOLS
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-10 border-t border-zinc-300 pt-10 dark:border-zinc-600 md:hidden">
                  <div className="flex flex-col items-center border-r border-zinc-300 px-1 py-2 text-center dark:border-zinc-600">
                    <div className="relative grid min-h-[5.5rem] place-items-center">
                      <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums /[0.07] dark:text-white/[0.08]">
                        {brands}+
                      </span>
                      <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em]  dark:text-white">
                        BRANDS
                      </span>
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-3">
                      <IconFilmEdit className="h-9 w-9  " />
                      <p className="max-w-[10rem] text-center text-[11px] leading-relaxed  ">
                        Professional Video Editor Experts
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center px-1 py-2 text-center">
                    <div className="relative grid min-h-[5.5rem] place-items-center">
                      <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums /[0.07] dark:text-white/[0.08]">
                        {videos}+
                      </span>
                      <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em]  dark:text-white">
                        VIDEOS
                      </span>
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-3">
                      <RiGlobalFill className="h-9 w-9  " aria-hidden />
                      <p className="max-w-[10rem] text-center text-[11px] leading-relaxed  ">
                        Global Presence
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center border-r border-t border-zinc-300 px-1 py-2 pt-10 text-center dark:border-zinc-600">
                    <div className="relative grid min-h-[5.5rem] place-items-center">
                      <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums /[0.07] dark:text-white/[0.08]">
                        {years}+
                      </span>
                      <span className="col-start-1 row-start-1 z-10 max-w-[5.5rem] text-center text-[10px] font-bold leading-snug tracking-[0.12em]  dark:text-white sm:text-xs sm:tracking-[0.16em]">
                        YEARS
                        <br />
                        EXPERIENCE
                      </span>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center border-t border-zinc-300 px-1 py-2 pt-10 text-center dark:border-zinc-600">
                    <div className="flex min-h-[5.5rem] items-center justify-center">
                      <IoSettings className="-mt-7 h-9 w-9  " aria-hidden />
                    </div>
                    <p className="-mt-6 max-w-[10rem] text-center text-[11px] font-bold uppercase leading-relaxed tracking-wide   sm:text-sm">
                      40+ PREMIUM TOOLS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <VideoServicesSection />
        <VideoContactSection />
        <VideoBouquetServicesSection />
        {/* <ServiceThree showService={false} /> */}
        <GraphicIndustryCards title="Industries We Serve" />
        <VideoProcessSection />

        <section className="bg-zinc-50 py-14  dark:bg-[#121212] dark:text-white sm:py-20">
          <div className="container">
            <h4 className="text-sm font-medium tracking-wide   sm:text-[0.9375rem]">
              {str(data, "agencyServicesKicker", "agency_services_kicker") || "Video Editing Agency in UK"}
            </h4>
            <h2 className="mt-2 max-w-3xl text-left text-2xl font-bold leading-snug tracking-tight  dark:text-white sm:text-3xl md:text-[2rem] lg:text-[2.125rem]">
              {str(data, "agencyServicesHeading", "agency_services_heading") ||
                "Professional Video Editing Services for Your Business"}
            </h2>
            <div className="mt-5 h-px w-full bg-zinc-300 dark:bg-zinc-600/45" aria-hidden />

            <div className="flex flex-col gap-10 mt-10">
              {Array.from({ length: 8 }).map((_, index) => {
                const item = agencyGridItems[index] ?? agencyFallback[index];
                const imageOnRight = index % 2 === 0;
                const textOrder = imageOnRight ? "md:!order-1" : "md:!order-2";
                const imgOrder = imageOnRight ? "md:!order-2" : "md:!order-1";

                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div className={`flex flex-col !order-2 ${textOrder}`}>
                      <h2 className="text-left text-lg font-bold leading-snug text-black  dark:text-white sm:text-xl md:text-2xl">
                        {item.title}
                      </h2>
                      {(item.paragraphs.length ? item.paragraphs : [""]).slice(0, 4).map((p, i) => (
                        <p
                          key={i}
                          className="mt-4 text-justify text-sm leading-relaxed   sm:text-[0.9375rem]"
                        >
                          <SafeHtml html={p} as="span" />
                        </p>
                      ))}
                    </div>

                    <Image
                      src={AGENCY_IMAGES[index] ?? IMG_SOCIAL}
                      alt={item.imageAlt || "Video Editing Services"}
                      width={1080}
                      height={1350}
                      className={`w-full h-full rounded-xl !order-1 ${imgOrder}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          data-video-section="faq"
          className="bg-white py-14  dark:bg-black dark:text-white sm:py-20"
        >
          <div className="container">
            <h2 className="max-w-4xl text-left text-xl font-semibold leading-snug tracking-tight  dark:text-white sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem]">
              {faqHeading}
            </h2>
            <div className="mt-4 h-px w-full bg-zinc-300 dark:bg-zinc-800/70" aria-hidden />

            <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-x-10 md:gap-y-4 lg:gap-x-12">
              <div className="flex flex-col gap-4">
                {faqLeft.map(({ id, question, answer }) => (
                  <FaqItem
                    key={id}
                    question={question}
                    answer={answer}
                    isOpen={!!openById[id]}
                    onToggle={() => toggleFaq(id)}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {faqRight.map(({ id, question, answer }) => (
                  <FaqItem
                    key={id}
                    question={question}
                    answer={answer}
                    isOpen={!!openById[id]}
                    onToggle={() => toggleFaq(id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <VideoLetsTalkSection />
      </main>

      <FooterFour />
    </Wrapper>
  );
}


import type { CSSProperties } from "react";
import Wrapper from "@/layouts/wrapper";
import VideoPageHeader from "./VideoPageHeader";
import VideoTrustedMarquee from "./VideoTrustedMarquee";
import VideoStatsSection from "./VideoStatsSection";
import VideoServicesSection from "./VideoServicesSection";
import VideoContactSection from "./VideoContactSection";
import VideoBouquetServicesSection from "./VideoBouquetServicesSection";
import VideoClientIndustriesSection from "./VideoClientIndustriesSection";
import VideoProcessSection from "./VideoProcessSection";
import VideoFAQSection from "./VideoFAQSection";
import VideoAgencyServicesSection from "./VideoAgencyServicesSection";
import VideoLetsTalkSection from "./VideoLetsTalkSection";
import FooterFour from "@/layouts/footers/footer-four";

function HeroPlayVisual() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="ml-0.5 h-10 w-10 text-white"
      fill="currentColor"
      aria-hidden
    >
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
      <svg
        className="h-full w-full font-medium uppercase tracking-[0.14em] text-white dark:text-white"
        viewBox="0 0 100 100"
      >
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
  "https://res.cloudinary.com/ddinu18dy/video/upload/v1777980069/What_if_Apple_loses_the_one_thing_that_made_it_special_For_years_Apple_built_its_reputation_a_lc6av1.mp4"  ] as const;

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

const HERO_COPY = {
  kicker: "Video Editing Services in India -",
  body: `Vidzy is the leading video editing agency in India, offering top-notch video editing services that transform your video clips into attention-grabbing, compelling visual effects, and captivating stories that educate, influence, and inspire your target audience at scale. Enhance your video content with a top-notch video editing company that can transform your raw footage into a well-polished professional-looking video. Transform your vision into reality with India's premier video editing and post-production experts!`,
} as const;

/**
 * Right column height = top + gap + bottom. Left tile is shorter, bottom-aligned (`justify-end`),
 * so its top sits below the right top card while its bottom matches the right stack (ref PDF).
 */
const GRID = {
  rightTopH: 192,
  stackGap: 12,
  rightBottomH: 206,
  totalH: 192 + 12 + 206,
  leftColPct: 62,
  colGap: 12,
  /** Top gap = totalH - leftImageH; larger gap = left card starts lower. */
  leftTopInset: 56,
} as const;

const leftImageH = GRID.totalH - GRID.leftTopInset;

const playCenterY = GRID.rightTopH + GRID.stackGap / 2;

/** Mobile hero: collage + play control centered on the seam between columns (matches desktop). */
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

export default function VideoPage() {
  return (
    <Wrapper showWhatsApp={false}>
      <VideoPageHeader />

      <main>
        <section className="bg-zinc-50 py-10 text-zinc-900 dark:bg-[#121212] dark:text-white sm:py-12 lg:py-14">
          <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
              <div className="min-w-0">
                <p className="mb-3 text-2xl tracking-wide text-zinc-800 dark:text-zinc-400">
                  {HERO_COPY.kicker}
                </p>
                <h1 className="mb-5 max-w-xl text-5xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl lg:mb-6 lg:text-7xl lg:leading-[1.08]">
                  Top Video
                  <br />
                  Editing Agency
                </h1>
                <p className="max-w-xl mt-7 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base">
                  {HERO_COPY.body}
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[min(100%,340px)] shrink-0 sm:max-w-[min(100%,360px)] lg:mx-0 lg:max-w-[400px] xl:max-w-[430px]">
                <div
                  className="relative mx-auto hidden w-full lg:ml-0 lg:mr-0 lg:block"
                  style={{ height: GRID.totalH }}
                >
                  <div
                    className="relative flex h-full w-full"
                    style={{ gap: GRID.colGap }}
                  >
                    <div
                      className="flex h-full shrink-0 flex-col justify-end"
                      style={{ width: `${GRID.leftColPct}%` }}
                    >
                      <HeroVideoFill
                        src={HERO_VIDEOS[0]}
                        label="Video editing workspace"
                        className="rounded-2xl"
                        style={{ height: leftImageH }}
                      />
                    </div>

                    <div
                      className="flex min-h-0 min-w-0 flex-1 flex-col"
                      style={{ gap: GRID.stackGap }}
                    >
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

                <MobileHeroVideoCollage
                  playCenterY={playCenterY}
                  leftImageH={leftImageH}
                />
              </div>
            </div>
          </div>
        </section>

        {/* <VideoTrustedMarquee /> */}
        <VideoStatsSection />
        <VideoServicesSection />
        <VideoContactSection />
        <VideoBouquetServicesSection />
        <VideoClientIndustriesSection />
        <VideoProcessSection />
       
        <VideoAgencyServicesSection />
        <VideoFAQSection />
        <VideoLetsTalkSection />
      </main>

      <FooterFour />
    </Wrapper>
  );
}

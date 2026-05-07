import type { ReactNode } from "react";

type ServiceItem = {
  title: string;
  description: string;
  Icon: (props: { className?: string }) => ReactNode;
};

function IconReels({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="8" y="12" width="32" height="26" rx="2" />
      <path d="M8 18h32M16 12v-4M32 12v-4" strokeLinecap="round" />
      <path d="M14 26l6 4 10-8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="24" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconCorporate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M14 40V20h8v20M26 40V14h8v26M10 40h28" strokeLinecap="round" />
      <path d="M18 24h4M18 28h4M30 20h4M30 24h4M30 28h4" strokeLinecap="round" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="10" y="14" width="28" height="20" rx="4" />
      <path d="M22 20v8l7-4-7-4z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconEvent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M16 10v4M24 10v4M32 10v4" strokeLinecap="round" />
      <circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="10" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="32" cy="10" r="1.5" fill="currentColor" stroke="none" />
      <rect x="10" y="14" width="28" height="26" rx="2" />
      <path d="M10 22h28" strokeLinecap="round" />
      <circle cx="24" cy="30" r="5" />
      <path d="M22 30l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPromo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M14 32V16l18-6v28l-18-6z" strokeLinejoin="round" />
      <path d="M32 20c3 0 6 2 6 6s-3 6-6 6" strokeLinecap="round" />
    </svg>
  );
}

function IconSubtitles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="20" y="8" width="20" height="16" rx="2.5" />
      <path d="M32 26v3l2.5-2.5H38a2 2 0 002-2V14a2 2 0 00-2-2H26" strokeLinecap="round" />
      <rect x="8" y="18" width="22" height="18" rx="2.5" />
      <path d="M14 38l2.5 3 2.5-3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 26h10M13 30h7" strokeLinecap="round" />
      <path d="M28 12h4M30 10v4" strokeLinecap="round" />
    </svg>
  );
}

function IconMotion({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="8" y="12" width="32" height="22" rx="2" />
      <path d="M12 32h24" strokeLinecap="round" />
      <path d="M14 26h4M22 26h4M30 26h4" strokeLinecap="round" />
      <path d="M26 18l4 3-4 3V18z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconMic({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M18 10v14a6 6 0 1012 0V10a6 6 0 10-12 0z" />
      <path d="M14 26v2a10 10 0 0020 0v-2M24 38v4M18 42h12" strokeLinecap="round" />
    </svg>
  );
}

const SERVICES: ServiceItem[] = [
  {
    title: "Social Media Reels Editing",
    description: "Trending cuts, transitions & hooks for IG, TikTok",
    Icon: IconReels,
  },
  {
    title: "Corporate Video Editing",
    description: "Professional polish for presentations & internal comms",
    Icon: IconCorporate,
  },
  {
    title: "YouTube Video Editing",
    description: "Engaging cuts, subtitles, retention optimization",
    Icon: IconYouTube,
  },
  {
    title: "Event Highlights",
    description: "Fast-paced edits from weddings, expos, concerts",
    Icon: IconEvent,
  },
  {
    title: "Promotional / Ad Editing",
    description: "Script-based ad edits with CTAs and brand sync",
    Icon: IconPromo,
  },
  {
    title: "Multilingual Subtitling",
    description: "Arabic, English, Hindi, and more",
    Icon: IconSubtitles,
  },
  {
    title: "Motion Graphics / Titles",
    description: "Custom lower thirds, title intros, animated branding",
    Icon: IconMotion,
  },
  {
    title: "Voiceover + Sound Design",
    description: "Studio-level voice + SFX mixing",
    Icon: IconMic,
  },
];

/** No edge by default; inset ring reads clearly as a border on hover (no layout shift). */
const CELL_BASE =
  "group mx-auto flex w-full max-w-[168px] flex-col items-center justify-center gap-3 rounded-2xl px-2.5 py-6 text-center ring-0 ring-inset ring-transparent transition-[box-shadow,background-color] duration-200 sm:max-w-[184px] sm:px-3 sm:py-7 hover:bg-zinc-50 hover:ring-1 hover:ring-zinc-900 dark:hover:bg-zinc-900/85 dark:hover:ring-white";

function ServiceCell({ item }: { item: ServiceItem }) {
  const { title, description, Icon } = item;
  return (
    <div className={CELL_BASE}>
      <Icon className="h-11 w-11 shrink-0  group-hover:text-black text-zinc-500 transition-colors dark:text-zinc-400 dark:group-hover:text-zinc-300 sm:h-12 sm:w-12" />
      <div className="flex w-full flex-col dark:group-hover:text-white group-hover:text-black items-center gap-0 text-center">
        <h3 className="m-0 max-w-[11rem] dark:group-hover:text-white group-hover:text-black text-[0.875rem] font-bold leading-snug hover:text-black text-zinc-500 dark:text-white sm:max-w-[12rem] sm:text-[0.9375rem]">
          {title}
        </h3>
        <p className="m-0 max-w-[11rem] text-[12px] dark:group-hover:text-white group-hover:text-black font-normal leading-snug hover:text-black text-zinc-600 dark:text-zinc-400 sm:max-w-[12rem] sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function VideoServicesSection() {
  return (
    <section
      data-video-section="services"
      className="bg-white py-14  text-zinc-900 dark:bg-black  sm:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-left text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-[2rem] xl:text-4xl">
          Our Video Editing Services
        </h2>
        <div className="mt-6 h-px hover:text-black w-full dark: text-white/30 bg-zinc-300 dark:text-white/30" role="presentation" aria-hidden />

        <div className="mt-10 w-full grid grid-cols-2 gap-x-4 border-radius-2xl dark:text-white/30 gap-y-10 sm:mt-12 sm:gap-x-5 sm:gap-y-12 lg:mt-14 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12 xl:gap-x-8">
          {SERVICES.map((item) => (
            <div key={item.title} className="flex min-w-0 justify-center">
              <ServiceCell item={item} />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

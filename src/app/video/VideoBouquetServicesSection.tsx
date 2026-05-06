import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

/**
 * Smaller TR pocket: shallow smooth L (two eases + gentle inner fillet), then right edge.
 */
const CARD_SHELL_PATH =
  "M 28 0 H 306 Q 312 0 314 5 C 316 10 316 14 316 18 V 26 C 316 31 318 34 322 36 H 400 V 232 Q 400 260 368 260 H 28 Q 0 260 0 232 V 28 Q 0 0 28 0 Z";

type BouquetCard = {
  title: string;
  description: string;
};

const BOUQUET_CARDS: BouquetCard[] = [
  {
    title: "For Businesses",
    description:
      "Serving businesses and startups with professional A-to-Z editing services",
  },
  {
    title: "For Content Creators",
    description:
      "Becoming a one-stop solution for monthly video editing at a fixed fee",
  },
  {
    title: "For Brands",
    description:
      "Collaborating with film production and marketing agencies to handle outsourced projects",
  },
];

export default function VideoBouquetServicesSection() {
  return (
    <section
      data-video-section="bouquet"
      className="bg-white py-14 text-zinc-900 dark:bg-black dark:text-white sm:py-16 md:py-20"
    >
      <div className="container mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <h2 className="text-left text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-[2rem]">
          Our Bouquet Of Video Editing Services
        </h2>
        <div className="mt-5 h-px w-full bg-zinc-300 dark:bg-zinc-800" aria-hidden />

        <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 md:mt-12 md:grid-cols-3 md:gap-x-8 md:gap-y-8 lg:gap-x-10">
          {BOUQUET_CARDS.map(({ title, description }) => (
            <Link
              key={title}
              href="/contact"
              aria-label={`${title} — get in touch`}
              className="group relative block w-full max-w-[320px] overflow-visible focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#121212] sm:max-w-[360px] md:max-w-[268px]"
            >
              <div className="relative w-full">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                  viewBox="0 0 400 260"
                  preserveAspectRatio="none"
                  aria-hidden
                > 
                  <path
                    d={CARD_SHELL_PATH}
                    className="fill-[#f2f2f2] transition-colors duration-200 group-hover:fill-[#ececec] dark:fill-zinc-900/70 dark:group-hover:fill-zinc-900"
                  />
                  <path
                    d={CARD_SHELL_PATH}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    strokeWidth={1}
                    className="stroke-transparent transition-colors duration-200 group-hover:stroke-zinc-400 dark:group-hover:stroke-zinc-500"
                  />
                </svg>

                {/* Detached arrow disc (separate from the card shell). */}
                <span
                  className="absolute right-7 top-2 z-[2] dark:bg-grey flex h-10 w-10 translate-x-[60%] -translate-y-[60%] items-center justify-center rounded-full bg-zinc-900 text-white shadow-sm ring-8 ring-white transition duration-200 group-hover:scale-[1.03]  dark:ring-[#121212] sm:h-11 sm:w-11 md:h-10 md:w-10"
                  aria-hidden
                >
                  <LuArrowUpRight
                    className="h-5 w-5 md:h-[1.05rem] md:w-[1.05rem]"
                    strokeWidth={3.25}
                  />
                </span>

                <div className="relative z-[1] flex w-full flex-col px-7 pb-9 pt-11 pr-14 text-left sm:px-8 sm:pb-10 sm:pt-12 sm:pr-16 md:px-7 md:pb-8 md:pt-10 md:pr-14">
                  <h3 className="m-0 text-[1.0625rem] font-bold leading-snug tracking-tight text-zinc-900 dark:text-white md:text-base">
                    {title}
                  </h3>
                  <div className="mt-2.5 h-px w-8 bg-zinc-400 dark:bg-zinc-500 sm:mt-3 sm:w-9" aria-hidden />
                  <p className="m-0 mt-3 text-left text-sm font-normal leading-relaxed text-zinc-500 dark:text-zinc-400 md:mt-2.5 md:text-[13px] md:leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

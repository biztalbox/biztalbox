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
      <div className="container">
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
              className="group w-full rounded-2xl flex flex-col gap-0"
            >
              <div className="flex justify-between">

                {/* Detached arrow disc (separate from the card shell). */}
                <div className="flex flex-col p-4 pb-0 rounded-tr-2xl w-full relative bg-[#ECECEC] dark:bg-[#18181B]">
                  <h3 className="grow text-lg mb-0 font-bold text-zinc-900 dark:text-white">
                    {title}
                  </h3>
                  <div className="h-px w-8 bg-zinc-400 dark:bg-zinc-500 sm:mt-3 sm:w-9" aria-hidden />
                </div>
                <div className="p-2 h-full z-10 rounded-bl-2xl bg-white dark:!bg-black">
                  <LuArrowUpRight
                    className="text-white p-2 rounded-full mt-2 bg-black dark:!bg-white dark:!text-black"
                    strokeWidth={3.25}
                    size={40}

                  />
                </div>

              </div>

              <p className="p-4 -mt-4 bg-[#ECECEC] rounded-tr-2xl dark:bg-[#18181B] text-left text-sm font-normal leading-relaxed text-zinc-500 dark:text-zinc-400 md:text-[13px] md:leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

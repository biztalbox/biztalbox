import Link from "next/link";
import type { IconType } from "react-icons";
import { LuUserRound, LuHouse, LuUsersRound, LuDog } from "react-icons/lu";
import industriesData from "@/data/industries.json";
import ServiceThree from "@/components/service/service-three";

type IndustryRecord = {
  id: number;
  name: string;
  link: string;
  description: string;
};

const industries = industriesData as IndustryRecord[];

/** Same source as `service-three` industry grid (`@/data/industries.json`). */
function decodeDescription(html: string) {
  return html
    .replace(/&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const ICON_CYCLE: IconType[] = [LuUserRound, LuHouse, LuUsersRound, LuDog];

const CARD_CLASS =
  "group flex h-full min-h-0 flex-col rounded-[15px] bg-zinc-100 p-4 text-left ring-0 ring-inset ring-transparent transition-[box-shadow,background-color] duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-zinc-900 dark:bg-[#1e1e1e] dark:focus-visible:ring-white sm:rounded-[16px] sm:p-5 md:p-4 hover:bg-zinc-50 hover:ring-1 hover:ring-zinc-900 dark:hover:bg-zinc-900/80 dark:hover:ring-white";

export default function VideoClientIndustriesSection() {
  return (
    <section
      data-video-section="industries"
      className="bg-zinc-50 py-12 text-zinc-900 dark:bg-black dark:text-white sm:py-16"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-left text-xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-2xl md:text-[1.65rem]">
          Client Industries We Serve
        </h2>
        <hr/>

        

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-3.5 md:grid-cols-4 md:gap-3 lg:gap-3.5">
          {industries.map((industry, index) => {
            const Icon = ICON_CYCLE[index % ICON_CYCLE.length];
            return (
              <Link
                key={industry.id}
                href={industry.link}
                className={`${CARD_CLASS} no-underline`}
              >
                {/* <div className="mb-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-400/90 bg-white text-zinc-700 transition-colors group-hover:border-zinc-500 dark:border-zinc-500/90 dark:bg-[#1a1a1a] dark:text-zinc-100 sm:h-9 sm:w-9">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                </div> */}

                <h3 className="font-bold leading-snug tracking-tight text-zinc-900 dark:text-white sm:text-sm">
                  {industry.name}
                </h3>
                <p className="m-0 mt-1 line-clamp-4 text-left text-[11px] font-normal leading-snug text-zinc-600 dark:text-zinc-400 sm:text-xs">
                  {decodeDescription(industry.description)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

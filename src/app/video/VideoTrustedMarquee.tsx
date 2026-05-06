"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

/** Same paths as `src/components/counter/counter-one.tsx` — logos in `public/clients/`. */
const TRUSTED_LOGO_SRCS = Array.from(
  { length: 27 },
  (_, i) => `/clients/${i + 1}.png` as const,
);

const LOOP = [...TRUSTED_LOGO_SRCS, ...TRUSTED_LOGO_SRCS];

export default function VideoTrustedMarquee() {
  return (
    <section className="overflow-x-hidden border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-[#121212] sm:py-14">
      <div className="container mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <h2 className="max-w-4xl text-xl font-thin leading-snug tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-[2rem] xl:text-4xl">
          50+ Happy clients and counting.... We&apos;re trusted by
        </h2>
        <hr className="mt-6 w-full w-full dark:bg-white" role="presentation" aria-hidden />
      </div>

      {/* Full-bleed marquee — no horizontal padding, edge-to-edge */}
      <div className="relative mt-6 min-h-[96px] w-full overflow-hidden bg-zinc-200/80 sm:mt-8 sm:min-h-[112px] dark:bg-zinc-900/40">
        <Marquee speed={32} pauseOnHover gradient={false} className="py-8 sm:py-10">
          {LOOP.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="mx-6 flex h-[72px] w-[140px] items-center justify-center sm:mx-10 sm:h-[80px] sm:w-[160px]"
            >
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt="Client logo"
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

import Image from "next/image";

const IMG_SOCIAL =
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&auto=format&fit=crop&q=80";

const IMG_REAL_ESTATE =
  "https://plus.unsplash.com/premium_photo-1663040369127-355fd2427cb0?w=900&auto=format&fit=crop&q=80";

export default function VideoAgencyServicesSection() {
  return (
    <section className="bg-zinc-50 py-14 text-zinc-900 dark:bg-[#121212] dark:text-white sm:py-20">
      <div className="container mx-auto w-full px-5 sm:px-8 lg:px-10">
        <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-[0.9375rem]">
          Video Editing Agency in UK
        </p>
        <h2 className="mt-2 max-w-3xl text-left text-2xl font-bold leading-snug tracking-tight text-zinc-900 dark:text-white sm:text-3xl md:text-[2rem] lg:text-[2.125rem]">
          Professional Video Editing Services for Your Business
        </h2>
        <div className="mt-5 h-px w-full bg-zinc-300 dark:bg-zinc-600/45" aria-hidden />

        {/* Block 1: copy left, image right */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="min-w-0 lg:pr-2">
            <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
              Social Media Video Editing Services In UK
            </h3>

            {/* Mobile: image directly under heading */}
            <div className="relative mx-auto mt-6 aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[14px] bg-zinc-200 dark:bg-zinc-900 sm:rounded-2xl lg:hidden">
              <Image
                src={IMG_SOCIAL}
                alt="Social media and content creation"
                fill
                className="object-cover"
                sizes="90vw"
              />
            </div>

            <p className="mt-4 text-justify text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[0.9375rem]">
              Short-form content moves fast. We cut reels, stories, and ads that hold attention in the
              first seconds, match platform-safe pacing, and keep your brand voice consistent across
              every upload — so your social presence looks intentional, not improvised.
            </p>
            <p className="mt-4 text-justify text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[0.9375rem]">
              From hooks and captions timing to clean subtitles and end-cards, we deliver edits that
              are ready to publish. Share your raw clips or batch content; we return polished versions
              sized for each channel, optimised for engagement in the UK market and beyond.
            </p>
          </div>

          {/* Desktop: image on the right */}
          <div className="relative mx-auto hidden aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[14px] bg-zinc-200 dark:bg-zinc-900 sm:rounded-2xl lg:mx-0 lg:block lg:max-w-none">
            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
        </div>

        {/* Block 2: image left, copy right — DOM order = column order (no flex order hacks) */}
        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[14px] bg-zinc-900 sm:rounded-2xl lg:mx-0 lg:max-w-none">
            <Image
              src={IMG_REAL_ESTATE}
              alt="Real estate property and video production"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
          <div className="min-w-0 lg:pl-2">
            <h3 className="text-right text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
              Real Estate Video Editing Services In UK
            </h3>
            <p className="mt-4 text-right text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[0.9375rem]">
              Property buyers decide in minutes. We shape walkthroughs, drone sequences, and agent
              pieces into a clear narrative — brighter interiors, stable colour, and pacing that
              highlights layout, location, and lifestyle without feeling over-produced.
            </p>
            <p className="mt-4 text-right text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[0.9375rem]">
              Whether you are a developer, brokerage, or independent videographer outsourcing post, we
              align titles, lower-thirds, and brand palettes so every listing feels premium and ready for
              portals, social teasers, and email campaigns across the UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

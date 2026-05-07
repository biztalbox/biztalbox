import Image from "next/image";

const IMG_SOCIAL =
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&auto=format&fit=crop&q=80";

const IMG_REAL_ESTATE =
  "https://plus.unsplash.com/premium_photo-1663040369127-355fd2427cb0?w=900&auto=format&fit=crop&q=80";

export default function VideoAgencyServicesSection() {
  return (
    <section className="bg-zinc-50 py-14 text-zinc-900 dark:bg-[#121212] dark:text-white sm:py-20">
      <div className="container">
        <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-[0.9375rem]">
          Video Editing Agency in UK
        </p>
        <h2 className="mt-2 max-w-3xl text-left text-2xl font-bold leading-snug tracking-tight text-zinc-900 dark:text-white sm:text-3xl md:text-[2rem] lg:text-[2.125rem]">
          Professional Video Editing Services for Your Business
        </h2>
        <div className="mt-5 h-px w-full bg-zinc-300 dark:bg-zinc-600/45" aria-hidden />

        <div className="flex flex-col gap-10 mt-10">

          

          {/* Right Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-1">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-2"
            />
          </div>

          {/* Left Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-2">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-1"
            />
          </div>
          {/* Right Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-1">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-2"
            />
          </div>

          {/* Left Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-2">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-1"
            />
          </div>
          {/* Right Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-1">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-2"
            />
          </div>

          {/* Left Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-2">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-1"
            />
          </div>
          {/* Right Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-1">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-2"
            />
          </div>

          {/* Left Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="flex flex-col !order-2 md:!order-2">
              <h3 className="text-left text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl md:text-2xl">
                Social Media Video Editing Services In UK
              </h3>

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

            <Image
              src={IMG_SOCIAL}
              alt="Social media and content creation"
              width={1200}
              height={680}
              className="w-full h-full rounded-xl !order-1 md:!order-1"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

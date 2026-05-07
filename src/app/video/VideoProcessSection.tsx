const STEPS = [
  {
    n: "01",
    title: "Upload Your Footage",
    description:
      "Simply upload your raw videos quickly and securely. Your story begins here.",
  },
  {
    n: "02",
    title: "Share Your Vision & Brand Guidelines",
    description:
      "Tell us your style, mood, and brand essentials. We tailor the edit to reflect your unique identity.",
  },
  {
    n: "03",
    title: "Expert Editing in 48-72 Hours",
    description:
      "Our skilled editors craft your video with precision and creativity — fast turnaround guaranteed!",
  },
  {
    n: "04",
    title: "Review & Request Revisions",
    description:
      "Preview the edit and let us know if you'd like any tweaks. Your satisfaction is our priority.",
  },
  {
    n: "05",
    title: "Final Delivery in Stunning 4K or Your Preferred Format",
    description:
      "Receive your polished video, ready to dazzle across platforms. High quality, hassle-free.",
  },
] as const;

export default function VideoProcessSection() {
  return (
    <section className="bg-zinc-50 py-14 text-zinc-900 dark:bg-[#121212] dark:text-white sm:py-20">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-4xl text-left text-xl font-semibold leading-snug tracking-tight text-zinc-900 dark:text-white sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem]">
          From Footage to Final Cut – The Process
        </h2>
        <div className="mt-4 h-px w-full bg-zinc-300 dark:bg-zinc-600/50" aria-hidden />

        <div className="mt-12 -mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="min-w-[920px] sm:min-w-0">
            {/* Large background step numbers */}
            <div className="grid grid-cols-5">
              {STEPS.map(({ n }) => (
                <div
                  key={`num-${n}`}
                  className="relative flex h-[clamp(3rem,9vw,4.75rem)] items-center justify-center sm:h-[clamp(3.25rem,8vw,5rem)]"
                >
                  <span
                    className="pointer-events-none select-none text-[clamp(1.625rem,4.25vw,2.875rem)] font-bold leading-none tracking-tight text-[#d4d4d4] dark:text-white/[0.12]"
                    aria-hidden
                  >
                    {n}
                  </span>
                </div>
              ))}
            </div>

            {/* Timeline line + nodes */}
            <div className="relative grid grid-cols-5">
              <div
                className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 z-0 h-px -translate-y-1/2 bg-zinc-300 dark:bg-zinc-500"
                aria-hidden
              />
              {STEPS.map(({ n }) => (
                <div
                  key={`dot-${n}`}
                  className="relative z-10 flex justify-center py-1"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-800 ring-[5px] ring-zinc-50 dark:bg-white dark:ring-[#121212]" />
                </div>
              ))}
            </div>

            {/* Titles + descriptions (centered under each node) */}
            <div className="mt-6 grid grid-cols-5 gap-3 sm:mt-8 sm:gap-4 lg:gap-5">
              {STEPS.map(({ n, title, description }) => (
                <div
                  key={n}
                  className="flex flex-col items-center px-1 text-center sm:px-1.5"
                >
                  <h3 className="text-[12px] font-bold leading-snug text-zinc-900 dark:text-white sm:text-[13px] md:text-sm">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[10.5px] font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mt-2 sm:text-[11px] md:text-xs">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

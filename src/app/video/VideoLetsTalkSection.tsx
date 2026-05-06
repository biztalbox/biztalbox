"use client";

import { useEffect, useState } from "react";
import { LuSend } from "react-icons/lu";

export default function VideoLetsTalkSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const date = (form.elements.namedItem("preferredDate") as HTMLInputElement).value;
    const time = (form.elements.namedItem("preferredTime") as HTMLInputElement).value;

    try {
      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
      const timestamp = new Date().toLocaleString("en-IN");

      const res = await fetch("/api/call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website: "",
          phone,
          date,
          time,
          pageUrl,
          userAgent,
          timestamp,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage(data.message);
        form.reset();
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-white/25 bg-white px-4 py-3 text-[15px] text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-white focus:ring-2 focus:ring-white/40 focus:outline-none dark:[color-scheme:light]";

  const labelClass =
    "mb-1.5 block text-xs font-medium tracking-wide text-white sm:text-[13px]";

  return (
    <section className="py-16 text-black dark:bg-black dark:text-white sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0 xl:gap-x-24">
          {/* Left: headline + intro (screenshot: black type on white) */}
          <div className="max-w-[28rem] lg:max-w-none lg:pr-8">
            
            <h2 className="text-[clamp(2.35rem,6.5vw,4.25rem)] font-light leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white">
              Book a free{" "}
              <span className="relative inline-block font-semibold">
                <span className="relative z-10">consultation call</span>
                
              </span>
            </h2>
            <p className="mt-7 max-w-md text-left text-[17px] font-normal leading-[1.55] text-zinc-600 dark:text-zinc-300 sm:mt-8 sm:text-lg">
              Pick a slot that works for you—we&apos;ll walk through your video goals, timeline, and how we
              can help. No pressure, just a real conversation with the crew.
            </p>
          </div>

          {/* Right: solid black pill card, white inputs, SEND bottom-right */}
          <div className="rounded-[36px] bg-[#121212] p-9 sm:rounded-[40px] sm:p-11 lg:rounded-[44px] lg:p-12 xl:p-14">
            <form onSubmit={handleSubmit} className="flex min-h-[280px] flex-col sm:min-h-[300px] lg:min-h-[320px]">
              <div className="space-y-8 sm:space-y-9 lg:space-y-10">
                <div>
                  <label htmlFor="lets-talk-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="lets-talk-name"
                    name="name"
                    type="text"
                    required
                    minLength={3}
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="lets-talk-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="lets-talk-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="lets-talk-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="lets-talk-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 …"
                    className={fieldClass}
                  />
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
                  <div>
                    <label htmlFor="lets-talk-date" className={labelClass}>
                      Preferred date
                    </label>
                    <input
                      id="lets-talk-date"
                      name="preferredDate"
                      type="date"
                      required
                      {...(minDate ? { min: minDate } : {})}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lets-talk-time" className={labelClass}>
                      Preferred time
                    </label>
                    <input
                      id="lets-talk-time"
                      name="preferredTime"
                      type="time"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col pt-12 sm:pt-14 lg:pt-16">
                <div className="flex flex-col items-end gap-2.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-100 active:scale-[0.98] disabled:opacity-60 sm:px-7 sm:py-3 sm:text-xs"
                  >
                    {loading ? "Sending…" : "SEND"}
                    <LuSend className="h-3.5 w-3.5 shrink-0 text-black sm:h-4 sm:w-4" aria-hidden />
                  </button>
                  {message && (
                    <p className="max-w-full text-right text-xs text-emerald-400" role="status">
                      {message}
                    </p>
                  )}
                  {error && (
                    <p className="max-w-full text-right text-xs text-red-400" role="alert">
                      {error}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

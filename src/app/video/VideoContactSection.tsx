"use client";

import { useState } from "react";

/** Mirrors `LeadForm` service list so submissions match the main site. */
const SERVICE_OPTIONS = [
  "Social media video editing",
  "Motion graphics video editing",
  "YouTube video editing services",
  "AI video editing services",
] as const;

export default function VideoContactSection() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      if (!formData.get("budget")) formData.set("budget", "Not specified");
      const formObject = Object.fromEntries(formData.entries());

      const pageUrl =
        typeof window !== "undefined" ? window.location.href : "";
      const userAgent =
        typeof navigator !== "undefined" ? navigator.userAgent : "";
      const timestamp = new Date().toLocaleString("en-IN");

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formObject,
          pageUrl,
          userAgent,
          timestamp,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMessage(
          result.message ||
            "Sorry, there was an error submitting your enquiry. Please try again.",
        );
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-white/15 dark:bg-black dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white/30 dark:focus:ring-white/20";

  const labelClass =
    "mb-2 block text-sm font-medium text-zinc-800  dark:text-zinc-200";

  return (
    <section
      data-video-section="contact"
      className="bg-zinc-50 py-12 text-zinc-900 dark:bg-black dark:text-white sm:py-16"
    >
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          Contact Us
        </h2>
        <div className="mt-3 h-px w-full bg-zinc-300 dark:bg-zinc-800" aria-hidden />

        <div className="mx-auto mt-8 w-full rounded-2xl border border-zinc-200/90 bg-zinc-100 p-3 dark:bg-zinc-950/60 dark:text-white/30 sm:p-6 md:p-8 lg:p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-x-10 md:gap-y-7">
              <div>
                <label htmlFor="video-contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="video-contact-name"
                  name="name"
                  type="text"
                  required
                  minLength={3}
                  placeholder="Enter your full name"
                  className={inputClass}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="video-contact-email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="video-contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className={inputClass}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="video-contact-service" className={labelClass}>
                  Select Your Video Editing Service
                </label>
                <select
                  id="video-contact-service"
                  name="service"
                  required
                  defaultValue={SERVICE_OPTIONS[0]}
                  className={`${inputClass} cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10 dark:[color-scheme:dark]`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23717171'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  }}
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="video-contact-budget" className={labelClass}>
                  Budget (optional)
                </label>
                <input
                  id="video-contact-budget"
                  name="budget"
                  type="text"
                  placeholder="Enter your budget (optional)"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="video-contact-message" className={labelClass}>
                  Your message (optional)
                </label>
                <textarea
                  id="video-contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message (optional)"
                  className={`${inputClass} min-h-[140px] resize-y`}
                />
              </div>
              <div className="flex flex-col gap-4 md:justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-48 rounded-lg bg-zinc-900 dark:bg-zinc-880 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:text-black"
                >
                  {loading ? "Submitting…" : "Submit Form"}
                </button>
              </div>
            </div>

            {(successMessage || errorMessage) && (
              <div className="mt-8 space-y-2 border-t border-zinc-200/80 pt-6 dark:border-zinc-700">
                {successMessage && (
                  <p className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400" role="status">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-center text-sm font-medium text-red-600 dark:text-red-400" role="alert">
                    {errorMessage}
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

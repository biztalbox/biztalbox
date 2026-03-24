"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "@/components/svg";
import { LocationTwo } from "@/components/svg/location";
import type { CmsPublicJob } from "@/types/cms-jobs";
import { getPaginationItems } from "@/utils/pagination";
import styles from "./job-list.module.scss";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 7V5a2 2 0 012-2h0a2 2 0 012 2v2M4 10h16v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 10V8a2 2 0 012-2h12a2 2 0 012 2v2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaginationArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaginationArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PAGE_SIZE = 6;

function departmentPillClass(department: string): string {
  const d = department.toLowerCase();
  if (d.includes("engineer")) return styles.catEngineering;
  if (d.includes("design")) return styles.catDesign;
  if (d.includes("product")) return styles.catProduct;
  if (d.includes("market")) return styles.catMarketing;
  return styles.catDefault;
}

function formatUpdated(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export default function JobList() {
  const [jobs, setJobs] = useState<CmsPublicJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");
  const [locFilter, setLocFilter] = useState("all");
  const [empFilter, setEmpFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const listTopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) throw new Error("Could not load job listings.");
        const data: unknown = await res.json();
        if (!Array.isArray(data)) throw new Error("Invalid job data.");
        const open = (data as CmsPublicJob[]).filter((j) => j.accepting_applications);
        if (!cancelled) setJobs(open);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Could not load job listings.");
          setJobs([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const departments = useMemo(() => {
    const u = new Set(jobs.map((j) => j.department).filter(Boolean));
    return ["all", ...Array.from(u).sort((a, b) => a.localeCompare(b))];
  }, [jobs]);

  const locations = useMemo(() => {
    const u = new Set(jobs.map((j) => j.location).filter(Boolean));
    return ["all", ...Array.from(u).sort((a, b) => a.localeCompare(b))];
  }, [jobs]);

  const employmentTypes = useMemo(() => {
    const u = new Set(jobs.map((j) => j.employment_type).filter(Boolean));
    return ["all", ...Array.from(u).sort((a, b) => a.localeCompare(b))];
  }, [jobs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (q) {
        const blob = `${job.title} ${job.department} ${job.location}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      if (deptFilter !== "all" && job.department !== deptFilter) return false;
      if (locFilter !== "all" && job.location !== locFilter) return false;
      if (empFilter !== "all" && job.employment_type !== empFilter) return false;
      return true;
    });
  }, [jobs, query, deptFilter, locFilter, empFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, deptFilter, locFilter, empFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const displayed = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const pageItems = useMemo(
    () => getPaginationItems(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const goToPage = (page: number) => {
    const next = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(next);
    requestAnimationFrame(() => {
      listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const showPagination = filtered.length > 0 && totalPages > 1;

  return (
    <section
      id="open-positions"
      className={styles.section}
      aria-labelledby="job-list-heading"
    >
      <div ref={listTopRef} className={styles.inner}>
        <h2 id="job-list-heading" className={styles.srOnly}>
          Job openings
        </h2>

        <div className={styles.toolbar}>
          <label className={styles.searchWrap} htmlFor="job-list-search">
            <Search />
            <input
              id="job-list-search"
              type="search"
              className={styles.searchInput}
              placeholder="Search roles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              disabled={loading}
            />
          </label>

          <div className={styles.filters}>
            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                aria-label="Department"
                disabled={loading}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d === "all" ? "All Departments" : d}
                  </option>
                ))}
              </select>
              <span className={styles.selectChevron}>
                <ChevronDown />
              </span>
            </div>

            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                value={locFilter}
                onChange={(e) => setLocFilter(e.target.value)}
                aria-label="Location"
                disabled={loading}
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l === "all" ? "Location" : l}
                  </option>
                ))}
              </select>
              <span className={styles.selectChevron}>
                <ChevronDown />
              </span>
            </div>

            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                value={empFilter}
                onChange={(e) => setEmpFilter(e.target.value)}
                aria-label="Employment type"
                disabled={loading}
              >
                {employmentTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === "all" ? "Employment Type" : t}
                  </option>
                ))}
              </select>
              <span className={styles.selectChevron}>
                <ChevronDown />
              </span>
            </div>
          </div>
        </div>

        {loading ? (
          <p className={styles.loading}>Loading open positions…</p>
        ) : error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : (
          <>
            {displayed.length > 0 ? (
              <div className={styles.grid}>
                {displayed.map((job) => (
                  <article key={job.slug} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={departmentPillClass(job.department)}>
                        {job.department.toUpperCase()}
                      </span>
                      <div className={styles.locRow}>
                        <LocationTwo />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <h3 className={styles.cardTitle}>{job.title}</h3>
                    <p className={styles.cardDesc}>
                      Join our {job.department} team in {job.location}. Role updated{" "}
                      {formatUpdated(job.updated_at)}.
                    </p>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>
                        <BriefcaseIcon />
                        {job.department}
                      </span>
                      <span className={styles.metaItem}>
                        <ClockIcon />
                        {job.employment_type}
                      </span>
                    </div>
                    <Link href={`/career/${encodeURIComponent(job.slug)}`} className={styles.applyLink}>
                      Apply Now
                    </Link>
                  </article>
                ))}
              </div>
            ) : null}

            {filtered.length === 0 ? (
              <p className={styles.emptyState}>
                {jobs.length === 0
                  ? "No open positions at the moment. Check back soon."
                  : "No roles match your filters. Try adjusting search or filters."}
              </p>
            ) : null}

            {showPagination ? (
              <nav
                className={styles.paginationWrap}
                aria-label="Pagination"
              >
                <div className={styles.paginationNav}>
                  <button
                    type="button"
                    className={styles.paginationArrow}
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage <= 1}
                    aria-label="Previous page"
                  >
                    <PaginationArrowLeft />
                  </button>

                  <ol className={styles.paginationList}>
                    {pageItems.map((item, idx) =>
                      item === "ellipsis" ? (
                        <li key={`e-${idx}`} className={styles.paginationEllipsis}>
                          …
                        </li>
                      ) : (
                        <li key={item}>
                          <button
                            type="button"
                            className={
                              item === currentPage
                                ? `${styles.paginationPage} ${styles.paginationPageActive}`
                                : styles.paginationPage
                            }
                            onClick={() => goToPage(item)}
                            aria-label={`Page ${item}`}
                            aria-current={item === currentPage ? "page" : undefined}
                          >
                            {item}
                          </button>
                        </li>
                      )
                    )}
                  </ol>

                  <button
                    type="button"
                    className={styles.paginationArrow}
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    aria-label="Next page"
                  >
                    <PaginationArrowRight />
                  </button>
                </div>
              </nav>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

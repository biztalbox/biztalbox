"use client";

import { sanitizeJobHtml } from "@/lib/sanitize-job-html";
import type { CmsJobDetail } from "@/types/cms-jobs";
import { useEffect, useId, useState } from "react";
import styles from "./job-detail.module.scss";

type Props = {
  job: CmsJobDetail;
};

const RESP_ICONS = [
  RespLayoutIcon,
  RespUsersIcon,
  RespCollabIcon,
  RespSearchIcon,
];

const BENEFIT_ICONS = [BenefitMoneyIcon, BenefitLaptopIcon, BenefitPalmIcon];

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s-7-4.2-7-10a7 7 0 1114 0c0 5.8-7 10-7 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="11"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function BriefcaseSm() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M4 10h16v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9zM4 10V8a2 2 0 012-2h12a2 2 0 012 2v2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 2h12a2 2 0 012 2v18l-8-4-8 4V4a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function JobDetailPage({ job }: Props) {
  const formId = useId();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  /** Honeypot — must stay empty; not shown to users */
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job.accepting_applications) return;
    if (companyWebsite.trim()) return;
    setFormError(null);
    setSubmitting(true);
    try {
      const ru = resumeUrl.trim();
      const li = linkedinUrl.trim();
      const ph = phone.trim();
      if (!ph) {
        throw new Error("Please enter your phone number.");
      }
      const cleanedNumber = ph.replace(/\D/g, "");
      if (cleanedNumber.length < 10 || cleanedNumber.length > 15) {
        throw new Error("Please enter a valid phone number.");
      }
      if (!ru) {
        throw new Error("Please enter your resume URL.");
      }
      try {
        const u = new URL(ru);
        if (u.protocol !== "http:" && u.protocol !== "https:") {
          throw new Error("Resume link must start with http:// or https://");
        }
      } catch {
        throw new Error("Resume link must be a valid http or https URL.");
      }
      if (!li) {
        throw new Error("Please enter your LinkedIn profile URL.");
      }
      let linkedinOk = false;
      try {
        const u = new URL(li);
        if (u.protocol === "http:" || u.protocol === "https:") {
          const h = u.hostname.toLowerCase();
          linkedinOk =
            h === "linkedin.com" ||
            h === "www.linkedin.com" ||
            h.endsWith(".linkedin.com");
        }
      } catch {
        linkedinOk = false;
      }
      if (!linkedinOk) {
        throw new Error("LinkedIn must be a valid linkedin.com profile URL.");
      }

      const fd = new FormData();
      fd.set("full_name", fullName.trim());
      fd.set("email", email.trim());
      fd.set("phone", phone.trim());
      fd.set("cover_letter", coverLetter);
      fd.set("resume_url", ru);
      fd.set("linkedin_url", li);
      fd.set("company_website", companyWebsite);
      fd.set("jobSlug", job.slug);
      fd.set("jobTitle", job.title);

      const res = await fetch("/api/job-application", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Could not submit.");
      setFormSuccess(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setCoverLetter("");
      setResumeUrl("");
      setLinkedinUrl("");
      setCompanyWebsite("");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const saveForLater = () => {
    try {
      const key = `job-application-draft-${job.slug}`;
      localStorage.setItem(
        key,
        JSON.stringify({
          fullName,
          email,
          phone,
          coverLetter,
          resumeUrl,
          linkedinUrl,
        })
      );
      setFormError(null);
      alert("Draft saved in this browser. Come back anytime to finish.");
    } catch {
      setFormError("Could not save draft.");
    }
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`job-application-draft-${job.slug}`);
      if (!raw) return;
      const d = JSON.parse(raw) as Record<string, string>;
      if (d.fullName) setFullName(d.fullName);
      else if (d.name) setFullName(d.name);
      if (d.email) setEmail(d.email);
      if (d.phone) setPhone(d.phone);
      if (d.coverLetter) setCoverLetter(d.coverLetter);
      if (d.resumeUrl) setResumeUrl(d.resumeUrl);
      if (d.linkedinUrl) setLinkedinUrl(d.linkedinUrl);
    } catch {
      /* ignore */
    }
  }, [job.slug]);

  const deptUpper = job.department.toUpperCase();

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.main}>
          {!job.accepting_applications ? (
            <p className={styles.closedBanner}>
              This position is not accepting new applications right now.
            </p>
          ) : null}

          <section id="role">
            <span className={styles.deptLabel}>{deptUpper} DEPARTMENT</span>
            <h1 className={styles.title}>{job.title}</h1>

            <div className={styles.badges}>
              <span className={styles.badge}>
                <PinIcon />
                {job.location}
              </span>
              {job.experienceLabel ? (
                <span className={styles.badge}>
                  <BriefcaseSm />
                  {job.experienceLabel}
                </span>
              ) : null}
              <span className={styles.badge}>
                <BoltIcon />
                {job.employment_type}
              </span>
            </div>

            {job.intro ? <p className={styles.intro}>{job.intro}</p> : null}

            {job.bodyHtml ? (
              <div
                className={styles.jobBodyHtml}
                dangerouslySetInnerHTML={{
                  __html: sanitizeJobHtml(job.bodyHtml),
                }}
              />
            ) : null}

            {job.aboutParagraphs.length > 0 ? (
              <>
                <h2 className={styles.sectionTitle}>About the Role</h2>
                {job.aboutParagraphs.map((p, i) => (
                  <p key={i} className={styles.aboutText}>
                    {p}
                  </p>
                ))}
              </>
            ) : null}
          </section>

          {job.responsibilities.length > 0 ? (
            <section id="responsibilities">
              <h2 className={styles.sectionTitleSpaced}>Responsibilities</h2>
              <div className={styles.respGrid}>
                {job.responsibilities.map((r, i) => {
                  const Icon = RESP_ICONS[i % RESP_ICONS.length];
                  return (
                    <div key={`${i}-${r.text.slice(0, 40)}`} className={styles.respCard}>
                      <Icon className={styles.respIcon} />
                      <p className={styles.respText}>{r.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          {job.requirements.length > 0 ? (
            <section id="requirements">
              <h2 className={styles.sectionTitleSpaced}>Requirements</h2>
              <div className={styles.reqList}>
                {job.requirements.map((req, i) => (
                  <div key={`${i}-${req.heading}`} className={styles.reqCard}>
                    <div className={styles.reqCheck}>
                      <CheckIcon />
                    </div>
                    <div className={styles.reqBody}>
                      <h3 className={styles.reqHeading}>{req.heading}</h3>
                      {req.sub ? <p className={styles.reqSub}>{req.sub}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {job.benefits.length > 0 ? (
            <section id="benefits">
              <h2 className={styles.sectionTitleSpaced}>Benefits</h2>
              <div className={styles.benefitsRow}>
                {job.benefits.map((b, i) => {
                  const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
                  return (
                    <div key={`${i}-${b.title}`} className={styles.benefit}>
                      <div className={styles.benefitIconWrap}>
                        <Icon />
                      </div>
                      <h3 className={styles.benefitTitle}>{b.title}</h3>
                      {b.sub ? <p className={styles.benefitSub}>{b.sub}</p> : null}
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Apply Now</h2>
            </div>

            <form id={formId} onSubmit={onSubmit}>
              {formError ? (
                <p className={styles.formError} role="alert">
                  {formError}
                </p>
              ) : null}
              {formSuccess ? (
                <p className={styles.formSuccess}>
                  Thank you, your application was sent. We&apos;ll be in touch soon.
                </p>
              ) : null}

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor={`${formId}-company-website`}>Company website</label>
                <input
                  id={`${formId}-company-website`}
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  disabled={!job.accepting_applications}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${formId}-name`}>
                  Full name <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`${formId}-name`}
                  name="full_name"
                  className={styles.input}
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  disabled={!job.accepting_applications}
                  autoComplete="name"
                />
              </div>

              <div className={styles.row2}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor={`${formId}-email`}>
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={!job.accepting_applications}
                    autoComplete="email"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor={`${formId}-phone`}>
                    Phone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    className={styles.input}
                    placeholder="+1 555 0100"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={!job.accepting_applications}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${formId}-resume-url`}>
                  Resume URL <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`${formId}-resume-url`}
                  name="resume_url"
                  type="url"
                  inputMode="url"
                  className={styles.input}
                  placeholder="https://…"
                  value={resumeUrl}
                  onChange={(e) => setResumeUrl(e.target.value)}
                  required
                  disabled={!job.accepting_applications}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${formId}-linkedin`}>
                  LinkedIn <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`${formId}-linkedin`}
                  name="linkedin_url"
                  type="url"
                  inputMode="url"
                  className={styles.input}
                  placeholder="https://www.linkedin.com/in/…"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  required
                  disabled={!job.accepting_applications}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${formId}-cover`}>
                  Cover letter
                </label>
                <textarea
                  id={`${formId}-cover`}
                  name="cover_letter"
                  className={styles.textarea}
                  placeholder="Your message…"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  disabled={!job.accepting_applications}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitting || !job.accepting_applications}
              >
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
            </form>

            <button
              type="button"
              className={styles.saveLater}
              onClick={saveForLater}
            >
              <BookmarkIcon />
              Save for later
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function RespLayoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.75" />
      <path d="M9 21V9" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function RespUsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M3 21v-1a4 4 0 014-4h4a4 4 0 014 4v1"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M21 21v-1a3 3 0 00-2-2.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RespCollabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 12h8M12 8v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function RespSearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M14.5 14.5L20 20"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BenefitMoneyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="6"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BenefitLaptopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M2 18h20" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function BenefitPalmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v18M8 8c0-2 1.5-3 4-3s4 1 4 3c0 2-2 3-4 5-2-2-4-3-4-5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

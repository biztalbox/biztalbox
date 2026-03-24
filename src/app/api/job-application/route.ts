import { getCmsJobApplyUrl } from "@/lib/cms-jobs";
import { NextRequest, NextResponse } from "next/server";

function isHttpUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function isLinkedInUrl(s: string): boolean {
  try {
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    const h = u.hostname.toLowerCase();
    return h === "linkedin.com" || h === "www.linkedin.com" || h.endsWith(".linkedin.com");
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const companyWebsite = String(formData.get("company_website") ?? "").trim();
    if (companyWebsite.length > 0) {
      return NextResponse.json({ success: true, message: "Application sent successfully." }, { status: 200 });
    }

    const fullName = String(formData.get("full_name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const coverLetter = String(formData.get("cover_letter") ?? "").trim();
    const resumeUrl = String(formData.get("resume_url") ?? "").trim();
    const linkedinUrl = String(formData.get("linkedin_url") ?? "").trim();
    const jobSlug = String(formData.get("jobSlug") ?? "").trim();

    if (!jobSlug) {
      return NextResponse.json({ message: "Missing job reference." }, { status: 400 });
    }
    if (fullName.length < 2) {
      return NextResponse.json({ message: "Please enter your full name." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ message: "Please enter your phone number." }, { status: 400 });
    }
    const cleanedNumber = phone.replace(/\D/g, "");
    if (cleanedNumber.length < 10 || cleanedNumber.length > 15) {
      return NextResponse.json({ message: "Please enter a valid phone number." }, { status: 400 });
    }
    if (!resumeUrl) {
      return NextResponse.json({ message: "Please enter your resume URL." }, { status: 400 });
    }
    if (!isHttpUrl(resumeUrl)) {
      return NextResponse.json(
        { message: "Resume link must be a valid http or https URL." },
        { status: 400 }
      );
    }
    if (!linkedinUrl) {
      return NextResponse.json(
        { message: "Please enter your LinkedIn profile URL." },
        { status: 400 }
      );
    }
    if (!isLinkedInUrl(linkedinUrl)) {
      return NextResponse.json(
        { message: "LinkedIn must be a valid linkedin.com profile URL." },
        { status: 400 }
      );
    }

    const payload: Record<string, string> = {
      full_name: fullName,
      email,
      phone,
      resume_url: resumeUrl,
      linkedin_url: linkedinUrl,
    };
    if (coverLetter) payload.cover_letter = coverLetter;

    const applyUrl = getCmsJobApplyUrl(jobSlug);
    const cmsRes = await fetch(applyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const rawText = await cmsRes.text();
    let parsed: Record<string, unknown> = {};
    if (rawText) {
      try {
        parsed = JSON.parse(rawText) as Record<string, unknown>;
      } catch {
        /* non-JSON body */
      }
    }

    if (!cmsRes.ok) {
      const msg =
        typeof parsed.message === "string"
          ? parsed.message
          : typeof parsed.error === "string"
            ? parsed.error
            : `Application could not be submitted (${cmsRes.status}).`;
      return NextResponse.json({ message: msg }, { status: cmsRes.status >= 400 && cmsRes.status < 600 ? cmsRes.status : 502 });
    }

    const successMessage =
      typeof parsed.message === "string" && parsed.message
        ? parsed.message
        : "Application sent successfully.";

    return NextResponse.json({ success: true, message: successMessage }, { status: 200 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Something went wrong.";
    return NextResponse.json({ message }, { status: 500 });
  }
}

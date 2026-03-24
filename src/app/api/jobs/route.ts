import { NextResponse } from "next/server";

const CMS_JOBS_URL =
  process.env.CMS_JOBS_URL ?? "https://cms.biztalbox.com/api/public/jobs";

export async function GET() {
  try {
    const res = await fetch(CMS_JOBS_URL, {
      next: { revalidate: 120 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to load jobs" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to load jobs" },
      { status: 502 }
    );
  }
}

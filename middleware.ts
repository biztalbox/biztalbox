import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Server-side home routing based on theme cookie.
 *
 * - If theme is dark: visiting "/" redirects to "/?mode=dark"
 * - If theme is light: visiting "/?mode=dark" redirects to "/"
 *
 * This avoids client-side redirects (DOM injection / hydration flashes).
 */
export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Only enforce on the home route.
  if (url.pathname !== "/") return NextResponse.next();

  const theme = req.cookies.get("bb_theme")?.value; // "dark" | "light" | undefined
  const mode = url.searchParams.get("mode");

  const withDebug = (res: NextResponse) => {
    // Debug headers to verify middleware runs on Vercel and what it sees.
    // Safe to leave in production (no PII); helps diagnose theme routing.
    res.headers.set("x-bb-mw", "1");
    res.headers.set("x-bb-theme", theme ?? "none");
    res.headers.set("x-bb-mode", mode ?? "none");
    return res;
  };

  // If user prefers dark theme, force mode=dark on "/"
  if (theme === "dark" && mode !== "dark") {
    const next = url.clone();
    next.searchParams.set("mode", "dark");
    return withDebug(NextResponse.redirect(next));
  }

  // If user prefers light theme, strip mode=dark
  if (theme === "light" && mode === "dark") {
    const next = url.clone();
    next.searchParams.delete("mode");
    return withDebug(NextResponse.redirect(next));
  }

  return withDebug(NextResponse.next());
}

export const config = {
  matcher: ["/"],
};


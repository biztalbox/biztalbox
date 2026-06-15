export type HomeTheme = "dark" | "light";

/** Read `bb_theme` from document.cookie (client only). */
export function readThemeCookie(): HomeTheme | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)bb_theme=(dark|light)(?:;|$)/);
  return match ? (match[1] as HomeTheme) : null;
}

/** Home href that preserves dark mode across client navigations (bypasses stale RSC prefetch). */
export function getHomeHref(theme?: HomeTheme | null): string {
  const resolved = theme ?? readThemeCookie();
  return resolved === "dark" ? "/?mode=dark" : "/";
}

/** Server + URL: whether to render the dark homepage variant. */
export function resolveDarkHomeMode(
  modeParam: string | undefined,
  themeCookie: string | undefined,
): boolean {
  if (modeParam === "dark") return true;
  if (modeParam === "light") return false;
  return themeCookie === "dark";
}

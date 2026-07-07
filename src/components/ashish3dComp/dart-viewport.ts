/** Desktop = cursor-follow HIT + board click validation. Below = fixed HIT button. */
export const DART_DESKTOP_MIN_WIDTH_PX = 1024;

export function isDartDesktopViewport() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(`(min-width: ${DART_DESKTOP_MIN_WIDTH_PX}px)`).matches
  );
}

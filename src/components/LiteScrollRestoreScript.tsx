import Script from "next/script";

/**
 * Runs before React hydrates so the browser cannot restore the previous
 * scroll position on lite homepage reload.
 */
const LITE_SCROLL_RESET_INLINE = `
(function () {
  try {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    var toTop = function () {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    toTop();
    window.addEventListener("pageshow", toTop);
  } catch (e) {}
})();
`;

export default function LiteScrollRestoreScript() {
  return (
    <Script
      id="lite-home-scroll-restore"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: LITE_SCROLL_RESET_INLINE }}
    />
  );
}

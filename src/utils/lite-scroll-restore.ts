/** Reset native scroll on lite homepage reload (ScrollSmoother is disabled there). */
export function resetLiteHomeScroll(): void {
  if (typeof window === "undefined") return;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function enableLiteHomeScrollRestoreFix(): () => void {
  if (typeof window === "undefined") return () => {};

  const previousRestoration =
    "scrollRestoration" in history ? history.scrollRestoration : null;

  if (previousRestoration !== null) {
    history.scrollRestoration = "manual";
  }

  resetLiteHomeScroll();

  const onPageShow = () => resetLiteHomeScroll();
  const onLoad = () => resetLiteHomeScroll();
  const onLayoutReady = () => {
    requestAnimationFrame(() => {
      resetLiteHomeScroll();
      requestAnimationFrame(resetLiteHomeScroll);
    });
  };

  window.addEventListener("pageshow", onPageShow);
  window.addEventListener("load", onLoad);
  window.addEventListener("lite:scroll-layout-ready", onLayoutReady);
  window.addEventListener("lite:loader-hidden", onLayoutReady);

  requestAnimationFrame(() => {
    resetLiteHomeScroll();
    requestAnimationFrame(resetLiteHomeScroll);
  });

  return () => {
    window.removeEventListener("pageshow", onPageShow);
    window.removeEventListener("load", onLoad);
    window.removeEventListener("lite:scroll-layout-ready", onLayoutReady);
    window.removeEventListener("lite:loader-hidden", onLayoutReady);
    if (previousRestoration !== null) {
      history.scrollRestoration = previousRestoration;
    }
  };
}

'use client';
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { ScrollSmoother } from "@/plugins";
const ThemeSetting = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [settingOpen, setSettingOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function handleOpenSetting() {
    setSettingOpen(!settingOpen);
  };

  const writeThemeCookie = (nextTheme: "dark" | "light") => {
    const isHttps =
      typeof window !== "undefined" &&
      typeof window.location !== "undefined" &&
      window.location.protocol === "https:";
    // `Secure` is recommended on Vercel/HTTPS so the cookie is consistently sent.
    document.cookie = `bb_theme=${nextTheme}; Path=/; Max-Age=31536000; SameSite=Lax${isHttps ? "; Secure" : ""}`;
  };

  const applyTheme = (nextTheme: "dark" | "light") => {
    // Only run the smooth-scroll cleanup on the homepage when switching to light.
    // This prevents unintended side-effects on other routes that may rely on smooth scrolling.
    if (pathname === "/" && nextTheme === "light") {
      try {
        ScrollSmoother.get?.()?.kill?.();
      } catch {
        // ignore
      }
      document.body.classList.remove("tp-smooth-scroll");
      document.body.style.removeProperty("height");
      document.body.style.removeProperty("transform");
    }
    // Persist theme to a cookie so middleware can route "/" correctly on the next navigation.
    // Do this BEFORE navigation so the request includes the updated cookie (important on Vercel).
    writeThemeCookie(nextTheme);

    setTheme(nextTheme);

    // On home, perform a real navigation so middleware can redirect correctly in production.
    if (pathname === "/") {
      router.push(nextTheme === "dark" ? "/?mode=dark" : "/");
    }
  };

  useEffect(() => {
    // If no theme is set yet, default to light.
    if (!theme) setTheme("light");
  }, [setTheme, theme]);

  useEffect(() => {
    // Ensure the middleware cookie is always present, even when theme comes from system preference.
    const t = (resolvedTheme ?? theme) as unknown;
    if (t !== "dark" && t !== "light") return;
    writeThemeCookie(t);
  }, [resolvedTheme, theme]);
  return (
    <div
      className={`tp-theme-settings-area transition-3 ${settingOpen ? "settings-opened" : ""
        }`}
    >
      <div className="tp-theme-wrapper">
        <div className="tp-theme-header text-center">
          <h4 className="tp-theme-header-title">Mode Settings</h4>
        </div>

        <div className="tp-theme-dir mb-20">
          <label className="tp-theme-dir-main" htmlFor="tp-dir-toggler">
            <span
              onClick={() => applyTheme("dark")}
              className={`tp-theme-dir-rtl ${theme === "dark" ? "active" : ""}`}
            >
              Dark
            </span>
            <input type="checkbox" id="tp-dir-toggler" checked={theme === "dark"} readOnly />
            <i className="tp-theme-dir-slide"></i>
            <span
              onClick={() => applyTheme("light")}
              className={`tp-theme-dir-ltr ${theme === "light" ? "active" : ""
                }`}
            >
              Light
            </span>
          </label>
        </div>

        <div className="tp-theme-settings">
          <div className="tp-theme-settings-wrapper">
            <div className="tp-theme-settings-open">
              <button
                className="tp-theme-settings-open-btn"
                onClick={handleOpenSetting}
              >
                <span className="tp-theme-settings-gear">
                  <i className="fa-light fa-gear"></i>
                </span>
                <span className="tp-theme-settings-close">
                  <i className="fa-regular fa-xmark"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false
})

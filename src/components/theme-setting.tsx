'use client';
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { ScrollSmoother } from "@/plugins";
const ThemeSetting = () => {
  const { setTheme, theme } = useTheme();
  const [settingOpen, setSettingOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function handleOpenSetting() {
    setSettingOpen(!settingOpen);
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
    setTheme(nextTheme);
  };

  useEffect(() => {
    // If no theme is set yet, default to light.
    if (!theme) setTheme("light");

    if (!theme) return;

    // Persist theme to a cookie so the server (middleware) can route "/" correctly.
    // next-themes stores preference client-side; cookie enables SSR redirect without DOM flashes.
    document.cookie = `bb_theme=${theme}; path=/; max-age=31536000; samesite=lax`;

    // If user changes theme while on home, refresh so middleware can serve correct variant.
    if (pathname === "/") {
      router.refresh();
    }
  }, [setTheme, theme]);
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

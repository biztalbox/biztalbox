'use client';
import React, { useEffect, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiMoon, FiSun } from "react-icons/fi";
import { ScrollSmoother } from "@/plugins";

const ThemeSetting = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [settingOpen, setSettingOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activeTheme = (resolvedTheme ?? theme) === "dark" ? "dark" : "light";
  const isDark = activeTheme === "dark";

  function handleOpenSetting() {
    setSettingOpen(!settingOpen);
  }

  const writeThemeCookie = (nextTheme: "dark" | "light") => {
    const isHttps =
      typeof window !== "undefined" &&
      typeof window.location !== "undefined" &&
      window.location.protocol === "https:";
    document.cookie = `bb_theme=${nextTheme}; Path=/; Max-Age=31536000; SameSite=Lax${isHttps ? "; Secure" : ""}`;
  };

  const applyTheme = (nextTheme: "dark" | "light") => {
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
    writeThemeCookie(nextTheme);
    setTheme(nextTheme);

    if (pathname === "/") {
      router.push(nextTheme === "dark" ? "/?mode=dark" : "/");
    }
  };

  const setLiteTheme = () => {
    if (!isDark) return;
    applyTheme("light");
  };

  const setDarkTheme = () => {
    if (isDark) return;
    applyTheme("dark");
  };

  useEffect(() => {
    if (!theme) return;
  }, [setTheme, theme]);

  useLayoutEffect(() => {
    const t = (resolvedTheme ?? theme) as unknown;
    if (t !== "dark" && t !== "light") {
      setTheme("light");
      writeThemeCookie("light");
      return;
    }
    writeThemeCookie(t);
  }, [resolvedTheme, theme, setTheme]);

  return (
    <div
      className={`tp-theme-settings-area transition-3 ${
        settingOpen ? "settings-opened" : ""
      }`}
    >
      <div className="tp-theme-box">
        <button
          type="button"
          className="tp-theme-settings-open-btn"
          onClick={handleOpenSetting}
          aria-label={settingOpen ? "Close theme settings" : "Open theme settings"}
        >
          <Image
            src="/assets/img/theme-toggles-icon.png"
            alt="Theme"
            width={42}
            height={42}
            className="tp-theme-settings-yin-yang"
            priority
          />
        </button>

        <div
          className={`tp-theme-mode-switch ${isDark ? "is-dark" : "is-lite"}`}
          role="group"
          aria-label="Theme mode"
        >
          <span className="tp-theme-mode-indicator" aria-hidden="true" />
          <button
            type="button"
            className={`tp-theme-mode-option ${isDark ? "is-active" : ""}`}
            onClick={setDarkTheme}
            aria-label="Switch to dark mode"
            aria-pressed={isDark}
          >
            <FiMoon aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`tp-theme-mode-option ${!isDark ? "is-active" : ""}`}
            onClick={setLiteTheme}
            aria-label="Switch to lite mode"
            aria-pressed={!isDark}
          >
            <FiSun aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false,
});

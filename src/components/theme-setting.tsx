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

  const toggleTheme = () => {
    applyTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    // Don't force light on first mount; allow system/resolved theme to drive.
    // (Forcing light can overwrite `resolvedTheme` and break middleware routing on Vercel.)
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
            src="/assets/img/theme-yin-yang.png"
            alt="Theme"
            width={48}
            height={48}
            className="tp-theme-settings-yin-yang"
            priority
          />
        </button>

        <button
          type="button"
          className={`tp-theme-mode-label ${isDark ? "is-lite-target" : "is-dark-target"}`}
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to lite mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <>
              <FiSun aria-hidden="true" />
              <span>LITE</span>
            </>
          ) : (
            <>
              <FiMoon aria-hidden="true" />
              <span>DARK</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false,
});

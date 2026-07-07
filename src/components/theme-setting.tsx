'use client';
import React, { useEffect, useLayoutEffect } from "react";
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
      className={`tp-theme-settings-area transition-3 ${settingOpen ? "settings-opened" : ""
        }`}
    >
      <div className="tp-theme-wrapper">
        <div className="tp-theme-dir mt-10">
          <label className="tp-theme-dir-main" htmlFor="tp-dir-toggler">
            <span
              onClick={() => applyTheme("dark")}
              className={`tp-theme-dir-rtl ${theme === "dark" ? "active" : ""}`}
            >

              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M482.31-160q-133.34 0-226.67-93.33-93.33-93.34-93.33-226.67 0-121.54 79.23-210.77t196.15-105.38q3.23 0 6.35.23 3.11.23 6.11.69-20.23 28.23-32.03 62.81-11.81 34.57-11.81 72.42 0 106.67 74.66 181.33Q555.64-404 662.31-404q38.07 0 72.54-11.81 34.46-11.81 61.92-32.04.46 3 .69 6.12.23 3.11.23 6.35-15.38 116.92-104.61 196.15T482.31-160Zm0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T366.31-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z" /></svg>
            </span>
            <input type="checkbox" id="tp-dir-toggler" checked={theme === "dark"} readOnly />
            <i className="tp-theme-dir-slide"></i>
            <span
              onClick={() => applyTheme("light")}
              className={`tp-theme-dir-ltr ${theme === "light" ? "active" : ""
                }`}
            >

              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-198.42 28.42Q320-413.15 320-480t46.58-113.42Q413.15-640 480-640t113.42 46.58Q640-546.85 640-480t-46.58 113.42Q546.85-320 480-320t-113.42-46.58ZM200-460H60v-40h140v40Zm700 0H760v-40h140v40ZM460-760v-140h40v140h-40Zm0 700v-140h40v140h-40ZM269.85-663.85l-86.39-83.92 27.77-29.77 84.46 85.39-25.84 28.3Zm478.92 481.39-84.69-85.62 26.07-28.07 86.39 83.92-27.77 29.77Zm-84.92-507.69 83.92-86.39 29.77 27.77-85.39 84.46-28.3-25.84ZM182.46-211.23l85.62-84.69 26.54 26.07-83.16 87.16-29-28.54ZM480-480Z" /></svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="M339.72-148.34q-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120q-74.67 0-140.41-28.34ZM500-160.69q123.62-8.08 211.81-98.35T800-480q0-130.69-87.42-220.19-87.43-89.5-212.58-99.12v638.62Z" /></svg>
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

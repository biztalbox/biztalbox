"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "@/layouts/headers/header-menus";
import useSticky from "@/hooks/use-sticky";
import black_logo from "@/assets/img/logo/black.png";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";

/**
 * Lite page header — same layout as HeaderEleven;
 * transparent bar; black nav text, logo, hamburger.
 */
export default function Header() {
  const { sticky, headerRef, headerFullWidth } = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);

  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Keep header above WebGL + overlay UI */}
      <header className="tp-header-height relative z-[1000]" ref={headerRef}>
        <div
          id="header-sticky"
          className={`lite-ashish-header tp-inner-header-area z-[1000] tp-inner-header-style-2 tp-inner-header-mob-space ${sticky ? "header-sticky" : ""}`}
        >
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-logo tp-header-logo">
                  {/* Single black logo — avoids global dark-theme .logo-1/.logo-2 swap */}
                  <Link className="lite-ashish-header-logo" href="/">
                    <Image src={black_logo} alt="biztal" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-xl-block">
                <div className="tp-inner-header-right-wrap text-center">
                  <div className="tp-inner-header-menu header-main-menu">
                    <nav className="tp-main-menu-content">
                      <HeaderMenus />
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-right-action text-end">
                  <ul>
                    <li>
                      <div className="tp-inner-bar tp-header-bar">
                        <button
                          type="button"
                          onClick={() => setOpenOffCanvas(true)}
                          className="tp-offcanvas-open-btn"
                        >
                          <span style={{ backgroundColor: "#000000" }} />
                          <span style={{ backgroundColor: "#000000" }} />
                          <span style={{ backgroundColor: "#000000" }} />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
    </>
  );
}

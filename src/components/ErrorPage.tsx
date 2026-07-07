"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";

const ERROR_GIF = {
  dark: "/404_black.gif",
  light: "/404_white.gif",
} as const;

const ErrorMain = () => {
  useScrollSmooth();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const errorGifSrc =
    mounted && resolvedTheme === "light" ? ERROR_GIF.light : ERROR_GIF.dark;

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* error hero */}
            <div className="tp-error-area pt-120" style={{position: 'relative', height: '100vh'}}>
              <img
                src={errorGifSrc}
                alt=""
                style={{ height: "auto", position: "absolute", bottom: "2rem" }}
              />
              <div className="container">
                <div className="row" >
                  <div className="col-xl-12">
                    <div className="tp-error-wrapper text-center mt-120">
                      <h1 style={{fontSize: '5rem', fontWeight: 700}}>404</h1>
                      {/* <Image src={error} alt="error-img" style={{ height: 'auto' }} /> */}
                      <div className="tp-error-content">
                        {/* <h4 className="tp-error-title-sm">
                          Page Not Found
                        </h4> */}
                        <p>Page Not Found.</p>
                        <Link className="tp-btn-black-2" href="/">
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* error hero */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorMain;

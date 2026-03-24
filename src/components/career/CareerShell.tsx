"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollSmoother } from "@/plugins";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterFour from "@/layouts/footers/footer-four";

gsap.registerPlugin(ScrollSmoother);

type Props = {
  children: React.ReactNode;
  headerTransparent?: boolean;
};

export default function CareerShell({
  children,
  headerTransparent = true,
}: Props) {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  return (
    <Wrapper>
      <div className="career-page-wrap">
        <HeaderEleven transparent={headerTransparent} />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>{children}</main>
            <FooterFour />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

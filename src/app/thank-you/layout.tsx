import React from "react";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { createMetadata } from "@/utils/metadata";
import { Metadata } from "next";

const baseMetadata: Metadata = {
    title: "Thank You | Biztal Box",
    description:
      "Thank you for contacting Biztal Box. We appreciate your interest and will get back to you shortly.",
  };
  
  export const metadata = createMetadata(baseMetadata, "/thank-you");

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            {children}

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
} 
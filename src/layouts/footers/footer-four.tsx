import React from "react";
import SocialLinks from "@/components/social/SocialLinks";

export default function FooterFour({ background }: { background?: string }) {
  return (
    <footer>
      <div
        className={`tp-footer-3-area ${
          background ? "black-bg" : "dark-bg"
        } pt-10`}
      >
        <div className="container">
          <div className="row">
            <div className="">
              <div className="tp-footer-3-widget text-center">
                <div className="tp-footer-3-logo-box">
                  <SocialLinks variant="dark-footer" className="mb-10" />
                  <p className="tp-footer-3-copyright">
                    © biztalbox {new Date().getFullYear()} | All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

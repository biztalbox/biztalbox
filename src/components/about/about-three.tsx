import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from "@/assets/img/home-03/about/ab-shape-img.png";
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Who we are
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                At Biztal, we don’t just build a brand’s reputation
                <span className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                  <br /> — we set brands ablaze.
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom">
                {/* In a world where attention is the new currency and online competition is fierce, it’s survival of the fittest. So whether you’re a startup or a recognized organization, we’ve got you covered.  */}
              </p>
              <p className="mb-45 tp_fade_bottom">
                We understand a brand’s goals and ideas to the finest detail by
                immersing ourselves in its unique vision. By brainstorming
                creative solutions, we improve visibility and ensure that every
                interaction with your audience leaves a memorable mark.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about">
               About Us
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

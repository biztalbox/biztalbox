'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import EyeBall from "../ashish/EyeBall";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                {/* <EyeBall /> */}
                <span></span>
              </div>
              {/* <h4 className="tp-hero-3-title"> */}
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">{"biztalbox"}</span><br/>
                <span className="tp-reveal-line"> Boost your brand with us! </span>
              </h4>
              <h1 className="tp-hero-3-category tp_reveal_anim">
             Expert digital marketing, SEO, and web development tailored for your success.
              </h1>
              <Link className="tp-btn-black-2" href="/contact">
                Say Hello{" "}
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

import React, { CSSProperties } from "react";
import Image from "next/image";
// images
import hero_star from "@/assets/img/home-04/hero/hero-star.png";
import hero_star_2 from "@/assets/img/home-04/hero/hero-star-2.png";
import hero_img from "@/assets/img/home-04/hero/hero-1.jpg";
import { RightArrow } from "../svg";

// imgStyle
const imgStyle: CSSProperties = { height: "auto" };
export default function HeroBannerThree() {
  return (
    <div className="tp-hero-4-area tp-btn-trigger">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-4-content-wrap">
              <div className="p-relative">
                <div className="tp-hero-4-content p-relative col-md-9">
                  <h1 className="text-white tp-char-animation">
                    Professional SEO Agency in <br/> Indianapolis
                  </h1>
                  <p>
                    Getting clicks is easy; turning them into clients is an art.
                    At Biztalbox, we combine data, creativity, and local
                    insights to make your Indianapolis business impossible to
                    ignore online.
                  </p>
                  <p>As a premier Indiana SEO agency we
                    incorporate significant industry expertise to ensure your
                    organization is visible and memorable. Our customized
                    strategy will generate real growth and future value
                    regardless of whether you&apos;re an established business
                    downtown or a startup in Broad Ripple.
                  </p>
                  <div className="tp-hero-4-text tp_fade_right">
                    <span>
                      <Image
                        className="tp-zoom-in-out"
                        src={hero_star}
                        alt="star"
                      />
                    </span>
                    {/* <p>Drive Traffic & Grow Sales</p> */}
                  </div>
                </div>
                <div className="tp-hero-4-achievement tp-btn-bounce d-none d-md-block">
                  <div className="tp-hero-4-star-1">
                    <Image
                      className="tp-zoom-in-out"
                      src={hero_star_2}
                      alt="star"
                    />
                  </div>
                  <div className="tp-hero-4-star-2">
                    <Image
                      className="tp-zoom-in-out-2"
                      src={hero_star_2}
                      alt="star"
                    />
                  </div>
                  <span>
                    <i
                      data-purecounter-duration="1"
                      data-purecounter-end="18"
                      className="purecounter"
                    >
                      12
                    </i>
                    k+
                  </span>
                  <p>
                    Projects completed <br /> successfully
                  </p>
                  {/* <div className="tp-footer-2-widget-newslatter">
                    <h4 className="tp-footer-2-widget-title">
                      Get a call back
                    </h4>
                    <form action="#">
                      <div className="tp-footer-2-input p-relative">
                        <input type="text" placeholder="Mobile No..." />
                        <button>
                          <RightArrow />
                        </button>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

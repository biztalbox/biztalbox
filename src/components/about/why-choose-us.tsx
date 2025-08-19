import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import shape from '@/assets/img/inner-about/about/shape-1.png';

export default function WhyChooseUs() {
  return (
    <div className="ab-about-area pb-90 z-index-5 why_choose_us_wrapper pt-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-about-content p-relative mt-80">   {/* add this class for animation tp_fade_bottom */}
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap">
              We believe every brand without a voice is just a name — and we&apos;re here to make yours heard! No shortcuts or gimmicks, just pure creativity and authentic marketing.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box tp_fade_bottom ab-2-about-title-style p-relative">
                  <h4 className="ab-about-category-title">
                    Why Choose Us <br />
                    <span>Helping you survive the Internet Jungle</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="tp_fade_bottom">
                    <div className="ab-about-category-list category-space-1">
                      {/* <span className="ab-about-category-title mb-30">
                        WHAT I DO
                      </span> */}
                      <ul>
                        <li><b>No Ifs and Buts</b>: We ensure every click turns into customers.</li>
                        <li><b>Experts Who Get It</b>: SEO and Social Media? It&apos;s the air we breathe.</li>
                        <li><b>Bespoke Marketing Solutions</b>: No dull and generic strategies.</li>
                        <li><b>No Fluff, Just Facts</b>: We’re here round the clock!</li>
                        <li><b>24/7 Availability</b>: Data-driven results and tangible growth.</li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-xl-6 col-lg-6 col-md-6 mb-40 tp_fade_bottom">
                    <div className="ab-about-category-list category-space-2">
                      <span className="ab-about-category-title mb-30">
                        Awards
                      </span>
                      <ul>
                        <li>Best Web Design 2019</li>
                        <li>Site of the Day 2021</li>
                        <li>Best Color Sensation 2021</li>
                        <li>UI Trend Winner 2020</li>
                        <li>Site of the Month 2022</li>
                      </ul>
                    </div>
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

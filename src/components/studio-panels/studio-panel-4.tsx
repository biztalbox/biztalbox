'use client';
import React from "react";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import CounterTwo from "../counter/counter-two";
import { NextArrow, PrevArrow } from "../svg";
import shape from "@/assets/img/home-08/testimonial/test-1.png";
import logo from "@/assets/img/home-08/testimonial/test-logo-1.png";

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  autoplay: true,
  navigation: {
    prevEl: ".tp-studio-prev",
    nextEl: ".tp-studio-next",
  },
};

// testimonial data
const testimonial_data = [
  {
    id: 1,
    logo: logo,
    name: "Sarah M.",
    designation: "Local Retailer",
    desc: `"We were buried on page three before working with Biztalbox. Within months, our site started showing up for searches that actually mattered. The extra traffic from Indianapolis alone has been a game-changer for our sales pipeline."`,
  },
  {
    id: 2,
    logo: logo,
    name: "James R.",
    designation: "SaaS Founder",
    desc: `"If I had to single out one thing that stood out to me the most, it was how the team at Biztalbox explained everything without jargon. Our team now has a clear understanding of what drivers leads to our success. It's refreshing to work with an organization who acts like a partner and truly cares about our growth as much as we do."`,
  },
  {
    id: 3,
    logo: logo,
    name: "Linda T.",
    designation: "Small Business Owner",
    desc: `"I run a small plumbing business, and I honestly thought SEO was just for big companies. Biztalbox proved me wrong. Now my phone rings every week with new leads from nearby customers."`,
  },
  {
    id: 4,
    logo: logo,
    name: "Daniel P.",
    designation: "Marketing Director",
    desc: `"The transparency blew me away. Every report showed what was working and where we could improve. We’ve seen steady growth month after month—no shady shortcuts, just solid strategy."`,
  },
  {
    id: 5,
    logo: logo,
    name: "Priya K.",
    designation: "Café Owner",
    desc: `"Being a new café in Indianapolis, we needed people to find us quickly. Biztalbox got us showing up in Google Maps searches almost immediately. We see more foot traffic and regulars now than ever before."`,
  },
];

// prop type
type IProps = {
  style_2?: boolean;
}
export default function StudioPanelFour({style_2=false}: IProps) {
  return (
    <div className={`${style_2?'':'panel-2 tp-studio-height'}`}>
      <div className={`tp-studio-testimonial-area tp-studio-plr black-bg p-relative fix tp-studio-testimonial-xs-space ${style_2?'tm-testimonial-height':'tp-studio-height'}`}>
        <div className="tp-studio-testimonial-title-box d-none d-md-block">
          <h4 className="tp-studio-testimonial-title">What Our Clients Say</h4>
        </div>
        <div className="container container-1330">
          <div className="tp-studio-funfact-wrap">
            {/* counter area */}
            <CounterTwo />
            {/* counter area */}
          </div>
          <div className="tp-studio-testimonial-wrap pt-120">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="tp-studio-testimonial-shape">
                  <Image src={shape} alt="shape" style={{height:"auto"}} />
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <div className="tp-studio-testimonial-top-title">
                  <span>Testimonials:</span>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-9">
                <div className="tp-studio-testimonial-wrapper">
                  <div className="tp-studio-testimonial-slider-wrap p-relative">
                    <Swiper
                      {...slider_setting}
                      modules={[Navigation]}
                      className="swiper-container tp-studio-testimonial-active fix"
                    >
                      {testimonial_data.map((item, i) => (
                        <SwiperSlide key={item.id}>
                          <div className="tp-studio-testimonial-item">
                            <div className="tp-studio-testimonial-text">
                              <p style={{fontSize: "25px"}}>{item.desc}</p>
                            </div>
                            <div className="tp-studio-testimonial-user-info-box d-flex align-items-center">
                              <div className="tp-studio-testimonial-user-info">
                                <h4 className="tp-studio-testimonial-user-name">
                                  {item.name}
                                </h4>
                                <span>{item.designation}</span>
                              </div>
                              <div className="tp-studio-testimonial-line d-none d-md-block">
                                <span></span>
                              </div>
                              {/* <div className="tp-studio-testimonial-logo">
                                <Image src={item.logo} alt="logo" />
                              </div> */}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="tp-studio-testimonial-arrow">
                      <button className="tp-studio-prev">
                        <span>
                          <PrevArrow />
                        </span>
                      </button>
                      <button className="tp-studio-next">
                        <span>
                          <NextArrow />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";

import port_1 from "@/assets/img/services/ALGANIX.webp";
import port_2 from "@/assets/img/services/CAPTAIN_CUT.webp";
import port_3 from "@/assets/img/services/WEBDEV.webp";
import port_4 from "@/assets/img/services/seo.webp";
import port_5 from "@/assets/img/services/VECTOR.webp";
import port_6 from "@/assets/img/services/CONTENT.webp";
import port_7 from "@/assets/img/services/social.webp";
import port_8 from "@/assets/img/services/GOOGLE_ADS.webp";
import port_9 from "@/assets/img/services/META.webp";
import port_10 from "@/assets/img/services/app_dev.webp";

import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_4,
    // img_2: port_4,
    title: "SEO",
    desc: "Search Engine Optimization (SEO) is the key to make sure your website stands out digitally. It enhances your website for search engines, resulting in improved ranks and increased visibility.",
    slug:"best-seo-agency",
    alt:" SEO expert analyzing website performance at a USA-based agency"
  },
  {
    id: 2,
    // img_1: port_6,
    img_2: port_7,
    title: "Social Media",
    desc: "Social media Marketing is the digital arena where brands connect, captivate, and communicate with their audience.",
    slug: "social-media-marketing",
    alt:"Social media marketing team creating content strategy at a US agency"
  },
  {
    id: 3,
    img_1: port_3,
    // img_2: port_6,
    title: "Web Development",
    desc: "A Web Development is a digital architect who builds, optimizes, and secures seamless websites.",
    slug: "website-development",
    alt:" Professional web development team working in a USA-based agency office"
  },
  {
    id: 4,
    // img_2: port_6,
    img_2: port_10,
    title: "App Development",
    desc: "An App Developer is a mobile maestro who builds the next killer app and delivers unparalleled performance to keep users coming back for more.",
    slug: "app-development",
    alt:"USA-based app development team collaborating on a mobile project"
  },
  {
    id: 5,
    img_1: port_1,
    // img_2: port_2,
    title: "Analysis Algorithm",
    desc: "An algorithm is a precision powerhouse that can instantly analyse vast amount of data to find hidden patterns and insights.",
    slug: "analysis-algorithm",
    alt:"Data analysis algorithm designed by a USA-based tech agency"
  },
  {
    id: 6,
    // img_1: port_3,
    img_2: port_2,
    title: "Motion Graphics",
    desc: "A video editing is a multimedia guru who turns in raw footage into cinematic masterpieces.",
    slug: "motion-graphics",
    alt:"Motion graphics animation created by a USA-based design agency"
  },
  {
    id: 7,
    img_1: port_5,
    // img_2: port_2,
    title: "Graphic Designing",
    desc: "A graphic designing is a creative force that turns concepts into recognised piece of art.",
    slug: "graphic-designing",
    alt:"Creative graphic design services by a USA-based design agency"
  },
  {
    id: 8,
    // img_1: port_3,
    img_2: port_6,
    title: "Copy Writing",
    desc: "Content creation combines crafting high-quality, SEO-optimized material that engages users and search engines.",
    slug: "content-marketing",
    alt:" SEO copywriting services provided by a USA-based marketing agency"
  },
  {
    id: 9,
    img_1: port_8,
    // img_1: port_7,
    title: "Performance Marketing",
    desc: "Google Ads is a versatile tool that makes every click an instant hit. It improves return on investment (ROI) and generates high-value leads through strategic bidding.",
    slug: "google-ads-service",
    alt:"Experts in PPC and performance marketing working at a USA agency"
  },
  {
    id: 10,
    // img_2: port_2,
    img_2: port_9,
    title: "Meta Ads",
    desc: "Throughout its ecosystem, Meta Ads creates visually striking ads with precise targeting, turning it into a digital powerhouse.",
    slug: "facebook-ads-service",
    alt:" Meta Ads campaign setup by a USA-based performance marketing agency"
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-3-area ${
        style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"
      }`}
    >
      <div className="container container-1720 overflow-hidden">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Our <span>Services</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/services"
                  >
                    <span className="zikzak-content">
                      See <br /> All Services
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      {item.img_1 && (
                        <Image
                          src={item.img_1}
                          alt={item.alt}
                          style={{ height: "auto" }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <h4 className="tp-project-3-title-sm">
                        {item.title}
                      </h4>
                      <span className="tp-project-3-meta">{item.desc} </span>
                      <Link
                        className="tp-btn-project-sm"
                        href={`/${item.slug}`}
                      >
                        View More
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      {item.img_2 && (
                        <Image
                          src={item.img_2}
                          alt="port-img"
                          style={{ height: "auto" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

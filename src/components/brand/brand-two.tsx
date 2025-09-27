import React from "react";
import Image from "next/image";
import { Leaf } from "../svg";
// images
import b_1 from "@/assets/partners/google.webp";
import b_2 from "@/assets/partners/meta.webp";
import b_3 from "@/assets/partners/clutch.webp";
import b_4 from "@/assets/partners/digital.webp";
import b_5 from "@/assets/partners/hubspot.webp";
import b_6 from "@/assets/partners/microsoft.webp";
import b_7 from "@/assets/partners/seo.webp";
import b_8 from "@/assets/partners/designrush.webp";

// brand_data
const brand_data = [
  {
    id: 1,
    brand: b_1,
    texts: [
      "Google Partner",
      "Google Partner",
      "Google Partner",
      "Google Partner",
    ],
  },
  {
    id: 2,
    brand: b_2,
    texts: [
      "Meta Ads Partner",
      "Meta Ads Partner",
      "Meta Ads Partner",
      "Meta Ads Partner",
    ],
  },
  {
    id: 3,
    brand: b_3,
    texts: [
      "Clutch Partner",
      "Clutch Partner",
      "Clutch Partner",
      "Clutch Partner",
    ],
  },
  {
    id: 4,
    brand: b_4,
    texts: [
      "Digital Agency Network",
      "Digital Agency Network",
      "Digital Agency Network",
      "Digital Agency Network",
    ],
  },
  {
    id: 5,
    brand: b_5,
    texts: [
      "Hubspot Partner",
      "Hubspot Partner",
      "Hubspot Partner",
      "Hubspot Partner",
    ],
  },
  {
    id: 6,
    brand: b_6,
    texts: [
      "Microsoft Partner",
      "Microsoft Partner",
      "Microsoft Partner",
      "Microsoft Partner",
    ],
  },
  {
    id: 7,
    brand: b_7,
    texts: [
      "Top 10 SEO Company",
      "Top 10 SEO Company",
      "Top 10 SEO Company",
      "Top 10 SEO Company",
    ],
  },
  {
    id: 8,
    brand: b_8,
    texts: [
      "Designrush Partner",
      "Designrush Partner",
      "Designrush Partner",
      "Designrush Partner",
    ],
  },
];

// brand items
export function BrandItems() {
  return (
    <>
      {brand_data.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
          <div className="tp-brand-4-item p-relative" style={{padding: "0", height: "auto"}}>
            <Image src={item.brand} alt="brand" style={{ height: "auto" }} />
            <div className="tp-brand-4-line-text d-flex align-items-center">
              {item.texts.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const BrandTwo = () => {
  return (
    <div
      className="tp-brand-4-area grey-bg-3"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)", padding: "80px 0" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Our Clients
              </span>
              <h4 className="tp-section-title-40 font-style-2">
                We love to work with clients to develop unique, innovative
                websites.
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <BrandItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;

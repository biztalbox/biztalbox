import React from "react";
import Image from "next/image";
import { CloseTwo, Facebook, InstagramTwo, Linkdin, Twitter } from "../svg";

// images
import logo_white from "@/assets/img/logo/white.png";
// import black_logo from "@/assets/img/logo/black.png";
import port_1 from "@/assets/img/services/seo.webp";
import port_2 from "@/assets/img/services/social.webp";
import port_3 from "@/assets/img/services/WEBDEV.webp";
import port_4 from "@/assets/img/services/CAPTAIN_CUT.webp";
import port_5 from "@/assets/img/services/VECTOR.webp";
import port_6 from "@/assets/img/services/CONTENT.webp";
import port_7 from "@/assets/img/services/GOOGLE_ADS.webp";
import port_8 from "@/assets/img/services/META.webp";
import port_9 from "@/assets/img/services/ALGANIX.webp";
import MobileMenus from "./mobile-menus";
import Link from "next/link";

const gallery_images = [
  { img: port_1, slug: "best-seo-agency" },
  { img: port_2, slug: "social-media-marketing" },
  { img: port_3, slug: "website-development" },
  { img: port_4, slug: "motion-graphics" },
  { img: port_5, slug: "graphic-designing" },
  { img: port_6, slug: "content-marketing" },
  { img: port_7, slug: "google-ads-service" },
  { img: port_8, slug: "facebook-ads-service" },
  { img: port_9, slug: "analysis-algorithm" },
];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({
  openOffcanvas,
  setOpenOffcanvas,
}: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="/">
                <Image src={logo_white} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
          <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Services</h3>
            </div>
            
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href={`/${item.slug}`}>
                        <Image
                          src={item.img}
                          alt="gallery-img"
                          width={100}
                          height={100}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Get in Touch</h3>

              <ul>
                <li>
                  <Link href="tel:9485699709">+91 9485699709</Link>
                </li>
                <li>
                  <Link href="mailto:info@biztalbox.com">
                    info@biztalbox.com
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    A-11, 2nd Floor, sector 8 Dwarka, New Delhi 110077
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/BiztalBox"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/biztalbox"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <InstagramTwo />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://x.com/BiztalBox"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/biztalbox"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Linkdin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}

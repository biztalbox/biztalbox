import React from "react";
import Image from "next/image";
import LineTextThree from "@/components/line-text/line-text-3";
import logo from "@/assets/img/logo/white.png";
import { RightArrow } from "@/components/svg";
import Link from "next/link";

export default function FooterThree() {
  return (
    <footer>
      <div
        className="tp-footer-4-area black-bg pt-70 pb-120"
        style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <LineTextThree />
            </div>
          </div>
        </div>
        <div className="container container-1480">
          <div className="tp-footer-4-top">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-left">
                  <p>
                    Have a project in mind? <br /> Let’s work together!
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-right text-start text-md-end">
                  <Link className="tp-btn-white-lg" href="/contact">
                    {"Let's"} Talk!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tp-footer-2-area black-bg pb-20"
        style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/">
                    <Image src={logo} alt="" />
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text">
                  <p>
                    Igniting your brand&apos;s potential with out-of-the-box
                    Marketing Solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href=".about">About</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a
                      href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                      target="_blank"
                    >
                      A-11, 2nd Floor, sector 8 Dwarka 110077 New Delhi
                    </a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="tel:+919485699709">P: +91 9485699709</a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="mailto:info@biztalbox.com">
                      E: info@biztalbox.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Follow Us On Social Media
                  </h4>
                  <div className="tp-footer-3-social mb-20">
                    <a href="https://x.com/BiztalBox" target="_blank">
                      <i className="fa-brands fa-x"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/BiztalBox"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/biztalbox"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/biztal"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://m.youtube.com/@biztalboxofficial"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg"
        style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="tp-copyright-2-left text-center text-lg-start">
              <p className="tp-footer-3-copyright text-center">
                © biztalbox {new Date().getFullYear()} | All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white.png";
import logo_2 from "@/assets/img/logo/logo.png";
import { RightArrow } from "@/components/svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false,topCls='footer-top' }: IProps) {
  return (
    // <footer className={`${topCls}`}>
    //   <div
    //     className={`tp-footer-2-area pt-100 pb-20 ${
    //       whiteFooter ? "tp-footer-white" : "black-bg"
    //     }`}
    //   >
    //     <div className="container container-1480">
    //       <div className="row">
    //         <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
    //           <div className="tp-footer-2-widget footer-col-2-1">
    //             {!whiteFooter && (
    //               <div className="tp-footer-2-widget-logo">
    //                 <Link href="/">
    //                   <Image src={logo} alt="logo" />
    //                 </Link>
    //               </div>
    //             )}
    //             {whiteFooter && (
    //               <div className="tp-footer-2-widget-logo tp-footer-dark">
    //                 <Link className="logo-1" href="/">
    //                   <Image src={logo_2} alt="logo" />
    //                 </Link>
    //                 <Link className="logo-2" href="/">
    //                   <Image src={logo} alt="logo" />
    //                 </Link>
    //               </div>
    //             )}
    //             <div className="tp-footer-2-widget-text">
    //               <p>
    //                 Drop us a line sed id semper <br /> risus in hend rerit.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
    //           <div className="tp-footer-2-widget footer-col-2-2">
    //             <div className="tp-footer-2-widget-menu">
    //               <h4 className="tp-footer-2-widget-title">Sitemap</h4>
    //               <ul>
    //                 <li><a href="#">Home</a></li>
    //                 <li><a href="#">About</a></li>
    //                 <li><a href="#">Contact</a></li>
    //                 <li> <a href="#">Blog</a></li>
    //                 <li><a href="#">Landing</a></li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
    //           <div className="tp-footer-2-widget footer-col-2-3">
    //             <h4 className="tp-footer-2-widget-title">Office</h4>
    //             <div className="tp-footer-2-contact-item">
    //               <span>
    //                 <a
    //                   href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
    //                   target="_blank"
    //                 >
    //                   740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK
    //                 </a>
    //               </span>
    //             </div>
    //             <div className="tp-footer-2-contact-item">
    //               <span>
    //                 <a href="tel:+725214456">P: + 725 214 456</a>
    //               </span>
    //             </div>
    //             <div className="tp-footer-2-contact-item">
    //               <span>
    //                 <a href="mailto:contact@liko.com">E: contact@liko.com</a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
    //           <div className="tp-footer-2-widget footer-col-2-4">
    //             <div className="tp-footer-2-widget-newslatter">
    //               <h4 className="tp-footer-2-widget-title">
    //                 Subscribe to our newsletter
    //               </h4>
    //               <form action="#">
    //                 <div className="tp-footer-2-input p-relative">
    //                   <input type="text" placeholder="Enter your email..." />
    //                   <button>
    //                     <RightArrow clr={whiteFooter?"currentcolor":'#F3F3F4'}/>
    //                   </button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
    //       whiteFooter ? "tp-copyright-white" : "black-bg"
    //     }`}
    //   >
    //     <div className="container container-1480">
    //       <div className="row align-items-center">
    //         <div className="col-xl-4 col-lg-5">
    //           <div className="tp-copyright-2-left text-center text-lg-start">
    //             <p>
    //               All rights reserved — {new Date().getFullYear()} © Themepure
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-8 col-lg-7">
    //           <div className="tp-copyright-2-social text-center text-lg-end">
    //             <a className="mb-10" href="#">Linkedin</a>
    //             <a className="mb-10" href="#">Twitter</a>
    //             <a className="mb-10" href="#">Instagram</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <!-- footer area end --> */}
    // </footer>
    <footer>
    <div className="tp-footer-3-area black-bg pt-40">
      <div className="container">
        <div className="row">
          {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
            <div className="tp-footer-3-widget-wrapper footer-col-3-1">
              <div className="tp-footer-3-widget mb-40">
                <h4 className="tp-footer-3-title">Website map</h4>
                <div className="tp-footer-3-menu">
                  <ul>
                    <li><a href="/home-4">Home</a></li>
                    <li><a href="/about-us">About</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="tp-footer-3-widget">
                <h4 className="tp-footer-3-title">Newsletter</h4>
                <div className="tp-footer-3-input-box d-flex align-items-center">
                  <input type="text" placeholder="Enter Address..." />
                  <button className="tp-footer-3-btn p-relative">
                    <span className="icon-1">
                      <RightArrow clr='#19191A' />
                    </span>
                    <span className="icon-2">
                      <SvgBgSm/>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="">
            <div className="tp-footer-3-widget text-center">
              <div className="tp-footer-3-logo-box">
                {/* <p className="mb-100">
                  Drop us a line sed id semper <br />
                  risus in hend rerit.
                </p>
                <Link className="tp-footer-3-logo p-relative" href="/">
                  <Image src={logo} alt="logo" />
                </Link> */}
                <div className="tp-footer-3-social mb-20">
                  <a href="https://x.com/BiztalBox" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://www.facebook.com/BiztalBox" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/biztalbox" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/company/biztal" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://m.youtube.com/@biztalboxofficial" target='_blank'><i className="fa-brands fa-youtube"></i></a>
                </div>
                <p className="tp-footer-3-copyright">
                © biztalbox {new Date().getFullYear()} | All rights reserved
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
            <div className="tp-footer-3-widget-wrapper footer-col-3-3">
              <div className="tp-footer-3-widget mb-30">
                <h4 className="tp-footer-3-title">Contact</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                    target="_blank">740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK</a>
                    </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>P: <a href="tel:+725214456">+ 725 214 456</a></span>
                  <span>E: <a href="mailto:contact@liko.com">contact@liko.com</a></span>
                </div>
              </div>
              <div className="tp-footer-3-widget">
                <h4 className="tp-footer-3-title">Follow</h4>
                <div className="tp-footer-3-social">
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

  </footer>
  );
}

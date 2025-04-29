import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import ParticleComponent from "../ParticleComponent";
import Link from "next/link";
import { useEffect } from "react";


export default function AboutUsHero() {
    const scrollTo = () => {
      scroller.scrollTo("about-info", {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuint",
        offset: -50, // Offset to account for any fixed headers
        spy: true,
      });
    };

    // Enable smooth scrolling behavior on all devices
    useEffect(() => {
      // Set CSS scroll behavior for the entire page
      document.documentElement.style.scrollBehavior = "smooth";
      
      // Clean up when component unmounts
      return () => {
        document.documentElement.style.scrollBehavior = "";
      };
    }, []);

  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative dark-bg partcle_bg "
      // id="tsparticles"
      style={{
        position: "relative",
        willChange: "transform", // Performance optimization hint
      }}
    >
      <ParticleComponent />
      <div className="breadcrumb-site d-none">
        <h1>About Us</h1>
      </div>
      <div className="ab-inner-hero-scroll smooth"
        style={{ 
          transition: "all 0.3s ease",
          cursor: "pointer",
          touchAction: "manipulation", // Improves touch response
         }}>
        <a className="pointer" onClick={scrollTo} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollTo()}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                Creative <br /> Digital Agency
              </span>
              <h1 className="ab-inner-hero-title">
                About Us
              </h1>
              <p>
              Biztal Box is a marketing agency that enhances brands&apos; online presence through a range of services including SEO optimization, web development, graphic design, and more. Our dynamic agency crafts strategies that stick while bringing every client&#39; unique perspective to life.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>Unleashing heroic strategies for legendary growth</p>
              <Link className="tp-btn-white-sm border-style" href="/services">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

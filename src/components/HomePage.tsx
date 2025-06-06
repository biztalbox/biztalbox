"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import "../app/mobile-performance.css";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import ProjectFour from "@/components/project/project-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import WhyChooseUs from "@/components/about/why-choose-us";
import HeaderEleven from "@/layouts/headers/header-eleven";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useScrollSmooth();
  
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    
    // Check if device is mobile
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isIOS || isMobileDevice);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // Apply lighter animations for mobile devices
      if (isMobile) {
        // Apply only essential animations with reduced complexity
        fadeAnimation(true);
      } else {
        // Apply all animations for desktop
        fadeAnimation(false);
        revelAnimationOne();
        projectThreeAnimation();
        ctaAnimation();
        textInvert();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <Wrapper>

      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            {/* <GalleryOne /> */}
            {/* gallery area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* brand area start */}
            {/* <BrandThree /> */}
            {/* brand area end */}

            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

            {/* video area start */}
            {/* <VideoThree /> */}
            {/* video area end */}

            {/* service area start */}
            {/* <ServiceFour /> */}
            <WhyChooseUs />
            {/* service area end */}

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;

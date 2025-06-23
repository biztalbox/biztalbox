"use client";
import { gsap } from "gsap";
import React, { useEffect, useState, useRef } from "react";
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [componentsLoaded, setComponentsLoaded] = useState<number>(0);
  const loadingRef = useRef<HTMLDivElement>(null);
  
  // Total number of main components to wait for
  const totalComponents = 8; // HeaderEleven, HeroBannerFour, GalleryOne, AboutThree, ProjectFour, WhyChooseUs, ContactOne, FooterFour
  
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

  // Check if all components are loaded
  useEffect(() => {
    if (componentsLoaded >= totalComponents) {
      // Add a small delay to ensure smooth transition
      const hideLoader = setTimeout(() => {
        if (loadingRef.current) {
          loadingRef.current.style.opacity = '0';
          loadingRef.current.style.transition = 'opacity 0.5s ease-out';
          
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
      }, 800); // Wait a bit longer to ensure everything is rendered
      
      return () => clearTimeout(hideLoader);
    }
  }, [componentsLoaded, totalComponents]);

  // Simulate component loading completion
  useEffect(() => {
    // Simulate individual component loading
    const loadingTimers = [
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 200),
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 400),
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 600),
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 800),
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 1000),
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 1200),
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 1400),
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 1600),
    ];
    
    return () => {
      loadingTimers.forEach(timer => clearTimeout(timer));
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
    <>
      {/* Loading UI */}
      {isLoading && (
        <div 
          ref={loadingRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          {/* Loading Spinner */}
          <div 
            style={{
              width: '50px',
              height: '50px',
              border: '3px solid #333',
              borderTop: '3px solid #fff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: '20px'
            }}
          />
          
          {/* Loading Text */}
          <div 
            style={{
              color: '#fff',
              fontSize: '18px',
              fontWeight: '500',
              marginBottom: '10px'
            }}
          >
            Loading...
          </div>
          
          {/* Progress Bar */}
          <div 
            style={{
              width: '200px',
              height: '4px',
              backgroundColor: '#333',
              borderRadius: '2px',
              overflow: 'hidden'
            }}
          >
            <div 
              style={{
                width: `${Math.min((componentsLoaded / totalComponents) * 100, 100)}%`,
                height: '100%',
                backgroundColor: '#fff',
                transition: 'width 0.3s ease-out'
              }}
            />
          </div>
          
          {/* Progress Text */}
          <div 
            style={{
              color: '#ccc',
              fontSize: '14px',
              marginTop: '10px'
            }}
          >
            {Math.min(Math.round((componentsLoaded / totalComponents) * 100), 100)}%
          </div>
        </div>
      )}

      {/* Add keyframe animation for spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

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
              <GalleryOne />
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
    </>
  );
};

export default HomePage;

"use client";
import { gsap } from "gsap";
import React, { useEffect, useState, useRef } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { usePerformanceOptimization } from "@/hooks/use-performance-optimization";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import "../app/mobile-performance.css";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
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
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AshishCarousel from "./AshishCarousel";

/**
 * Loader timing — बढ़ाने से लोडर ज़्यादा देर तक दिखेगा।
 * - `minVisibleFromMountMs`: mount से कम से कम इतनी ms तक (ready जल्दी हो तो बाकी wait)
 * - `holdAfterReadyMs`: technical ready के बाद extra इतनी ms
 */
const LOADER_DISPLAY = {
  minVisibleFromMountMs: 1200,
  holdAfterReadyMs: 350,
} as const;

const DarkHomePage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const mountAtRef = useRef<number | null>(null);
  if (mountAtRef.current === null) mountAtRef.current = Date.now();

  useEffect(() => {
    if (!showLoader) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [showLoader]);

  const animationInitializedRef = useRef<boolean>(false);
  
  // Use performance optimization hook
  const performanceConfig = usePerformanceOptimization();
  
  useScrollSmooth();
  
  // Add smooth scroll class to body
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);
  
  useEffect(() => {
    let cancelled = false;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const run = async () => {
      try {
        await (document as any).fonts?.ready;
      } catch {
        // ignore
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return;

          const mountAt = mountAtRef.current ?? Date.now();
          const readyAt = Date.now();
          const elapsed = readyAt - mountAt;
          const minStillNeeded = Math.max(
            0,
            LOADER_DISPLAY.minVisibleFromMountMs - elapsed
          );
          const hideDelay = Math.max(
            minStillNeeded,
            LOADER_DISPLAY.holdAfterReadyMs
          );

          hideTimer = setTimeout(() => {
            if (!cancelled) setShowLoader(false);
          }, hideDelay);
        });
      });
    };

    void run();

    return () => {
      cancelled = true;
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  // Optimized animation initialization with performance considerations
  useGSAP(() => {
    // Prevent multiple initializations
    if (animationInitializedRef.current) return;
    
    const timer = setTimeout(() => {
      // Apply optimized animations based on device and preferences
      if (performanceConfig.prefersReducedMotion) {
        // Skip all animations for users who prefer reduced motion
        return;
      }
      
      if (performanceConfig.isMobile || performanceConfig.isLowPowerMode) {
        // Mobile-optimized animations - only essential ones
        fadeAnimation(true);
        // Skip heavy animations on mobile for better performance
      } else {
        // Desktop animations with performance optimizations
        fadeAnimation(false);
        revelAnimationOne();
        projectThreeAnimation();
        ctaAnimation();
        textInvert();
      }
      
      animationInitializedRef.current = true;
    }, 50); // Reduced from 100ms
    
    return () => {
      clearTimeout(timer);
    };
  }, [performanceConfig]);

  return (
    <>
      {/* Performance Monitor (Development Only) */}
      {/* <PerformanceMonitor /> */}
      
      {/* Readiness-based Loader (no fake progress) */}
      {showLoader && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <img
            src="/assets/loader/black.gif"
            alt="Loading"
            style={{
              width: 120,
              height: 120,
              objectFit: "contain",
            }}
          />
        </div>
      )}

      <Wrapper>
        {/* header area start */}
        <HeaderEleven transparent={true} />
        {/* header area end */}

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>

              {/* hero area start */}
              <HeroBannerFour />
              {/* hero area end */}

              {/* gallery area start */}
              {/* <GalleryOne /> */}
              <AshishCarousel/>
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

export default DarkHomePage;

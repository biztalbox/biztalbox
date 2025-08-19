"use client";
import { gsap } from "gsap";
import React, { useEffect, useState, useRef, useCallback } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { usePerformanceOptimization } from "@/hooks/use-performance-optimization";
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
import PerformanceMonitor from "@/components/PerformanceMonitor";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [componentsLoaded, setComponentsLoaded] = useState<number>(0);
  const loadingRef = useRef<HTMLDivElement>(null);
  const animationInitializedRef = useRef<boolean>(false);
  
  // Use performance optimization hook
  const performanceConfig = usePerformanceOptimization();
  
  // Total number of main components to wait for
  const totalComponents = 8; // HeaderEleven, HeroBannerFour, GalleryOne, AboutThree, ProjectFour, WhyChooseUs, ContactOne, FooterFour
  
  useScrollSmooth();
  
  // Add smooth scroll class to body
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);
  
  // Optimized loading completion check
  useEffect(() => {
    if (componentsLoaded >= totalComponents) {
      // Reduced delay for better performance
      const hideLoader = setTimeout(() => {
        if (loadingRef.current) {
          loadingRef.current.style.opacity = '0';
          loadingRef.current.style.transition = 'opacity 0.3s ease-out';
          
          setTimeout(() => {
            setIsLoading(false);
          }, 300); // Reduced from 500ms
        }
      }, 400); // Reduced from 800ms
      
      return () => clearTimeout(hideLoader);
    }
  }, [componentsLoaded, totalComponents]);

  // Optimized component loading simulation
  useEffect(() => {
    // Faster component loading simulation
    const loadingTimers = [
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 100), // Reduced from 200ms
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 200), // Reduced from 400ms
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 300), // Reduced from 600ms
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 400), // Reduced from 800ms
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 500), // Reduced from 1000ms
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 600), // Reduced from 1200ms
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 700), // Reduced from 1400ms
      setTimeout(() => setComponentsLoaded(prev => prev + 1), 800), // Reduced from 1600ms
    ];
    
    return () => {
      loadingTimers.forEach(timer => clearTimeout(timer));
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
      
      {/* Optimized Loading UI */}
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
            transition: 'opacity 0.3s ease-out'
          }}
        >
          {/* Optimized Loading Spinner */}
          <div 
            style={{
              width: '50px',
              height: '50px',
              border: '3px solid #333',
              borderTop: '3px solid #fff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: '20px',
              willChange: 'transform' // Performance hint
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
                transition: 'width 0.2s ease-out' // Reduced from 0.3s
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

      {/* Optimized keyframe animation for spinner */}
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

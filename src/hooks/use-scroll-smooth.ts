"use client";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import { ScrollSmoother} from '@/plugins';
import { useGSAP } from "@gsap/react";

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const smootherRef = useRef<any>(null);
  
  useEffect(() => {
    // Check if running in browser
    if (typeof window === 'undefined') return;
    
    // Enhanced device detection
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTabletDevice = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/.test(userAgent);
      
      setIsMobile(isIOS || isMobileDevice);
      setIsTablet(isTabletDevice);
    };
    
    checkDevice();
    
    // Debounced resize listener
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDevice, 250);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);
  
  useGSAP(() => {
    // Check if running in browser
    if (typeof window === 'undefined') return;
    
    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth) {
      gsap.config({
        nullTargetWarn: false,
      });

      // Kill existing smoother if any
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }

      // Performance-optimized settings based on device
      if (isMobile) {
        // Mobile devices - minimal smoothing for better performance
        smootherRef.current = ScrollSmoother.create({
          smooth: 0.3, // Reduced from 0.5
          effects: false, // Disable effects on mobile for better performance
          smoothTouch: 0, // Disable smooth scrolling on touch devices
          normalizeScroll: false,
          ignoreMobileResize: true,
          preventDefault: false, // Allow native scroll behavior
          syncInterval: 60, // Sync at 60fps
        });
      } else if (isTablet) {
        // Tablet devices - moderate smoothing
        smootherRef.current = ScrollSmoother.create({
          smooth: 0.8, // Moderate smoothing
          effects: true,
          smoothTouch: 0,
          normalizeScroll: false,
          ignoreMobileResize: true,
          syncInterval: 60,
        });
      } else {
        // Desktop devices - full smoothing
        smootherRef.current = ScrollSmoother.create({
          smooth: 1.2, // Reduced from 2 for better performance
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: false,
          ignoreMobileResize: true,
          syncInterval: 60,
        });
      }
    }

    // Cleanup function
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [isMobile, isTablet, isScrollSmooth]);
}


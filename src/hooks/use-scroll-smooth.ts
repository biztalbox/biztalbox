"use client";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { ScrollSmoother} from '@/plugins';
import { useGSAP } from "@gsap/react";

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if the device is mobile/iPhone
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isIOS || isMobileDevice);
    };
    
    checkDevice();
    
    // Add resize listener to update device status if orientation changes
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  useGSAP(() => {
    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth) {
      gsap.config({
        nullTargetWarn: false,
      });

      if (isMobile) {
        // For mobile devices, especially iPhones, use native scrolling or very light smoothing
        ScrollSmoother.create({
          smooth: 0.5,
          effects: true,
          smoothTouch: 0, // Disable smooth scrolling on touch devices
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      } else {
        // Desktop settings
        ScrollSmoother.create({
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      }
    }
  }, [isMobile, isScrollSmooth]);
}

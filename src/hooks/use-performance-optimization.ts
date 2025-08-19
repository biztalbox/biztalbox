"use client";
import { useEffect, useRef, useCallback } from 'react';

interface PerformanceConfig {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  prefersReducedMotion: boolean;
  isLowPowerMode: boolean;
}

export const usePerformanceOptimization = () => {
  const configRef = useRef<PerformanceConfig>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    prefersReducedMotion: false,
    isLowPowerMode: false,
  });
  
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect device capabilities
  const detectDeviceCapabilities = useCallback(() => {
    if (typeof window === 'undefined') return;

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTabletDevice = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/.test(userAgent);
    
    const width = window.innerWidth;
    const isMobile = isIOS || isMobileDevice || width <= 768;
    const isTablet = isTabletDevice || (width > 768 && width <= 1024);
    const isDesktop = width > 1024;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check for low power mode (iOS)
    const isLowPowerMode = (navigator as any).connection?.effectiveType === 'slow-2g' || 
                          (navigator as any).connection?.effectiveType === '2g' ||
                          (navigator as any).connection?.effectiveType === '3g';

    configRef.current = {
      isMobile,
      isTablet,
      isDesktop,
      prefersReducedMotion,
      isLowPowerMode,
    };
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const { isMobile, prefersReducedMotion } = configRef.current;

    // Disable smooth scrolling for users who prefer reduced motion
    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = 'auto';
      return;
    }

    // Optimize for mobile devices
    if (isMobile) {
      // Use native smooth scrolling on mobile for better performance
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Add touch-action optimizations
      const style = document.createElement('style');
      style.textContent = `
        * {
          touch-action: manipulation;
        }
        .tp-smooth-scroll {
          -webkit-overflow-scrolling: touch;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Optimize animation performance
  const optimizeAnimationPerformance = useCallback(() => {
    const { isMobile, isTablet, prefersReducedMotion } = configRef.current;

    if (prefersReducedMotion) {
      // Disable all animations for users who prefer reduced motion
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
      return;
    }

    // Optimize animation performance based on device
    if (isMobile) {
      // Reduce animation complexity on mobile
      const style = document.createElement('style');
      style.textContent = `
        .tp_fade_bottom, .tp_fade_top, .tp_fade_left, .tp_fade_right {
          will-change: transform, opacity;
          transform: translateZ(0);
        }
        .gsap-split-word, .gsap-split-chars {
          will-change: transform;
          transform: translateZ(0);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    resizeTimeoutRef.current = setTimeout(() => {
      detectDeviceCapabilities();
      optimizeScrollPerformance();
      optimizeAnimationPerformance();
    }, 250);
  }, [detectDeviceCapabilities, optimizeScrollPerformance, optimizeAnimationPerformance]);

  useEffect(() => {
    detectDeviceCapabilities();
    optimizeScrollPerformance();
    optimizeAnimationPerformance();

    // Listen for preference changes
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handlePreferenceChange = () => {
      detectDeviceCapabilities();
      optimizeScrollPerformance();
      optimizeAnimationPerformance();
    };

    reducedMotionQuery.addEventListener('change', handlePreferenceChange);
    window.addEventListener('resize', handleResize);

    return () => {
      reducedMotionQuery.removeEventListener('change', handlePreferenceChange);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [detectDeviceCapabilities, optimizeScrollPerformance, optimizeAnimationPerformance, handleResize]);

  return configRef.current;
};

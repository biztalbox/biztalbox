"use client";
import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fps: number;
  scrollPerformance: number;
  memoryUsage?: number;
  deviceType: string;
}

const PerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    fps: 0,
    scrollPerformance: 0,
    deviceType: 'unknown'
  });
  
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const scrollStartTimeRef = useRef(0);
  const scrollEndTimeRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTabletDevice = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/.test(userAgent);
    
    const width = window.innerWidth;
    let deviceType = 'desktop';
    
    if (isIOS || isMobileDevice || width <= 768) {
      deviceType = 'mobile';
    } else if (isTabletDevice || (width > 768 && width <= 1024)) {
      deviceType = 'tablet';
    }
    
    metricsRef.current.deviceType = deviceType;

    // FPS monitoring
    const measureFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      
      if (currentTime - lastTimeRef.current >= 1000) {
        metricsRef.current.fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
        
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', {
            fps: metricsRef.current.fps,
            scrollPerformance: metricsRef.current.scrollPerformance,
            deviceType: metricsRef.current.deviceType,
            memoryUsage: (performance as any).memory?.usedJSHeapSize / 1024 / 1024
          });
        }
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Scroll performance monitoring
    const handleScrollStart = () => {
      scrollStartTimeRef.current = performance.now();
    };

    const handleScrollEnd = () => {
      scrollEndTimeRef.current = performance.now();
      const scrollDuration = scrollEndTimeRef.current - scrollStartTimeRef.current;
      metricsRef.current.scrollPerformance = scrollDuration;
      
      // Log scroll performance issues
      if (scrollDuration > 16.67) { // More than 60fps threshold
        console.warn('Scroll performance issue detected:', {
          duration: scrollDuration,
          deviceType: metricsRef.current.deviceType,
          fps: metricsRef.current.fps
        });
      }
    };

    // Debounced scroll end detection
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollStartTimeRef.current === 0) {
        handleScrollStart();
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    };

    // Start monitoring
    requestAnimationFrame(measureFPS);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Memory monitoring (if available)
    if ((performance as any).memory) {
      setInterval(() => {
        metricsRef.current.memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024;
      }, 5000);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Only render in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 10000,
        pointerEvents: 'none',
      }}
    >
      <div>FPS: {metricsRef.current.fps}</div>
      <div>Scroll: {metricsRef.current.scrollPerformance.toFixed(2)}ms</div>
      <div>Device: {metricsRef.current.deviceType}</div>
      {metricsRef.current.memoryUsage && (
        <div>Memory: {metricsRef.current.memoryUsage.toFixed(1)}MB</div>
      )}
    </div>
  );
};

export default PerformanceMonitor;

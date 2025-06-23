"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import useScrollSmooth from "@/hooks/use-scroll-smooth";

interface ScrollPinImageProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollPinImage: React.FC<ScrollPinImageProps> = ({
  imageSrc,
  imageAlt,
  children,
  className = "",
}) => {
  useScrollSmooth();
  const [textHeight, setTextHeight] = useState<any>('auto');
  const [isClient, setIsClient] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    setIsClient(true);
    // Add a small delay to ensure proper hydration in production
    const hydrationTimer = setTimeout(() => {
      setIsHydrated(true);
    }, 300);
    
    return () => clearTimeout(hydrationTimer);
  }, []);

  useEffect(() => {
    // Force scroll to top on mount
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // Only proceed if we're on client, hydrated, and have all refs
    if (!isClient || !isHydrated || typeof window === 'undefined') return;
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Calculate proper height with buffer for all screen sizes
    const calculateHeight = () => {
      const textElement = textRef.current;
      if (!textElement) return 'auto';

      // Get viewport height
      const viewportHeight = window.innerHeight;
      
      // Use scrollHeight for more consistent measurements
      const textScrollHeight = textElement.scrollHeight;
      
      // Add buffer to ensure no content is cut off (10% of viewport height)
      const bufferHeight = Math.max(50, viewportHeight * 0.1);
      const calculatedHeight = textScrollHeight + bufferHeight;
      
      // Ensure minimum height is at least viewport height for small screens
      const finalHeight = Math.max(calculatedHeight, viewportHeight);
      
      console.log('Production Height Calc - Viewport:', viewportHeight, 'Text:', textScrollHeight, 'Final:', finalHeight);
      
      return finalHeight;
    };

    // Use multiple frames to ensure DOM is fully rendered and stable
    const stabilizeHeight = () => {
      let frameCount = 0;
      let lastHeight = 0;
      const maxFrames = 8; // Increased for production stability
      
      const checkHeight = () => {
        const currentHeight = calculateHeight();
        
        if (typeof currentHeight === 'number') {
          // If height is stable across frames or we've reached max frames
          if (Math.abs(currentHeight - lastHeight) < 10 || frameCount >= maxFrames) {
            setTextHeight(currentHeight);
            setIsCalculated(true);
            return;
          }
          
          lastHeight = currentHeight;
          frameCount++;
        }
        
        // Continue checking in next frame
        requestAnimationFrame(checkHeight);
      };
      
      // Start checking after a delay to ensure content is loaded (increased for production)
      setTimeout(() => {
        requestAnimationFrame(checkHeight);
      }, 500);
    };

    // Start the stabilization process
    stabilizeHeight();

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
    };
  }, [isClient, isHydrated]);

  // Separate effect for ScrollTrigger to ensure it runs after height calculation
  useEffect(() => {
    if (!isClient || !isHydrated || !isCalculated || typeof window === 'undefined') return;
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // Create the scroll trigger animation only after height is calculated
    const setupScrollTrigger = () => {
      if (window.innerWidth >= 1025) {
        // Kill any existing scroll triggers first
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }

        // Wait a bit more in production to ensure everything is ready
        setTimeout(() => {
          scrollTriggerRef.current = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "9% top",
            end: "bottom bottom",
            pin: imageRef.current,
            anticipatePin: 1,
            pinSpacing: true,
            scrub: true,
            markers: false,
            refreshPriority: 1,
            onUpdate: (self: ScrollTrigger) => {
              if (imageRef.current) {
                const scale = 1 - 0.2 * self.progress;
                const translateY = 3 * self.progress;
                gsap.to(imageRef.current, { 
                  scale: scale, 
                  yPercent: translateY, 
                  duration: 0.3, 
                  ease: "power1.out" 
                });
              }
            },
            onRefresh: () => {
              console.log('ScrollTrigger refreshed in production');
            }
          });

          // Force a refresh after creation
          ScrollTrigger.refresh();
        }, 200);
      }
    };

    setupScrollTrigger();

    // Recalculate height on window resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsCalculated(false);
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        }
        // Recalculate everything
        setTimeout(() => {
          if (textRef.current && sectionRef.current && imageRef.current) {
            const newHeight = calculateHeight();
            if (typeof newHeight === 'number') {
              setTextHeight(newHeight);
              setIsCalculated(true);
            }
          }
        }, 100);
      }, 500); // Increased debounce time for production
    };

    const calculateHeight = () => {
      const textElement = textRef.current;
      if (!textElement) return 'auto';
      const viewportHeight = window.innerHeight;
      const textScrollHeight = textElement.scrollHeight;
      const bufferHeight = Math.max(50, viewportHeight * 0.1);
      const calculatedHeight = textScrollHeight + bufferHeight;
      return Math.max(calculatedHeight, viewportHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [isClient, isHydrated, isCalculated]);

  return (
    <div ref={sectionRef} className={`project-details-1-area project-details-1-pt ${className}`}>
      <div className="container-fluid">
        <div className="row flex-xl-nowrap" style={{height: isClient && isHydrated && window.innerWidth >= 1025 && isCalculated ? textHeight : 'auto'}}>
          <div ref={imageRef} className="col-xl-5">
            <div className="project-details-1-left">
              <div className="project-details-1-thumb mb-10">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={900}
                  height={600}
                  className="h-auto m-auto d-block"
                  priority
                />
              </div>
            </div>
          </div>
          <div 
            ref={textRef} 
            className="col-xl-7 overflow-hidden hide-scrollbar" 
            style={{ 
              overflowY: 'auto', 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPinImage; 
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Make sure all refs are available
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // Get the height of the text content to determine scroll distance
    setTextHeight(textRef.current.offsetHeight);

    // Create the scroll trigger animation
    if (window.innerWidth >= 1025) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "8% top",
        end: "bottom bottom",
        pin: imageRef.current,
        anticipatePin: 1,
        pinSpacing: true,
        scrub: true,
        markers: false,
        onUpdate: (self: ScrollTrigger) => {
          const scale = 1 - 0.2 * self.progress;
          const translateY = 6 * self.progress;
          gsap.to(imageRef.current, { 
            scale: scale, 
            yPercent: translateY, 
            duration: 0.3, 
            ease: "power1.out" 
          });
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    }

    return () => {
      ScrollTrigger.getById("imagePin")?.kill();
    };
  }, [isClient]);

  return (
    <div ref={sectionRef} className={`project-details-1-area project-details-1-pt ${className}`}>
      <div className="container-fluid">
        <div className="row flex-xl-nowrap" style={{height: isClient && window.innerWidth >= 1025 ? textHeight : 'auto'}}>
          <div ref={imageRef} className="col-xl-5">
            <div className="project-details-1-left">
              <div className="project-details-1-thumb mb-10">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={900}
                  height={600}
                  className="h-auto m-auto d-block"
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
              msOverflowStyle: 'none'
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
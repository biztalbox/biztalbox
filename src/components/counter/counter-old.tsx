import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
// import CounterItem from "./counter-item";

// images
const marqueImages = [
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.png",
  "/clients/4.png",
  "/clients/5.png",
  "/clients/6.png",
  "/clients/7.png",
  "/clients/8.png",
  "/clients/9.png",
  "/clients/10.png",
  "/clients/11.png",
  "/clients/12.png",
  
];

// "/clients/13.png",
//   "/clients/14.png",
//   "/clients/15.png",
//   "/clients/16.png",
//   "/clients/17.png",
//   "/clients/18.png",
//   "/clients/19.png",
//   "/clients/20.png",
//   "/clients/21.png",
//   "/clients/22.png",
//   "/clients/23.png",
//   "/clients/24.png",
//   "/clients/25.png",
//   "/clients/26.png",
//   "/clients/27.png",

// Split array into two parts
const leftImages = marqueImages.slice(0, Math.ceil(marqueImages.length / 2));
const rightImages = marqueImages.slice(Math.ceil(marqueImages.length / 2));

function MarqueImage({ src }: { src: string }) {
  return (
    <Image 
      src={src} 
      alt="marque-img" 
      style={{ 
        height: "auto",
        willChange: "transform",
        transform: "translateZ(0)",
      }} 
      width={100} 
      height={100} 
      loading="eager"
      priority={true}
    />
  );
}

export default function CounterOld() {
  // Use state to store the animation duration based on screen size
  const [animDuration, setAnimDuration] = useState(45);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update animation duration based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Adjust animation speed based on screen width
      if (window.innerWidth < 768) {
        setAnimDuration(35); // Faster on mobile
      } else if (window.innerWidth < 1024) {
        setAnimDuration(40); // Medium speed on tablets
      } else {
        setAnimDuration(45); // Default speed on desktop
      }
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set up intersection observer to pause animations when not visible
  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center"
      style={{ 
        "--anim-duration": `${animDuration}s`,
        "--anim-play-state": isVisible ? "running" : "paused"
      } as React.CSSProperties}
    >
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        <div 
          className="slide-img-left" 
          style={{ 
            willChange: "transform", 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <div 
            className="box"
            style={{ 
              willChange: "transform", 
              animationDuration: "var(--anim-duration, 45s)",
              animationPlayState: "var(--anim-play-state, running)",
              transform: "translateZ(0)" 
            }}
          >
            {leftImages.map((src, index) => (
              <MarqueImage key={`left-1-${index}`} src={src} />
            ))}
          </div>
          <div 
            className="box"
            style={{ 
              willChange: "transform", 
              animationDuration: "var(--anim-duration, 45s)",
              animationPlayState: "var(--anim-play-state, running)",
              transform: "translateZ(0)" 
            }}
          >
            {leftImages.map((src, index) => (
              <MarqueImage key={`left-2-${index}`} src={src} />
            ))}
          </div>
        </div>
        <div 
          className="slide-img-right"
          style={{ 
            willChange: "transform", 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <div 
            className="box"
            style={{ 
              willChange: "transform", 
              animationDuration: "var(--anim-duration, 45s)",
              animationPlayState: "var(--anim-play-state, running)",
              transform: "translateZ(0)" 
            }}
          >
            {rightImages.map((src, index) => (
              <MarqueImage key={`right-1-${index}`} src={src} />
            ))}
          </div>
          <div 
            className="box"
            style={{ 
              willChange: "transform", 
              animationDuration: "var(--anim-duration, 45s)",
              animationPlayState: "var(--anim-play-state, running)",
              transform: "translateZ(0)" 
            }}
          >
            {rightImages.map((src, index) => (
              <MarqueImage key={`right-2-${index}`} src={src} />
            ))}
          </div>
        </div>
      </div>
      <div className="slide-funfact-wrap">
        <div>
          <div className="container">
            <div className="row">
              <div className="mb-30">
                <div className="slide-funfact-item text-center">
                  <h4 style={{fontSize: "60px"}}>
                    Satisfied Clients
                  </h4>
                  <span>
                    Turning trust into fruitful outcomes, one client at a time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

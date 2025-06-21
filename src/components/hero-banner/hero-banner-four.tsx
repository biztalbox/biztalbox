"use client";
import React, { memo, useMemo } from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import EyeBall from "../ashish/EyeBall";
import GalleryOne from "../gallery/gallery-one";

// Optimized styles object to reduce inline style calculations
const styles = {
  mainContainer: {
    position: "relative" as const,
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden" as const,
    backgroundImage: "url('/assets/image/hero_bg_2.jpg')", 
    backgroundSize: "cover" as const,
    backgroundPosition: "center" as const,
    backgroundRepeat: "no-repeat" as const,
  },
  leftSideText: {
    position: "absolute" as const,
    top: "15%",
    left: "5%",
    width: "40%",
    zIndex: 1,
    pointerEvents: "auto" as const,
  },
  leftSideTitle: {
    fontSize: "3rem",
    fontWeight: "bold" as const,
    lineHeight: "1",
    color: "#fff",
    letterSpacing: "1px",
    margin: 0,
  },
  rightSideText: {
    position: "absolute" as const,
    bottom: "22%",
    right: "5%",
    width: "50%",
    zIndex: 1,
    pointerEvents: "auto" as const,
    textAlign: "right" as const,
    padding: "0.5rem",
  },
  rightSideMainTitle: {
    fontSize: "5rem",
    fontWeight: "bold" as const,
    lineHeight: "0.9",
    letterSpacing: "1px",
    color: "#fff",
    margin: 0,
    marginBottom: "1rem",
  },
  rightSideSubTitle: {
    fontSize: "3.2rem",
    fontWeight: "bold" as const,
    lineHeight: "1",
    color: "#fff",
    margin: 0,
    marginBottom: "1rem",
    letterSpacing: "0px",
  },
  bottomText: {
    position: "absolute" as const,
    bottom: "3%",
    right: "5%",
    width: "45%",
    zIndex: 1,
    pointerEvents: "auto" as const,
  },
  bottomParagraph: {
    fontSize: "0.85rem",
    textAlign: "right" as const,
    color: "#fff",
    lineHeight: "1.6",
    letterSpacing: "0.5px",
    textTransform: "uppercase" as const,
    borderTop: "1px solid lightgray",
    paddingTop: "1rem",
    marginBottom: "1rem",
  },
  bottomLinkContainer: {
    textAlign: "right" as const,
  },
  eyeBallContainer: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    pointerEvents: "none" as const,
  },
  galleryContainer: {
    zIndex: 1,
    // position: "relative" as const,
  },
} as const;

// Responsive CSS as a string to avoid recalculation
const responsiveCSS = `
  @media screen and (max-width: 800px) {
    .modal_container {
      margin-top: -83px !important;
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    .left-side-text {
      top: 10% !important;
      left: 3% !important;
      width: 50% !important;
    }

    .left-side-text h3 {
      font-size: 2.2rem !important;
      line-height: 0.9 !important;
    }

    .right-side-text {
      bottom: 30% !important;
      right: 3% !important;
      width: 50% !important;
      top: unset !important;
    }

    .right-side-text h2 {
      font-size: 2.5rem !important;
      line-height: 0.9 !important;
    }

    .right-side-text h1 {
      font-size: 3.2rem !important;
    }

    .bottom-text {
      bottom: 10% !important;
      right: 3% !important;
      width: 85% !important;
    }

    .bottom-text p {
      font-size: 1.2rem !important;
    }
  }

  @media (max-width: 767px) {
    .left-side-text {
      top: 53% !important;
      left: 1% !important;
      right: 1% !important;
      width: 100% !important;
      text-align: center !important;
    }

    .left-side-text h3 {
      font-size: 1.5rem !important;
      line-height: 0.9 !important;
      text-align: center !important;
      font-weight: 500 !important;
    }

    .right-side-text {
      top: 70% !important;
      left: 1% !important;
      right: 1% !important;
      width: 100% !important;
      text-align: center !important;
    }
    
    .right-side-text h2 {
      display: none !important;
    }
    
    .right-side-text h1 {
      font-size: 3rem !important;
      line-height: 0.8 !important;
      text-align: center !important;
      font-weight: 500 !important;
    }

    .bottom-text {
      bottom: 10% !important;
      left: 0% !important;
      right: 0% !important;
      width: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      padding: 0 10px !important;
    }

    .bottom-text div:last-child {
      text-align: center !important;
    }

    .bottom-text p {
      font-size: 0.8rem !important;
      text-align: center !important;
    }

    .eye-ball-container {
      transform: translate(-50%, -60%) !important;
    }
  }

  @media (max-width: 400px) {
    .right-side-text {
      top: 70% !important;
    } 
    
    .bottom-text p {
      display: none !important;
    }
  }
`;

// Memoized ResponsiveStyles component
const ResponsiveStyles = memo(() => (
  <style jsx>{responsiveCSS}</style>
));

ResponsiveStyles.displayName = 'ResponsiveStyles';

// Memoized text content components for better performance
const LeftSideContent = memo(() => (
  <div className="left-side-text" style={styles.leftSideText}>
    <h3 className="tp-hero-3-title tp_reveal_anim" style={styles.leftSideTitle}>
      Igniting your brand&apos;s potential with out-of-the-box Marketing Solutions
    </h3>
  </div>
));

LeftSideContent.displayName = 'LeftSideContent';

const RightSideContent = memo(() => (
  <div className="right-side-text" style={styles.rightSideText}>
    <h1 className="tp-hero-3-title tp_reveal_anim" style={styles.rightSideMainTitle}>
      biztalbox
    </h1>
    <h2 className="tp-hero-3-title tp_reveal_anim" style={styles.rightSideSubTitle}>
      Creativity? Always
      <br />
      Calculated? Definitely
    </h2>
  </div>
));

RightSideContent.displayName = 'RightSideContent';

const BottomContent = memo(() => (
  <div className="bottom-text" style={styles.bottomText}>
    <p style={styles.bottomParagraph}>
      Expert digital marketing, SEO, and web development tailored for your
      success. Contact us & we will find that solution for you!
    </p>
    <div style={styles.bottomLinkContainer}>
      <Link className="tp-btn-black-2" href="/contact">
        Say Hello{" "}
        <span className="p-relative">
          <RightArrowTwo />
          <ArrowBg />
        </span>
      </Link>
    </div>
  </div>
));

BottomContent.displayName = 'BottomContent';

const EyeBallWrapper = memo(() => (
  <div className="eye-ball-container" style={styles.eyeBallContainer}>
    <EyeBall />
  </div>
));

EyeBallWrapper.displayName = 'EyeBallWrapper';

// Main component with optimizations
const HeroBannerFour: React.FC = memo(() => {
  // Memoize the main container class name to prevent unnecessary re-renders
  const containerClassName = useMemo(() => "modal_container", []);

  return (
    <section className={containerClassName} style={styles.mainContainer}>
      {/* Left Side Text */}
      <LeftSideContent />

      {/* Right Side Text */}
      <RightSideContent />

      {/* Bottom Text */}
      <BottomContent />

      {/* 3D Eye Model - Center */}
      <EyeBallWrapper />

      {/* Responsive Styles */}
      <ResponsiveStyles />
      
      {/* Gallery Section */}
      {/* <div style={styles.galleryContainer}>
        <GalleryOne />
      </div> */}
    </section>
  );
});

HeroBannerFour.displayName = 'HeroBannerFour';

export default HeroBannerFour;

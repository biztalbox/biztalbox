"use client"
import React, { useState } from "react";
import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import Link from "next/link";


const ThankYouPage = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    
  return (
    <div className="tp-thank-you-area pt-120 pb-120 black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-9">
            <div className="tp-thank-you-wrapper text-center">
              <div className="tp-thank-you-icon mb-30">
                <i
                  className="fa-regular fa-circle-check"
                  style={{ fontSize: "80px", color: "#FF5A1F" }}
                ></i>
              </div>
              <h1 className="tp-thank-you-title mb-20">Thank You!</h1>
              <p className="tp-thank-you-text mb-40 relative">
                Your message has been received. We appreciate you reaching out
                to us and We&apos;ll respond faster than you can say 
                <span 
                  className="tooltip-text-main" 
                  style={{ 
                    cursor: 'pointer',
                    display: 'inline-block',
                    wordBreak: 'break-word',
                    maxWidth: '100%',
                    hyphens: 'auto'
                  }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  &quot;Hippopotomonstrosesquippedaliophobia&quot;
                </span>
                {showTooltip && (
                  <div className="custom-tooltip">
                    Fear of long words
                  </div>
                )}
              </p>
              <div className="tp-thank-you-btns mt-10">
                <Link className="tp-btn-black-2" href="/">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

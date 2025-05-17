import React from "react";

export default function ThankYouLoading() {
  return (
    <div className="tp-thank-you-area pt-120 pb-120 black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="tp-thank-you-wrapper text-center">
              <div className="tp-thank-you-icon mb-30">
                <div className="loading-spinner" style={{ width: '80px', height: '80px', margin: '0 auto' }}>
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
              <div className="tp-thank-you-title mb-20">
                <div className="placeholder-glow">
                  <span className="placeholder col-6"></span>
                </div>
              </div>
              <div className="tp-thank-you-text mb-40">
                <div className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-12"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
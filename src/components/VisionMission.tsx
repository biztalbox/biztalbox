import React from "react";
import Image from "next/image";

export default function VisionMission() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="vision-mission-wrapper">
          <div className="row">
            <h4 className="ab-brand-title mb-10">Vision</h4>
            <div className="ab-brand-content tp_title_anim">
              <p>
                To be a part of India’s digital future by empowering brands with
                innovative strategies while delivering a tangible impact. We
                strive to provide sustainable brand growth by combining
                state-of-the-art technology and creativity.
              </p>
            </div>
          </div>
          <div className="row">
            <h4 className="ab-brand-title mb-10">Mission</h4>
            <div className="ab-brand-content tp_title_anim">
              <p>
                Biztalbox strives to foster sincere connections with a brand’s
                prospective audience by making them more relatable and
                unforgettable. Our agency is not only up-to-the-minute when it
                comes to trends but also delivers quantifiable results. We pull
                this off by maintaining transparent and consistent communication
                with our clients, ensuring their concepts are accurately
                represented. A brand is bound to achieve sustainable growth by
                collaborating with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

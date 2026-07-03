"use client";
import React from "react";
import EyeBall from "../ashish/EyeBall";
import "./hero.css";

const HeroBannerFour = () => {
  return (
    <section className="darkHomepageHero">

      <div className="wrapper">

        <div style={{ zIndex: 2 }}>

          <EyeBall />
        </div>


        <div className="contentBox">
          <div className="container">
            <p style={{marginBottom: '30px'}}>CREATIVE SOULS, STRATEGIC MINDS</p>
            <h1>biztalbox</h1>
            <h3>Breakthrough Marketing Solutions, Igniting Brand Potential</h3>
            <div className="chipText">
              {/* <span></span>
            <i></i> */}
              <p>Sustainable Growth Guided by Expertise, Rooted in Partnership</p>
              <span></span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerFour;

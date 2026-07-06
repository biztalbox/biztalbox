"use client";
import React from "react";
import EyeBall from "../ashish/EyeBall";
import "./hero.css";
import Link from "next/link";

const HeroBannerFour = () => {
  return (
    <section className="darkHomepageHero">

      <div className="wrapper">

        <div style={{ zIndex: 3 }}>
          {/* <div style={{zIndex: 3}}> */}
          <EyeBall />
          {/* </div> */}
        </div>
        {/* <img src="/darkhome-eclips.webp" alt="darkhome-eclips" className="darkeyebgimg" /> */}


        <div className="contentBox">
          <div className="container contentDiv">
            <div className="leftText">
              <span className="linePink"></span>
              <p>Creative Souls, Strategic Minds</p>
              <h1>biztalbox</h1>
              <p>Sustainable Growth Guided by Expertise, Rooted in Partnership</p>
              
            </div>

            <div className="rightText">
              <h4 style={{ color: "white" }}>Breakthrough Marketing Solutions, Igniting Brand Potential</h4>
              <span className="lineWhite"></span>
              <Link href="/contact" style={{ display: "block", width: "fit-content" }} className="tp-btn-black-2">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerFour;

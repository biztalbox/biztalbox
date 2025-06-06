"use client";
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import EyeBall from "../ashish/EyeBall";

export default function HeroBannerFour() {
  return (
    <section
      className="modal_container"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Left Side Text */}
      <div
        className="left-side-text"
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "40%",
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <h3
          className="tp-hero-3-title tp_reveal_anim"
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            lineHeight: "1.1",
            color: "#fff",
            letterSpacing: "1px",
            margin: 0,
          }}
        >
          We believe
          <br />
          there&apos;s no bad
          <br />
          business, there&apos;s bad
          <br />
          marketing
        </h3>
      </div>

      {/* Right Side Text */}
      <div
        className="right-side-text"
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "40%",
          zIndex: 1,
          pointerEvents: "auto",
          textAlign: "right",
          padding: "0.5rem",
        }}
      >
        <h2
          className="tp-hero-3-title tp_reveal_anim"
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            lineHeight: "0.9",
            color: "#fff",
            margin: 0,
            marginBottom: "1rem",
            letterSpacing: "0px",
          }}
        >
          For
          <br />
          every
          <br />
          business
        </h2>
        <h1
          className="tp-hero-3-title tp_reveal_anim"
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            lineHeight: "0.9",
            letterSpacing: "1px",
            color: "#fff",
            margin: 0,
            marginBottom: "1rem",
          }}
        >
          biztalbox
        </h1>
      </div>

      {/* Bottom Text */}
      <div
        className="bottom-text"
        style={{
          position: "absolute",
          bottom: "3%",
          right: "5%",
          width: "45%",
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            textAlign: "right",
            color: "#fff",
            lineHeight: "1.6",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            borderTop: "1px solid lightgray",
            paddingTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Expert digital marketing, SEO, and web development tailored for your
          success. Contact us & we will find that solution for you!
        </p>

        <div style={{ textAlign: "right" }}>
          <Link className="tp-btn-black-2" href="/contact">
            Say Hello{" "}
            <span className="p-relative">
              <RightArrowTwo />
              <ArrowBg />
            </span>
          </Link>
        </div>
      </div>

      {/* 3D Eye Model - Center */}
      <div
        className="eye-ball-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <EyeBall />
      </div>

      {/* Background styling for original container */}
      <div
        className="tp-hero-3-area tp-hero-3-ptb fix"
        style={{ visibility: "hidden" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-hero-3-content-box text-center p-relative"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        /* Desktop - Default styles above */

        @media screen and (max-width: 800px) {
          .modal_container {
            margin-top: -83px !important;
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) and (min-width: 768px) {
          .left-side-text {
            top: 10% !important;
            left: 3% !important;
            width: 50% !important;
          }

          .left-side-text h3 {
            font-size: 2.5rem !important;
            line-height: 0.9 !important;
          }

          .right-side-text {
            bottom: 30% !important;
            right: 3% !important;
            width: 50% !important;
            top: unset !important;
          }

          .right-side-text h2 {
            font-size: 3rem !important;
            line-height: 0.9 !important;
          }

          .right-side-text h1 {
            font-size: 4rem !important;
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

        /* Mobile Styles */
        @media (max-width: 767px) {
          .left-side-text {
            top: 54% !important;
            left: 1% !important;
            right: 1% !important;
            width: 100% !important;
            text-align: center !important;
          }

          .left-side-text h3 {
            font-size: 1.7rem !important;
            line-height: 0.7 !important;
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
            bottom: 4% !important;
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

        /* Small Mobile */
        @media (max-width: 400px) {
          .right-side-text {
            top: 76% !important;
           } 
           .bottom-text p {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

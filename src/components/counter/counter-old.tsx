import React from "react";
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
  return <Image src={src} alt="marque-img" style={{ height: "auto" }} width={100} height={100} />;
}

export default function CounterOld() {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        <div className="slide-img-left">
          <div className="box">
            {leftImages.map((src, index) => (
              <MarqueImage key={index} src={src} />
            ))}
          </div>
          <div className="box">
            {leftImages.map((src, index) => (
              <MarqueImage key={index} src={src} />
            ))}
          </div>
        </div>
        <div className="slide-img-right">
          <div className="box">
            {rightImages.map((src, index) => (
              <MarqueImage key={index} src={src} />
            ))}
          </div>
          <div className="box">
            {rightImages.map((src, index) => (
              <MarqueImage key={index} src={src} />
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
                  <h4>
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

import React from "react";
import Image, { StaticImageData } from "next/image";
import CounterItem from "./counter-item";

const clients = [
  {
    src: "/clients/1.png",
    alt: "marque-img",
  },
  {
    src: "/clients/2.png",
    alt: "marque-img",
  },
  {
    src: "/clients/3.png",
    alt: "marque-img",
  },
  {
    src: "/clients/4.png",
    alt: "marque-img",
  },
  {
    src: "/clients/5.png",
    alt: "marque-img",
  },
  {
    src: "/clients/6.png",
    alt: "marque-img",
  },
  {
    src: "/clients/7.png",
    alt: "marque-img",
  },
  {
    src: "/clients/8.png",
    alt: "marque-img",
  },
  {
    src: "/clients/9.png",
    alt: "marque-img",
  },
  {
    src: "/clients/10.png",
    alt: "marque-img",
  },
  {
    src: "/clients/11.png",
    alt: "marque-img",
  },
  {
    src: "/clients/12.png",
    alt: "marque-img",
  },
  {
    src: "/clients/13.png",
    alt: "marque-img",
  },
  {
    src: "/clients/14.png",
    alt: "marque-img",
  },
  {
    src: "/clients/15.png",
    alt: "marque-img",
  },
  {
    src: "/clients/16.png",
    alt: "marque-img",
  },
  {
    src: "/clients/17.png",
    alt: "marque-img",
  },
  {
    src: "/clients/18.png",
    alt: "marque-img",
  },
  {
    src: "/clients/19.png",
    alt: "marque-img",
  },
  {
    src: "/clients/20.png",
    alt: "marque-img",
  },
  {
    src: "/clients/21.png",
    alt: "marque-img",
  },
  {
    src: "/clients/22.png",
    alt: "marque-img",
  },
  {
    src: "/clients/23.png",
    alt: "marque-img",
  },
  {
    src: "/clients/24.png",
    alt: "marque-img",
  },
  {
    src: "/clients/25.png",
    alt: "marque-img",
  },
  {
    src: "/clients/26.png",
    alt: "marque-img",
  },
  {
    src: "/clients/27.png",
    alt: "marque-img",
  },
];

// function MarqueImage({ src }: { src: StaticImageData }) {
//   return <Image src={src} alt="marque-img" style={{ height: "auto" }} />;
// }
export default function CounterOne() {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        <div className="slide-img-left">
          <div className="box">
            {clients.map((client) => (
              <Image
                key={client.src}
                src={client.src}
                alt={client.alt}
                style={{ height: "auto" }}
                width={100}
                height={100}
              />
            ))}
          </div>
          {/* <div className="box">
            {clients.map((client) => (
              <Image
                key={client.src}
                src={client.src}
                alt={client.alt}
                style={{ height: "auto" }}
                width={100}
                height={100}
              />
            ))}
          </div> */}
        </div>
        <div className="slide-img-right">
          <div className="box">
            {clients.map((client) => (
              <Image
                key={client.src}
                src={client.src}
                alt={client.alt}
                style={{ height: "auto" }}
                width={100}
                height={100}
              />
            ))}
          </div>
          {/* <div className="box">
            {clients.map((client) => (
              <Image
                key={client.src}
                src={client.src}
                alt={client.alt}
                style={{ height: "auto" }}
                width={100}
                height={100}
              />
            ))}
          </div> */}
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
                    {/* <CounterItem min={0} max={235} />+ */}
                  </h4>
                  <span>Turning trust into fruitful outcomes, one client at a time</span>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4><CounterItem min={0} max={12} />+</h4>
                  <span>Years of Experience</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4><CounterItem min={0} max={140} />+</h4>
                  <span>Clients Worldwide</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

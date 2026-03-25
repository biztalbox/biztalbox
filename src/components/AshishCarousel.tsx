"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import g_1 from "@/assets/img/profile/Artboard 1.webp";
import g_2 from "@/assets/img/profile/Artboard 2.webp";
import g_3 from "@/assets/img/profile/Artboard 3.webp";
import g_4 from "@/assets/img/profile/Artboard 4.webp";
import g_5 from "@/assets/img/profile/Artboard 5.webp";
import g_6 from "@/assets/img/profile/Artboard 6.webp";
import g_7 from "@/assets/img/profile/Artboard 7.webp";
import g_17 from "@/assets/img/profile/Artboard 17.webp";
import g_18 from "@/assets/img/profile/Artboard 18.webp";

import "swiper/css";

const galleryImages = [
  { src: g_1, alt: "Gallery 1" },
  { src: g_2, alt: "Gallery 2" },
  { src: g_3, alt: "Gallery 3" },
  { src: g_4, alt: "Gallery 4" },
  { src: g_5, alt: "Gallery 5" },
  { src: g_6, alt: "Gallery 6" },
  { src: g_7, alt: "Gallery 7" },
  { src: g_17, alt: "Gallery 17" },
  { src: g_18, alt: "Gallery 18" },
];

const AshishCarousel: React.FC = () => {
  const slides = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Top curve */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "100%",
          height: "clamp(10px, 10vw, 80px)",
          background: "#030303",
          borderRadius: "0 0 50% 50%",
          zIndex: 10,
        }}
      />

      {/* Bottom curve */}
      <div
        style={{
          position: "absolute",
          bottom: -3,
          left: 0,
          width: "100%",
          height: "clamp(10px, 10vw, 80px) ",
          background: "#000000",
          borderRadius: "50% 50% 0 0",
          zIndex: 10,
          borderTop: "3px solid white",
        }}
      />

      {/* Video background */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <video
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/split_video.mp4" />
        </video>

        {/* Carousel content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "clamp(0px, 5vw, 30px) 0",
          }}
        >
          <Swiper
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides={false}
            loop
            speed={4000}
            allowTouchMove={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="ashish-carousel"
            style={{ overflow: "hidden" }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <div style={{ width: 280, flexShrink: 0 }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={280}
                    height={350}
                    sizes="280px"
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    loading={index < 9 ? "eager" : "lazy"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AshishCarousel;

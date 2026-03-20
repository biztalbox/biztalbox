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
  // Duplicate slides for seamless infinite loop (marquee-like)
  const slides = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
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
        // pauseOnMouseEnter: true,
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
  );
};

export default AshishCarousel;

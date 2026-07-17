import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowBg, Hand, RightArrowTwo } from "@/components/svg";
import shape from '@/assets/img/inner-about/about/shape-1.png';
import GalleryLite from "./Gallery";

import algo from "@/assets/image/new_avatar/algo.webp";
import video from "@/assets/image/new_avatar/video.webp";
import webdev from "@/assets/image/new_avatar/webdev.webp";
import seo from "@/assets/image/new_avatar/seo.webp";
import graphic from "@/assets/image/new_avatar/graphic.webp";
import content from "@/assets/image/new_avatar/content.webp";
import smo from "@/assets/image/new_avatar/smo.webp";
import google from "@/assets/image/new_avatar/google.webp";
import meta from "@/assets/image/new_avatar/meta.webp";
import appdev from "@/assets/image/new_avatar/appdev.webp";

import Link from "next/link";

export default function WhyChooseUsLite() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <div id="section11" className={`bg-black min-h-screen relative z-10 ab-about-area md:bg-[url('/whychooseus.webp')] bg-cover xl:bg-cover bg-center bg-no-repeat md:h-[1000px] lg:h-[1200px] 2xl:h-[1600px] py-20 md:pb-8 xl:py-28 2xl:!py-48 z-index-5 why_choose_us_wrapper`}>


      <div className="container flex flex-col gap-10 h-full justify-between">

        <div className="flex flex-col gap-8 md:max-w-md xl:max-w-xl">
          <h1 className="!text-white col-span-3 flex flex-col"><span className="font-bold">WHY</span> CHOOSE US</h1>
          <p className="!text-base" style={{ color: "rgba(255, 255, 255, 0.78)" }}>
            We believe every brand without a voice is just a name and we&apos;re here to make yours heard! No shortcuts or gimmicks, just pure creativity and authentic marketing.
          </p>

        </div>

        <div className="ab-about-category-list category-space-1 self-end max-w-xl">
          <ul>
            <li style={{ color: "rgba(255, 255, 255, 0.72)" }}><b className="!text-white">No Ifs and Buts</b>: We ensure every click turns into customers.</li>
            <li style={{ color: "rgba(255, 255, 255, 0.72)" }}><b className="!text-white">Experts Who Get It</b>: SEO and Social Media? It&apos;s the air we breathe.</li>
            <li style={{ color: "rgba(255, 255, 255, 0.72)" }}><b className="!text-white">Bespoke Marketing Solutions</b>: No dull and generic strategies.</li>
            <li style={{ color: "rgba(255, 255, 255, 0.72)" }}><b className="!text-white">No Fluff, Just Facts</b>: Data-driven results and tangible growth.</li>
            <li style={{ color: "rgba(255, 255, 255, 0.72)" }}><b className="!text-white">24/7 Availability</b>: We’re here round the clock!</li>
          </ul>
        </div>

      </div>




      {
        isMobile && <GalleryLite />
      }

    </div >
  );
}

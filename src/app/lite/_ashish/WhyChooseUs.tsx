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
    <div id="section11" className={`bg-black rounded-[70px] min-h-screen relative z-10 ab-about-area ${isMobile ? 'py-20' : 'py-36'} z-index-5 why_choose_us_wrapper`}>


      <div className="container flex flex-col gap-5">

        <div className="grid md:grid-cols-5 gap-5">
          <Image className="h-fit hidden md:block" width={570} height={720} src={seo} alt="seo" />
          <h1 className="text-white text-center col-span-3">WHY CHOOSE US</h1>
          <Image className="h-fit hidden md:block" width={570} height={720} src={smo} alt="smo" />

        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
          <h4 className="text-white">
            We believe every brand without a voice is just a name — and we&apos;re here to make yours heard! No shortcuts or gimmicks, just pure creativity and authentic marketing.
          </h4>
          <Image className="h-fit hidden md:block" width={570} height={720} src={webdev} alt="webdev" />
          <Image className="h-fit hidden md:block" width={570} height={720} src={graphic} alt="graphic" />
          <div className="ab-about-category-list category-space-1 text-white">
            <ul>
              <li><b>No Ifs and Buts</b>: We ensure every click turns into customers.</li>
              <li><b>Experts Who Get It</b>: SEO and Social Media? It&apos;s the air we breathe.</li>
              <li><b>Bespoke Marketing Solutions</b>: No dull and generic strategies.</li>
              <li><b>No Fluff, Just Facts</b>: We’re here round the clock!</li>
              <li><b>24/7 Availability</b>: Data-driven results and tangible growth.</li>
            </ul>
          </div>

        </div>
        <div className="hidden md:grid md:grid-cols-5 gap-10">
          <Image className="h-fit" width={570} height={720} src={appdev} alt="seo" />
          <Link href="/about" className="md:col-span-3 p-4 border border-white rounded text-white hover:bg-white text-center">
            <h2 className="text-white hover:!text-black">View All Services ↗</h2>

          </Link>
          <Image className="h-fit hidden md:block" width={570} height={720} src={algo} alt="seo" />
        </div>

        <div className="hidden md:grid grid-cols-3 gap-10 place-items-center justify-center">
          <Image className="h-72 w-fit" width={570} height={720} src={google} alt="ads" />
          <Image className="h-72 w-fit" width={570} height={720} src={video} alt="appdev" />
          <Image className="h-72 w-fit" width={570} height={720} src={content} alt="algo" />
        </div>
      </div>



      
      {
        isMobile && <GalleryLite />
      }

    </div >
  );
}

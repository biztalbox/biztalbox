import React, { CSSProperties, useEffect, useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import port_1 from "@/assets/img/services/ALGANIX.webp";
import port_2 from "@/assets/img/services/CAPTAIN_CUT.webp";
import port_3 from "@/assets/img/services/WEBDEV.webp";
import port_4 from "@/assets/img/services/seo.webp";
import port_5 from "@/assets/img/services/VECTOR.webp";
import port_6 from "@/assets/img/services/CONTENT.webp";
import port_7 from "@/assets/img/services/social.webp";
import port_8 from "@/assets/img/services/GOOGLE_ADS.webp";
import port_9 from "@/assets/img/services/META.webp";
import port_10 from "@/assets/img/services/app_dev.webp";

import Link from "next/link";

// portfolio data
const gallery = [
  {
    id: 1,
    img: port_4,
    // img: port_4,
    title: "SEO",
    desc: "Search Engine Optimization (SEO) is the key to make sure your website stands out digitally. It enhances your website for search engines, resulting in improved ranks and increased visibility.",
    slug:"best-seo-agency",
    alt:" SEO expert analyzing website performance at a USA-based agency"
  },
  {
    id: 2,
    // img: port_6,
    img: port_7,
    title: "Social Media",
    desc: "Social media Marketing is the digital arena where brands connect, captivate, and communicate with their audience.",
    slug: "social-media-marketing",
    alt:"Social media marketing team creating content strategy at a US agency"
  },
  {
    id: 3,
    img: port_3,
    // img: port_6,
    title: "Web Development",
    desc: "A Web Development is a digital architect who builds, optimizes, and secures seamless websites.",
    slug: "website-development",
    alt:" Professional web development team working in a USA-based agency office"
  },
  {
    id: 4,
    // img: port_6,
    img: port_10,
    title: "App Development",
    desc: "An App Developer is a mobile maestro who builds the next killer app and delivers unparalleled performance to keep users coming back for more.",
    slug: "app-development",
    alt:"USA-based app development team collaborating on a mobile project"
  },
  {
    id: 5,
    img: port_1,
    // img: port_2,
    title: "Analysis Algorithm",
    desc: "An algorithm is a precision powerhouse that can instantly analyse vast amount of data to find hidden patterns and insights.",
    slug: "analysis-algorithm",
    alt:"Data analysis algorithm designed by a USA-based tech agency"
  },
  {
    id: 6,
    // img: port_3,
    img: port_2,
    title: "Motion Graphics",
    desc: "A video editing is a multimedia guru who turns in raw footage into cinematic masterpieces.",
    slug: "motion-graphics",
    alt:"Motion graphics animation created by a USA-based design agency"
  },
  {
    id: 7,
    img: port_5,
    // img: port_2,
    title: "Graphic Designing",
    desc: "A graphic designing is a creative force that turns concepts into recognised piece of art.",
    slug: "graphic-designing",
    alt:"Creative graphic design services by a USA-based design agency"
  },
  {
    id: 8,
    // img: port_3,
    img: port_6,
    title: "Copy Writing",
    desc: "Content creation combines crafting high-quality, SEO-optimized material that engages users and search engines.",
    slug: "content-marketing",
    alt:" SEO copywriting services provided by a USA-based marketing agency"
  },
  {
    id: 9,
    img: port_8,
    // img: port_7,
    title: "Performance Marketing",
    desc: "Google Ads is a versatile tool that makes every click an instant hit. It improves return on investment (ROI) and generates high-value leads through strategic bidding.",
    slug: "google-ads-service",
    alt:"Experts in PPC and performance marketing working at a USA agency"
  },
  {
    id: 10,
    // img: port_2,
    img: port_9,
    title: "Meta Ads",
    desc: "Throughout its ecosystem, Meta Ads creates visually striking ads with precise targeting, turning it into a digital powerhouse.",
    slug: "facebook-ads-service",
    alt:" Meta Ads campaign setup by a USA-based performance marketing agency"
  },
];


const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryLite() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getImageSize = () => {
    if (isMobile) {
      return { height: '200px', width: '150px' };
    }
    return { height: '300px', width: '200px' };
  };

  return (
    <div className="tp-gallery-area fix p-relative md:hidden">
      
      <div className="container-fluid">
        <div className="gallery_video_bg__content">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-gallery-slider-wrap">
                <div className="swiper-container tp-gallery-slider-active">
                  <Marquee 
                    className="tp-gallery-titming" 
                    speed={isMobile ? 40 : 100} 
                    direction='left'
                    pauseOnHover={true}
                    gradient={false}
                    style={{
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {gallery.map((g, i) => (
                      <div key={i} style={{ willChange: 'transform' }}>
                        <Link href={`/${g.slug}`} className="tp-gallery-item mr-30">
                          <Image 
                            src={g.img} 
                            alt={g.alt} 
                            title={g.title}
                            style={getImageSize()}
                            loading="lazy"
                            quality={isMobile ? 60 : 75}
                            sizes={isMobile ? 
                              "(max-width: 768px) 250px" : 
                              "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            }
                          />
                        </Link>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

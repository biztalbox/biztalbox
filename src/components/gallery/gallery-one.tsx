import React, { CSSProperties, useEffect, useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
// import shape_d_1 from '@/assets/image/top-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';
// import shape_d_2 from '@/assets/image/bottom.png';

import g_1 from '@/assets/img/profile/Artboard 1.webp';
import g_2 from '@/assets/img/profile/Artboard 2.webp';
import g_3 from '@/assets/img/profile/Artboard 3.webp';
import g_4 from '@/assets/img/profile/Artboard 4.webp';
import g_5 from '@/assets/img/profile/Artboard 5.webp';
import g_6 from '@/assets/img/profile/Artboard 6.webp';
import g_7 from '@/assets/img/profile/Artboard 7.webp';
import g_17 from '@/assets/img/profile/Artboard 17.webp';
import g_18 from '@/assets/img/profile/Artboard 18.webp';

const gallery_images = [
  g_1, g_2, g_3, g_4, g_5, g_6, g_7, g_17, g_18
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
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
      return { height: '300px', width: '250px' };
    }
    return { height: '500px', width: '400px' };
  };

  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} priority />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} priority />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} priority />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} priority />
      </div>
      <div className="container-fluid">
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
                  {gallery_images.map((g, i) => (
                    <div key={i} style={{ willChange: 'transform' }}>
                      <div className="tp-gallery-item mr-30">
                        <Image 
                          src={g} 
                          alt="gallery-img" 
                          style={getImageSize()}
                          loading="lazy"
                          quality={isMobile ? 60 : 75}
                          sizes={isMobile ? 
                            "(max-width: 768px) 250px" : 
                            "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          }
                        />
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

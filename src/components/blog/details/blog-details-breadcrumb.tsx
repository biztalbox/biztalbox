"use client";
import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/inner-blog/blog-details/bg-shape/overly.png";
import avatar from "@/assets/img/inner-blog/blog-details/avatar/avatar-2.jpg";
import Link from "next/link";

interface BlogDetailsBreadcrumbProps {
  title: string;
  image: string;
  date: string;
}

export default function BlogDetailsBreadcrumb({ title, image, date }: BlogDetailsBreadcrumbProps) {

  const decodeHtmlEntities = (text: string): string => {
    if (typeof window === 'undefined') return text;
    
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-30"
        style={{
          backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'
        }}
      >
        <div className="blog-details-overlay-shape">
          <Image src={overlay} alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="z-index-5">
                <span className="blog-details-meta">
                  <i>{date}</i>
                </span>
                <h1 className="blog-details-title tp-char-animation">
                  {decodeHtmlEntities(title)}
                </h1>
                {/* <div className="blog-details-top-author d-flex align-items-center">
                  <Image src={avatar} alt="avatar" />
                  <span>
                    <Link href="/blog">Biztal Box</Link> / <i>Blog</i>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

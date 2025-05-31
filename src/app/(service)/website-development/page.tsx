"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { projectDetailsPin } from "@/utils/project-anim";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";
import ScrollPinImage from "@/components/ScrollPinImage";
import ServiceHighlights from "@/components/ashish/ServiceHighlights";

const WebsiteDevelopmentPage = () => {
  const highlightColor = "#a8d9b4"; // You can change this color or make it a prop
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const highlights = [
    "12+ Years of Web Development Experience",
    "70+ Websites Delivered",
    "SEO-Optimized & Mobile-Responsive",
    "Fast, Secure, and Scalable Solutions",

  ];

  const services = [
    "WordPress Websites",
    "E-commerce Development",
    "Landing Pages",
    "Website Redesign",
    "Speed Optimization",
    "Website Maintenance",
    "Custom UI/UX Design",
  ];

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven cls="tp-inner-header-border" />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <ScrollPinImage
              imageSrc="/assets/img/services/WEBDEV.webp"
              imageAlt="Web Dev Web Development"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                     Custom Web Development Solutions to Grow Your Online Presence
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Web Design & Development 
                  </h2>
                  <p>
                    A web developer is something akin to a digital builder – they construct, tweak,
                    and safeguard websites to ensure that they are in good working order.
                    They’re experts in coding, debugging and creating designs and create responsive designs that look great on any screen. From sketching wireframes to managing security and updates, they help keep websites at their best as the brand grows and evolves.
                    A web developer combines creativity with logic and design with data,
                    from the first click to the final launch. They build more than just websites — they
                    build experiences that continue to grow and evolve. Each update makes your digital
                    footprint stronger and smarter.
                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                   <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                     Web Dev
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Web Development
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>The Code Titan-</span>
                    <p>
                      Mastery of Coding Languages –  Mastery in writing, optimizing,
                      and debugging codes in a variety of programming languages in order
                      to deliver error-free, high-quality  functionality. Like a linguistic
                      wizard of the digital world, the Code Titan speaks the language of the web,
                      bringing ideas to life and turning them into smooth, engaging online experiences.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Flowmaster- </span>
                    <p>
                      Flowchart Creation – The skill to simplify
                      complex systems and processes into understandable, logical flowcharts used to enhance decision-making
                      and to improve the user experience. The Flowmaster brings clarity to chaos—turning complex ideas into
                      simple, easy-to-follow charts that help everyone understand the path forward.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Blueprint Weaver- </span>
                    <p>
                      Wireframing – The ability to develop precise, intuitive wireframes
                      that lay the perfect foundation for any user interface. Every screen begins as a
                      thought in the Weaver’s mind—clear, purposeful, and made for the user.
                      Their wireframes don’t just guide design; they help create smooth, intuitive experiences.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Bug Buster- </span>
                    <p>
                      Bug Fixing and Troubleshooting – The ability to examine, debug,
                      and eliminate issues in the code, ensuring smooth and error-free execution.
                      They quietly save the day behind the scenes— spotting what’s broken, fixing what’s
                      not working, and keep everything running like it should.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Security Sentinel-</span>
                    <p>
                      Web Security – The ability to protect websites with high level security,
                      protecting from threats and minimizing vulnerabilities. The Sentinel is
                      vigilant—ensuring your website is secure, your data is private, and your visitors
                      feel secure no matter what comes your way.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Design Shapeshifter-</span>
                    <p>
                      Dynamic Web Design – The ability to create flexible, adaptable,
                      and dynamic web designs that evolve with the brand&apos;s needs. Trends
                      come and go, and the Shapeshifter moves
                      with them—blending usefulness and style to create designs that feel fresh today and still work tomorrow.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Mobile Maestro-</span>
                    <p>
                      Responsive Design – The ability to design websites that automatically
                      adapt and function perfectly across all mobile devices and screen sizes.
                      Whether it’s on a phone, tablet, or smartwatch,
                      the Maestro makes sure every tap, swipe, and scroll feels smooth and effortless.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Maintenance Master- </span>
                    <p>
                      Ongoing Support & Maintenance –
                      The ability to assure websites run smoothly and
                      are kept up to date with regular maintenance and timely updates. Behind
                      every site that runs smoothly is the maintenance master, bearing all the weight of
                      work without making you feel the difference—keeping things quick, clean, and easy.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollPinImage>
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterFour background="black-bg" />
          {/* footer area */}
        </div>
      </div>
      <style jsx>{`
        .project-details-1-info > span {
          color: ${highlightColor} !important;
        }
      `}</style>
    </Wrapper>
  );
};

export default WebsiteDevelopmentPage;

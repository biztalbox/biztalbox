"use client";

import "./hero.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LitePage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Scroll-based parallax for vertical text
      const floatingText = document.querySelector(".lite-vertical-floating");
      if (floatingText) {
        gsap.to(floatingText, {
          y: "-50%",
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
          },
        });

        // Mouse-based parallax
        const xTo = gsap.quickTo(floatingText, "x", { duration: 0.6, ease: "power3" });
        const yTo = gsap.quickTo(floatingText, "y", { duration: 0.6, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
          const { clientHeight } = document.documentElement;
          // Subtle vertical drift based on mouse
          const moveY = (e.clientY / clientHeight - 0.5) * 60;
          yTo(moveY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }

      const tlHero = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
        },
      });

      tlHero
        .from("[data-anim='top']", { y: -18, opacity: 0, duration: 0.7 }, 0)
        .from(
          "[data-anim='headline']",
          { y: 28, opacity: 0, duration: 0.9 },
          0.05,
        )
        .from(
          "[data-anim='sub']",
          { y: 18, opacity: 0, duration: 0.7 },
          0.18,
        )
        .from(
          "[data-anim='bottom']",
          { y: 18, opacity: 0, duration: 0.7 },
          0.35,
        );

      const section = document.querySelector<HTMLElement>(".lite-section");
      if (section) {
        gsap
          .timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          })
          .from(
            "[data-anim='section-top']",
            { y: -16, opacity: 0, duration: 0.6 },
            0,
          )
          .from(
            "[data-anim='section-headline']",
            { y: 22, opacity: 0, duration: 0.8 },
            0.05,
          )
          .from(
            "[data-anim='section-bottom']",
            { y: 20, opacity: 0, duration: 0.7 },
            0.15,
          );
      }


      // Premium Card Scroll Animation
      const mainTag = document.querySelector<HTMLElement>(".product-tag--main");
      if (mainTag) {
        // Initialize state if needed
        gsap.set(mainTag, { transformOrigin: "center center" });

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".lite-products",
            start: "top center",
            end: "bottom top",
            scrub: true,
            // pin: true, // We'll keep it absolute/relative for a section-to-section flow
          }
        });

        cardTl.to(mainTag, {
          scale: 0.65,
          opacity: 0.75,
          x: "35vw", // Move to the right
          y: "100vh", // Carry over to the next section (approx)
          ease: "power2.out",
          onUpdate: function () {
            const progress = this.progress();
            // Swap content mid-flight
            const idEl = mainTag.querySelector(".product-tag__id");
            if (idEl) {
              if (progress > 0.5) {
                idEl.textContent = "#02";
                mainTag.classList.add("product-tag--small");
              } else {
                idEl.textContent = "#01";
                mainTag.classList.remove("product-tag--small");
              }
            }
          }
        });
      }

      // Aesthetics headline animation
      gsap.from(".lite-aesthetics__line", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".lite-aesthetics",
          start: "top 70%",
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main ref={rootRef} className="lite-hero">
        <div className="lite-vertical-floating">
          <div className="lite-vertical-floating__inner">
            <span className="lite-vertical-floating__item">NO STANDARD PRICES</span>
            <span className="lite-vertical-floating__item"><span>ⓘ</span> ART POP</span>
            <span className="lite-vertical-floating__item">HARD WORK WARRANTY</span>
            <span className="lite-vertical-floating__item"><span>✴</span> DESIGN &amp; CODE</span>
            <span className="lite-vertical-floating__item">NO RE...</span>
            <span className="lite-vertical-floating__item">NO STANDARD PRICES</span>
            <span className="lite-vertical-floating__item"><span>ⓘ</span> ART POP</span>
          </div>
        </div>
        <div className="lite-hero__bg" aria-hidden="true">
          <div className="lite-hero__drift lite-hero__drift--a">
            <div className="lite-hero__bg-card lite-hero__bg-card--1" />
            <div className="lite-hero__bg-card lite-hero__bg-card--2" />
          </div>
          <div className="lite-hero__drift lite-hero__drift--b">
            <div className="lite-hero__bg-card lite-hero__bg-card--3" />
            <div className="lite-hero__bg-card lite-hero__bg-card--4" />
          </div>
        </div>

        <header className="lite-hero__top" data-anim="top">
          <div className="lite-hero__badge-vertical">AUTHENTIC DIGITAL</div>
          <div className="lite-hero__brand">
            <span className="lite-hero__brand-small">
              SILENCIO ® VISUAL LANGUAGES
            </span>
          </div>
          <button type="button" className="lite-hero__selected-works">
            <span>SELECTED WORKS</span>
            <span className="lite-hero__selected-works-arrow">➝</span>
          </button>
        </header>
        {/* Hero Section */}

        <section className="lite-hero__center">
          <div className="lite-hero__headline" data-anim="headline">
            <div className="lite-hero__headline-line">DIGITAL</div>
            <div className="lite-hero__headline-line">PRODUCTS</div>
          </div>

          <div className="lite-hero__subheadline" data-anim="sub">
            <div>
              FOR CONTEMPORARY <span aria-hidden="true">✴︎</span> BRANDS
            </div>
          </div>

          <p className="lite-hero__description" data-anim="desc">
            WE CRAFT UNIQUE, INNOVATIVE AND MEMORABLE DIGITAL EXPERIENCES THAT
            STRIVE TO PUSH THE BOUNDARIES AND
            <br />
            LEAVE A LASTING IMPACT THROUGH DESIGN AND INTERACTIVITY
          </p>
        </section>


      </main>


      {/* About Section */}
      <section className="lite-section">
        <div className="lite-section__vertical">AUTHENTIC DIGITAL</div>

        <div className="lite-section__inner">
          <div className="lite-section__topline" data-anim="section-top">
            <span>DIGITAL BRANDING #01</span>
            <span>VISUAL LANGUAGES #02</span>
            <span>INTERACTIVE WEBSITES #03</span>
            <span>DISRUPTIVE COMM. #04</span>
          </div>

          <div
            className="lite-section__headline"
            data-anim="section-headline"
          >
            <span>® SILENCIO IS A DESIGN STUDIO FOCUSED</span>
            <span>ON DIGITAL VISUAL LANGUAGES FOR DARING</span>
            <span>BRANDS OUTSIDE THE ✶ NORM</span>
          </div>

          <div className="lite-section__bottom" data-anim="section-bottom">
            <p style={{ fontSize: "10px", color: "Black" }}>
              WE ARE A DESIGN STUDIO SPECIALISED IN INTERACTIVE VISUAL
              LANGUAGES FOR ORGANISATIONS THAT WANT TO PUSH THE BOUNDARIES. WE
              BUILD FLEXIBLE AND AGILE BRANDS CAPABLE OF ADAPTING TO THE
              CONTEMPORARY CONTEXT IN WHICH THE SPEED OF CONSUMPTION REQUIRES
              HIGH-IMPACT CONTENT TO BE RELEVANT.
            </p>
            <p style={{ fontSize: "10px", color: "Black" }}>
              WE BUILD DIGITAL PRODUCTS WHERE INTERACTION WITH THE USER AND
              MOVEMENT ARE OF GREAT IMPORTANCE, WHICH ALLOWS US TO GENERATE
              UNIQUE EMOTIONS AND SENSATIONS.
            </p>
          </div>
        </div>
      </section>
      <section className="lite-bold">
        <div className="lite-bold__vertical">PRODUCTS © SELF SERVICE STORE</div>

        <div className="lite-bold__inner">
          <div className="lite-bold__headline" data-anim="bold-headline">
            <div className="lite-bold__line lite-bold__line--1">BOLD</div>
            <div className="lite-bold__line lite-bold__line--2">
              <span>THINKING</span>
              <span className="lite-bold__image-slot" aria-hidden="true" />
              <span>AS</span>
            </div>
            <div className="lite-bold__line lite-bold__line--3">A BASIS</div>
          </div>

          <div style={{ fontSize: "30px", color: "Black" }} className="lite-bold__sub" data-anim="bold-sub">
            REFRESH YOUR BUSINESS IDENTITY
          </div>

          <div className="lite-bold__meta">
            <div className="lite-bold__stamp" aria-hidden="true">
              <span>330 ml</span>
              <span>99.2%</span>
              <span>BRANDS</span>
              <span>SOLD</span>
            </div>

            <div className="lite-bold__icons" aria-hidden="true">
              <span className="lite-bold__icon">✴</span>
              <span className="lite-bold__icon">⌗</span>
              <span className="lite-bold__icon">◍</span>
            </div>
          </div>

          <div className="lite-bold__bottom">
            <p style={{ fontSize: "10px", color: "Black" }}>
              WE LOVE THINKING. EVERYTHING STARTS WITH AN IDEA AROUND WHICH WE
              CONSTRUCT THE ENTIRE BRAND COMMUNICATION, AN INGENIOUS CONCEPT
              THAT PROVIDES A DIFFERENTIAL VALUE AND IS SUITABLE TO ACHIEVE YOUR
              GOALS.
            </p>
            <p style={{ fontSize: "10px", color: "Black" }}>
              WE BELIEVE THAT DESIGNING BRANDS THAT REMAIN GRAPHICALLY
              UNCHANGED FOR 10 YEARS NO LONGER MAKES SENSE. WE WORK BASED ON
              CONCEPTS THAT GO BEYOND TIME AND PROVIDE THE BASIS OF AESTHETICS.
            </p>
          </div>
        </div>
      </section>


      {/* Service Section */}
      <section className="lite-products">
        <div className="lite-products__inner">
          <div className="product-tag product-tag--main">
            <div className="product-tag__id">#01</div>
            <div className="product-tag__vertical-left">BOLD THINKING AS A BASIS</div>
            <div className="product-tag__vertical-right">REFRESH YOUR BUSINESS IDENTITY</div>

            <div className="product-tag__bottom">
              <div className="product-tag__barcode-wrap">
                <div className="product-tag__barcode" />
                <div className="product-tag__purchased">PURCHASED</div>
              </div>

              <div className="product-tag__grid">
                <div className="product-tag__grid-col">
                  <div className="product-tag__row">
                    <span>FOR</span>
                    <span>330ML</span>
                  </div>
                  <div className="product-tag__row">
                    <span>INCOFORMISM</span>
                    <span>85%</span>
                  </div>
                  <div className="product-tag__row">
                    <span>INNOVATION</span>
                    <span>90%</span>
                  </div>
                  <div className="product-tag__row">
                    <span>CUSTOMIZATION</span>
                    <span>83%</span>
                  </div>
                  <div className="product-tag__row">
                    <span>THINKING</span>
                    <span>62%</span>
                  </div>
                  <div className="product-tag__row">
                    <span>DIFFERENTIATION</span>
                    <span>71%</span>
                  </div>
                  <div className="product-tag__row">
                    <span>ACCURATE</span>
                    <span>87%</span>
                  </div>
                  <div className="product-tag__row">
                    <span>SCREEN ORIENTED</span>
                    <span>96%</span>
                  </div>
                  <div className="product-tag__row">
                    <span>BORING PROJECTS</span>
                    <span>0%</span>
                  </div>
                </div>
                <div className="product-tag__grid-col">
                  <div>Ingredients: Concept, naming, storytelling, verbal identity, positioning, brand purpose</div>
                  <div style={{ marginTop: '8px' }}>* Concepts don't have an expiration date.</div>
                  <div style={{ marginTop: '12px', fontWeight: '500' }}>DIGITAL PRODUCTS FOR CONTEMPORARY BRANDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lite-aesthetics">
        <div className="lite-aesthetics__vertical" aria-hidden="true">
          WORK WARRANTY ⓘ NO RETURN PC
        </div>



        <div className="lite-aesthetics__wrap">
          <div className="lite-aesthetics__content">
            <div className="lite-aesthetics__left">
              <h2 className="lite-aesthetics__headline">
                <span className="lite-aesthetics__line">AESTHETICS</span>
                <span className="lite-aesthetics__line lite-aesthetics__line--with-img">
                  FOR AN
                  <span className="lite-aesthetics__img-block" aria-hidden="true" />
                  EVER-CHANGING
                </span>
                <span className="lite-aesthetics__line">CONTEXT</span>
              </h2>
              <div className="lite-aesthetics__extra-hot">EXTRA HOT</div>
            </div>

            <div className="lite-aesthetics__right">
              <div className="lite-aesthetics__badge">
                <span className="lite-aesthetics__badge-id">#02</span>
                <span className="lite-aesthetics__badge-label">VISUAL LANGUAGES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lite-featured">
        <div className="lite-featured__vertical" aria-hidden="true">
          FEATURED IN AWW POLICY
        </div>

        <div className="lite-featured__top">
          <div className="lite-featured__icons">
            <span className="lite-featured__icon" aria-hidden="true">△</span>
            <span className="lite-featured__icon" aria-hidden="true">▢</span>
          </div>
          <h2 className="lite-featured__heading">
            EXTRA HOT &amp;<br />NICE!
          </h2>
        </div>

        <div className="lite-featured__main">
          <div className="lite-featured__cols">
            <div className="lite-featured__col">
              NEW VISUAL LANGUAGES ADAPT TO SCREENS, ESPECIALLY MOBILE PHONES. FOR A LONG TIME NOW, A BRAND IS NO LONGER JUST A LOGO. IN FACT, THE LOGO HAS BECOME PART OF THE BACKGROUND AND IS NO LONGER THE KEY OF IDENTITY. IT IS ESSENTIAL.
            </div>
            <div className="lite-featured__col">
              WE GENERATE VISUAL SYSTEMS THAT TRANSMIT BRAND VALUES IN A LOGICAL AND DIRECT WAY. EACH ORGANISATION HAS ITS OWN CONTEXT AND ITS OWN GOALS, SO WE UNDERSTAND THAT THE AESTHETIC SOLUTION FOR EACH COMPANY SHOULD BE DIFFERENT.
            </div>
            <div className="lite-featured__col">
              DESIGN IS OUR TOOL TO SYNTHESISE AND TRANSMIT AN ORGANISATION&apos;S IDENTITY. WE STRONGLY BELIEVE IN THE TRANSFORMATIVE CAPACITY OF DESIGN. FOR US, TYPOGRAPHY IS ONE OF THE MAJOR ELEMENTS FOR BRAND CREATION, SINCE IT VISUALLY CRYSTALLISES ITS ENTIRE IDENTITY.
            </div>
          </div>

        </div>

        <div className="lite-featured__bottom">
          <div
            className="lite-featured__img-block"
            style={{ backgroundImage: "url(https://biztalbox.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial.f2f9d138.webp&w=1200&q=75)" }}
            aria-hidden="true"
          />
          <h2 className="lite-featured__big-headline">
            <span>WE</span> <span>EXPERIMENT</span> <span>WITH</span> <span>UNUSUAL</span>{' '}
            <span>WAYS</span> <span>OF</span> <span>VISUAL</span> <span>EXPRESSION</span>{' '}
            <span className="lite-featured__tag">KEEP IN A COOL AND DRY PLACE</span>{' '}
            <span>MIXING</span> <span>DIFFERENT</span>{' '}
            <span className="lite-featured__tag">SCREEN ORIENTED</span>{' '}
            <span>DISCIPLINES</span> <span>TO</span> <span>GENERATE</span>{' '}
            <span>LIVING</span> <span>BRANDS</span> <span>THAT</span> <span>INTERACT</span>{' '}
            <span>WITH</span> <span>THE</span> <span>USER</span>
          </h2>
        </div>
      </section>

      <section className="lite-projects">
        <div className="lite-projects__vertical" aria-hidden="true">
          PROJECTS
        </div>

        <div className="lite-projects__wrap">
          <div className="lite-projects__main">
            <div className="lite-projects__headline-track" aria-hidden="true">
              <div className="lite-projects__headline-inner">
                <h2 className="lite-projects__main-headline">
                  <span>SA</span>
                  <span className="lite-projects__headline-img-slot"
                    style={{ backgroundImage: "url(https://biztalbox.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseo.0f33ee3b.webp&w=1200&q=75)" }}
                  />
                  <span>MUST</span>
                  <span>MOTI</span>
                </h2>
                <h2 className="lite-projects__main-headline" aria-hidden="true">
                  <span>SA</span>
                  <span className="lite-projects__headline-img-slot"
                    style={{ backgroundImage: "url(https://biztalbox.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseo.0f33ee3b.webp&w=1200&q=75)" }}
                  />
                  <span>MUST</span>
                  <span>MOTI</span>
                </h2>
              </div>
            </div>

            <div className="lite-projects__sub">
              <span className="lite-projects__sub-icon" aria-hidden="true">S</span>
              <h3 className="lite-projects__sub-headline">REALLY COOL PROJECTS</h3>
            </div>

            <div className="lite-projects__cols">
              <p className="lite-projects__col">
                DIGITAL PRESENCE HAS BECOME ABSOLUTELY MANDATORY FOR ALL ORGANISATIONS. A WELL-DESIGNED WEBSITE THAT REFLECTS THE IDENTITY AND VALUES OF A COMPANY IS AN ESSENTIAL TOOL FOR COMMUNICATION AND GROWTH. WE CREATE SITES THAT CONNECT WITH USERS AND STRENGTHEN THE BRAND.
              </p>
              <p className="lite-projects__col">
                NOWADAYS, THE WEBSITE IS AN IMPORTANT PART OF THE BRAND. IT IS OFTEN THE FIRST POINT OF CONTACT WITH THE USER AND MUST TRANSMIT TRUST, CLARITY AND PROFESSIONALISM. WE DESIGN INTERACTIVE EXPERIENCES THAT LEAVE A LASTING IMPRESSION AND DRIVE CONVERSIONS.
              </p>
            </div>

            <h2 className="lite-projects__bottom-headline">
              WE DESIGN INTERACTIVE SITES THAT ALLOW THE USER TO ENJOY A UNIQUE AND MEMORABLE EXPERIENCE.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}


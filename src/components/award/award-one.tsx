"use client";
import React, { useState } from "react";
import Model3D from '../3d-model';
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    modelPath: "/models/MILAN .obj",
    subtitle: "x2",
    title: "Business has only two functions- marketing and innovation.",
    Author: "Milan Kundera",
  },
  {
    id: 2,
    modelPath: "/models/TOM.obj",
    subtitle: "x3",
    title: "The best marketing doesn't feel like marketing.",
    Author: "Tom Fishburne",
  },
  {
    id: 3,
    modelPath: "/models/CHET.obj",
    subtitle: "x1",
    title: "Advertising brings in the customers, but it is your job to keep them buying from you.",
    Author: "Chet Holmes",
  },
  {
    id: 4,
    modelPath: "/models/JOHNATHAN.obj",
    subtitle: "x1",
    title: "As marketers, we should be changing the mantra from always be closing to always be helping.",
    Author: "Jonathan Lister",
  },
  {
    id: 5,
    modelPath: "/models/MATT CUTTS.obj",
    subtitle: "x2",
    title: "Think about what the user is going to type",
    Author: "Matt Cutts",
  },
  {
    id: 6,
    modelPath: "/models/PETER DUCKER.obj",
    subtitle: "x1",
    title: "The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.",
    Author: "Peter Drucker",
  },
];

const about_faq_data = [
  {
    id: 1,
    question: "What services does Biztalbox offer?",
    answer:
      "Biztalbox offers everything you need to build and grow your brand online. Our services include branding, website development, SEO, social media marketing, content writing, graphic design, video editing, and paid advertising. You can choose a single service or partner with Biztalbox for complete digital marketing support.",
  },
  {
    id: 2,
    question: "What kind of businesses does Biztalbox work with?",
    answer:
      "Biztalbox supports businesses at every stage of their journey. We work with startups, growing businesses, and established brands across a wide range of industries.",
  },
  {
    id: 3,
    question: "Can I hire Biztalbox for just one service?",
    answer:
      "Yes. Biztalbox begins every project with a consultation. And then we take the time to consider your needs and goals before making a decision. Some businesses only need a new website or SEO. Others need a complete digital marketing strategy. We don't believe in selling services you won't benefit from.",
  },
  {
    id: 4,
    question: "How does Biztalbox approach a new project?",
    answer:
      "At Biztalbox, we start with a thorough research. We take the time to understand your business, your audience, and your competitors before making recommendations. When the strategy is clear, our team brings it to life through design, content, development, and marketing.",
  },
  {
    id: 5,
    question: "Does Biztalbox work with international clients?",
    answer:
      "Yes. Biztalbox works with businesses all over the world. We work remotely with clear communication at every stage.",
  },
  {
    id: 6,
    question: "What makes Biztal Box different from other digital marketing agencies?",
    answer:
      "Biztal Box believes every good strategy starts with research. We don't rely on assumptions or copy the same approach for every client. We study your business, understand your audience, and analyze your competitors before making decisions. This helps us create marketing strategies that are thoughtful, practical as well as sustainable.",
  },
];

type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeThumb, setActiveThumb] = useState(1);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`tp-award-area ${cls} black-bg${abStyle ? " ab-award-faq-section" : ""}`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Our Thoughts
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm ab-award-faq-heading">
                <span>
                  <Leaf />
                  Frequently Asked Questions
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative" style={{ height: "500px" }}>
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
                style={{ width: "100%", height: "100%" }}
              >
                {award_data.map((item) => (
                  <Model3D
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    modelPath={item.modelPath || "/models/default.glb"}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={`col-xl-8 col-lg-8 col-md-12${abStyle ? " ab-award-faq-col" : " person_3d"}`}>
            {abStyle ? (
              <div className="ab-award-faq-wrap">
                {about_faq_data.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`ab-award-faq-item${isOpen ? " is-open" : ""}`}
                    >
                      <button
                        type="button"
                        className="ab-award-faq-question"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(item.id)}
                      >
                        <span className="ab-award-faq-q-text">{item.question}</span>
                        <span className="ab-award-faq-icon" aria-hidden="true" />
                      </button>
                      <div
                        className="ab-award-faq-answer"
                        hidden={!isOpen}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="tp-award-list-wrap">
                {award_data.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveThumb(item.id)}
                    className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                    rel={`tp-award-list-thumb-${item.id}`}
                  >
                    <div
                      className="tp-award-list-content-left d-flex align-items-end"
                      style={{ justifyContent: "space-between", gap: "20px" }}
                    >
                      <p className="text-white">{item.title}</p>
                      <span style={{ whiteSpace: "nowrap", color: "white" }}>{item.Author}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;

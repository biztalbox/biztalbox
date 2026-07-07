"use client";

import React, { useState } from "react";
import SafeHtml from "@/components/seo-page/SafeHtml";

type IProps = {
  item: { id: number; question: string; answer: string };
  isOpen?: boolean;
  onToggle?: () => void;
};

export default function FaqItem({ item }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `collapse-${item.id}`;

  return (
    <div className="accordion-items bb-faq-item">
      <h3 className="accordion-header">
        <button
          style={{ fontSize: "1.2rem !important" }}
          className={`accordion-buttons${isOpen ? "" : " collapsed"}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {item.question}
          <span className="accordion-icon"></span>
        </button>
      </h3>
      <div
        id={panelId}
        className={`bb-faq-panel${isOpen ? " bb-faq-panel--open" : ""}`}
        role="region"
        aria-hidden={!isOpen}
      >
        <div
          className="accordion-body bb-faq-answer"
          style={{ paddingLeft: "30px", paddingBottom: "20px" }}
        >
          <div className="bb-faq-answer-inner" style={{ fontSize: "1rem !important" }}>
            <SafeHtml html={item.answer} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bb-faq-panel:not(.bb-faq-panel--open) {
          display: none !important;
        }

        .bb-faq-panel--open {
          display: block !important;
          height: auto !important;
          max-height: none !important;
          overflow: visible !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .bb-faq-panel--open :global(.bb-faq-answer),
        .bb-faq-panel--open :global(.bb-faq-answer-inner),
        .bb-faq-panel--open :global(.bb-faq-answer p),
        .bb-faq-panel--open :global(.bb-faq-answer li),
        .bb-faq-panel--open :global(.bb-faq-answer span),
        .bb-faq-panel--open :global(.bb-faq-answer div) {
          color: var(--app-text) !important;
          opacity: 1 !important;
          visibility: visible !important;
          height: auto !important;
          max-height: none !important;
          overflow: visible !important;
          transform: none !important;
        }
      `}</style>
    </div>
  );
}

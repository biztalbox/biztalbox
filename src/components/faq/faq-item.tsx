import React from "react";
import SafeHtml from "@/components/seo-page/SafeHtml";

type IProps = {
  item: { id: number; question: string; answer: string };
};

export default function FaqItem({ item }: IProps) {
  return (
    <div className="accordion-items">
      <h3 className="accordion-header">
        <button
          style={{ fontSize: "1.2rem !important" }}
          className="accordion-buttons collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${item.id}`}
          aria-expanded="true"
          aria-controls={`collapse-${item.id}`}
        >
          {item.question}
          <span className="accordion-icon"></span>
        </button>
      </h3>
      <div
        id={`collapse-${item.id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={{ paddingLeft: "30px", paddingBottom: "20px" }}>
          <div style={{ fontSize: "1rem !important" }}>
            <SafeHtml html={item.answer} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useId, useMemo, useState } from "react";
import SafeHtml from "@/components/seo-page/SafeHtml";

type IProps = {
  item: { id: number; question: string; answer: string };
  isOpen?: boolean;
  onToggle?: () => void;
};

export default function FaqItem({ item, isOpen, onToggle }: IProps) {
  const reactId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = isOpen ?? uncontrolledOpen;
  const handleToggle = onToggle ?? (() => setUncontrolledOpen((v) => !v));
  const answerId = useMemo(
    () => `faq-answer-${item.id}-${reactId}`,
    [item.id, reactId],
  );

  return (
    <div className="accordion-items">
      <h3 className="accordion-header">
        <button
          style={{ fontSize: "20px", lineHeight: 1.2 }}
          className={`accordion-buttons ${open ? "" : "collapsed"}`}
          type="button"
          onClick={handleToggle}
          aria-expanded={open}
          aria-controls={answerId}
        >
          {item.question}
          <span className="accordion-icon"></span>
        </button>
      </h3>
      {open ? (
        <div
          id={answerId}
          className="accordion-body"
          style={{
            paddingLeft: "30px",
            paddingBottom: "20px",
            color: "#929298",
          }}
        >
          <div style={{ fontSize: "16px", lineHeight: 1.7, color: "inherit" }}>
            <SafeHtml html={item.answer} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

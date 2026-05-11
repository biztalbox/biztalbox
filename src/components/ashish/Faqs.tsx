import React, { useCallback, useState } from "react";
import FaqItem from "../faq/faq-item";
import { IFaq } from "@/types/faq-d-t";

export default function FaqArea({ faq_data }: { faq_data?: IFaq[] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="fq-faq-area fq-faq-bdr">
      <div className="tp-service-2-accordion-box" style={{ height: "auto" }}>
        <div className="accordion" id="accordionExample">
          {faq_data?.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from "@/assets/img/inner-faq/faq/banner-faq.jpg";
import FaqItem from "../faq/faq-item";
import { IFaq } from "@/types/faq-d-t";

export default function FaqArea({ faq_data }: { faq_data?: IFaq[] }) {
  return (
    <div className="fq-faq-area fq-faq-bdr">
      <div className="tp-service-2-accordion-box" style={{height: "auto"}}>
        <div className="accordion" id="accordionExample">
          {faq_data?.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

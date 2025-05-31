import React from "react";
import Dots from "../svg/dots";
import EnquiryForm from "./EnquiryForm";

const ServiceHighlights = ({color, highlights, services}: {color: string, highlights: string[], services: string[]}) => {
  return (
    <section className="mb-40 tp-btn-trigger">
          <div className="mb-40">
            <span className="tp-section-subtitle tp_fade_bottom" style={{color: color, fontWeight: 700, letterSpacing: 1}}>
              Why Choose Us
            </span>
            <h5 className="tp-section-title tp_fade_bottom" style={{color: "#fff", fontWeight: 600, lineHeight: 1.1, fontSize: "1.8rem", marginBottom: 24}}>
              Digital Marketing that drives real results
            </h5>
            <ul style={{listStyle: "none", padding: 0, margin: 0}}>
              {highlights.map((item, i) => (
                <li key={i} className="d-flex align-items-center mb-3" style={{fontSize: "1rem", color: "#fff", fontWeight: 500}}>
                  <span style={{color: color, marginRight: 12, display: "flex", alignItems: "center"}}>
                    <i className="fa-sharp fa-light fa-check" style={{fontSize: 20}}></i>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-40">
          <span className="tp-section-subtitle tp_fade_bottom" style={{color: color, fontWeight: 700, letterSpacing: 1}}>
              What we do
            </span>
            <h5 className="tp-section-title tp_fade_bottom" style={{color: "#fff", fontWeight: 600, fontSize: "1.8rem", marginBottom: 24}}>
              Our Services
            </h5>
            <div className="row g-3">
              {services.map((service, i) => (
                <div key={i} className=" w-auto">
                  <div
                    className="d-flex align-items-center justify-content-start px-3 py-0"
                    style={{
                      background: "#232323",
                      borderRadius: 12,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      boxShadow: "0 2px 8px rgba(255,79,161,0.07)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      minHeight: 45,
                    }}
                  >
                    <span style={{marginRight: 8, color: color, display: "flex", alignItems: "center"}}>
                      <Dots />
                    </span>
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <EnquiryForm color={color} />
    </section>
  );
};

export default ServiceHighlights; 
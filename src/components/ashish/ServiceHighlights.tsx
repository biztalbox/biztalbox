import React, { useMemo, useCallback } from "react";
import Dots from "../svg/dots";
import EnquiryForm from "./EnquiryForm";
import Faqs from "./Faqs";
import { IFaq } from "@/types/faq-d-t";

const ServiceHighlights = ({
  color,
  highlights,
  servicesData,
  textColor,
  faq_data,
}: {
  color: string;
  highlights: string[];
  servicesData: {
    id: number;
    name: string;
    description: string;
  }[];
  textColor?: string;
  faq_data?: IFaq[];
}) => {
  const [activeService, setActiveService] = React.useState<number | null>(1);

  // Memoize RGB values to prevent repeated parsing
  const colorRGB = useMemo(() => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return { r, g, b };
  }, [color]);

  // Memoize active service data to avoid repeated array searches
  const activeServiceData = useMemo(() => {
    return activeService ? servicesData.find(s => s.id === activeService) : null;
  }, [activeService, servicesData]);

  // Memoize service click handler
  const handleServiceClick = useCallback((serviceId: number) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  }, [activeService]);

  return (
    <section className="mb-40 tp-btn-trigger">
      <div className="mb-40">
        <span
          className="tp-section-subtitle tp_fade_bottom"
          style={{ color: color, fontWeight: 700, letterSpacing: 1 }}
        >
          Why Choose Us
        </span>
        <h5
          className="tp-section-title tp_fade_bottom"
          style={{
            color: "#fff",
            fontWeight: 600,
            lineHeight: 1.1,
            fontSize: "1.8rem",
            marginBottom: 24,
          }}
        >
          Digital Marketing that drives real results
        </h5>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {highlights.map((item, i) => (
            <li
              key={i}
              className="d-flex align-items-center mb-3"
              style={{ fontSize: "1rem", color: "#fff", fontWeight: 500 }}
            >
              <span
                style={{
                  color: color,
                  marginRight: 12,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className="fa-sharp fa-light fa-check"
                  style={{ fontSize: 20 }}
                ></i>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Interactive Services Section */}
      <div className="mb-40">
        <span
          className="tp-section-subtitle tp_fade_bottom"
          style={{ color: color, fontWeight: 700, letterSpacing: 1 }}
        >
          What we do
        </span>
        <h5
          className="tp-section-title tp_fade_bottom"
          style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.8rem",
            marginBottom: 24,
          }}
        >
          Our Services
        </h5>
        
        {/* Service Pills Container */}
        <div className="services-pills-container">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`service-pill ${activeService === service.id ? 'active' : ''}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <span className="service-pill-dots">
                <Dots />
              </span>
              <span className="service-pill-name">{service.name}</span>
            </button>
          ))}
        </div>

        {/* Active Service Description */}
        {activeServiceData && (
          <div className="active-service-description">
            <div className="service-description-content">
              <h4 className="service-description-title">
                {activeServiceData.name}
              </h4>
              <p className="service-description-text">
                {activeServiceData.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <EnquiryForm color={color} textColor={textColor} />

      {/* FAQ Section */}
      {faq_data && (
        <div className="mb-40 mt-40">
          <h4 style={{ color: color, marginBottom: 24 }}>
            Frequently Asked Questions
          </h4>
          <Faqs faq_data={faq_data} />
        </div>
      )}

      <style jsx>{`
        /* Services Pills Styles */
        .services-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        .service-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.4);
          border-radius: 50px;
          padding: 8px 16px;
          color: #e0e0e0;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }

        .service-pill:hover {
          background: rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.15);
          border-color: ${color};
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.3);
        }

        .service-pill.active {
          background: ${color};
          border-color: ${color};
          color: #000;
          font-weight: 600;
        }

        .service-pill-dots {
          display: flex;
          align-items: center;
          font-size: 1rem;
        }

        .service-pill-name {
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }

        .active-service-description {
          margin-top: 20px;
          padding: 20px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.3);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          animation: slideDown 0.3s ease;
        }

        .service-description-content {
          max-width: 100%;
        }

        .service-description-title {
          color: ${color};
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .service-description-text {
          color: #e0e0e0;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 300px;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .services-pills-container {
            gap: 8px;
          }
          
          .service-pill {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
          
          .service-pill-name {
            font-size: 0.75rem;
          }
          
          .service-pill-dots {
            font-size: 0.9rem;
          }

          .service-description-title {
            font-size: 1.1rem;
          }

          .service-description-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceHighlights;

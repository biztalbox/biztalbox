"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        setIsLoading(true);
        e.preventDefault();
  
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
          name: formData.get("name")?.toString().trim(),
          email: formData.get("email")?.toString().trim(),
          number: formData.get("phone")?.toString().trim(),
          message: formData.get("message")?.toString().trim(),
        };
  
        if (!data.name) throw new Error("Name is required");
        if (!data.number) throw new Error("Phone number is required");
        if (!data.message) throw new Error("Message is required");
  
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          const res = await response.json();
          if (!res.success) throw new Error(res.message);
        }
  
        setFormMessage("Thank you, your message has been sent.");
        setIsSuccess(true);
        form.reset();
        
        // Redirect to thank you page after a short delay
        
        router.push('/thank-you');
      } catch (error: any) {
        setFormMessage(error.message);
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };


  return (
    <div className="contact-section-wrapper black-bg">
      {/* Light header section */}
      <div className="header-section bg-light d-flex flex-column flex-xl-row justify-content-between align-items-xl-end gap-4 gap-md-0">
        <h1 className="title order-2 order-xl-1 text-start">How can we address you?</h1>
        <div className="d-flex flex-column gap-5 header_content_links order-1 order-xl-2 fs-5 fs-md-4 text-black align-items-end">
          <div className="d-flex flex-column gap-0 align-items-end">
            <span>DROP US A LINE AT</span>
            <Link href="mailto:info@biztalbox.com" target="_blank" rel="noopener noreferrer nofollow">INFO@BIZTALBOX.COM</Link>
          </div>
          <div className="d-flex flex-row gap-3">
            <Link href="https://www.instagram.com/biztalbox" target="_blank" rel="noopener noreferrer nofollow">Instagram</Link>
            <Link href="https://www.facebook.com/BiztalBox" target="_blank" rel="noopener noreferrer nofollow">Facebook</Link>
            <Link href="https://x.com/BiztalBox" target="_blank" rel="noopener noreferrer nofollow">Twitter</Link>
            <Link href="https://www.linkedin.com/company/biztalbox" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</Link>
          </div>
        </div>
      </div>

      {/* Dark form section */}
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="form-field">
          <label htmlFor="name" className="field-label">
            Please enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="field-input"
            required
          />
        </div>

        {/* Email field */}
        <div className="form-field">
          <label htmlFor="email" className="field-label">
            Please enter your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            className="field-input"
          />
        </div>

        {/* Phone field */}
        <div className="form-field">
          <label htmlFor="phone" className="field-label">
            Please enter your phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            className="field-input"
            required
          />
        </div>

        {/* Message field - spans 2 columns */}
        <div className="form-field message-field">
          <label htmlFor="message" className="field-label">
            Your message here
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows={1}
            className="field-input"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-button d-flex flex-column align-items-start justify-content-end gap-2" disabled={isLoading}>
        {formMessage && (
            <span
              className={`${isSuccess ? "text-info" : "text-danger"} error-message text-start`}
            >
              {formMessage}
            </span>
          )}
          <span>{isLoading ? "SUBMITTING..." : "SUBMIT"}</span>
        </button>
      </form>

      <style jsx>{`
        .contact-section-wrapper {
          width: 100%;
          border-radius: 10px;
        }

        .header-section {
          background-color: #f3f4f6;
          padding-top: 5rem;
          padding-bottom: 0.5rem;
          border-radius: 10px;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 768px) {
          .header-section {
            padding-top: 10rem;
          }
        }

        .title {
          font-size: 2.25rem;
          font-weight: 400;
          color: #1f2937;
        }

        @media (min-width: 768px) {
          .title {
            font-size: 3.75rem;
          }
        }

        .form-container {
          padding: 0.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 768px) {
          .form-container {
            grid-template-columns: repeat(5, 1fr);
          }
          .form-field {
            border-right: 1px solid #374151;
          }
        }

        .form-field {
          padding-top: 5rem;
          padding: 5px;
          border-bottom: 1px solid #374151;
        }

        @media (min-width: 768px) {
          .form-field {
            padding-top: 10rem;
          }
        }

        .field-label {
          display: block;
          color: white;
          font-size: 1.5rem;
        }

        .field-input {
          width: 100%;
          background-color: transparent;
          color: #9ca3af;
          font-size: 1.5rem;
          border: none;
          outline: none;
          padding: 0;
          margin: 0;
        }

        .field-input::placeholder {
          font-size: 1.5rem;
        }

        textarea.field-input {
          resize: none;
        }

        textarea.field-input::placeholder {
          font-size: 1.5rem;
          color: #9ca3af;
          line-height: 3rem;
        }

        .submit-button {
          border-radius: 0.5rem;
          height: 100%;
          width: 100%;
          background-color: rgb(34, 41, 49);
          color: white;
          font-size: 1.5rem;
          font-weight: 500;
          transition: background-color 0.2s, color 0.2s;
          padding: 1rem;
          display: flex;
          justify-content: start;
          align-items: end;
        }

        .submit-button:hover, .submit-button:active, .submit-button:focus {
          background-color: white;
          color: black;
        }
        .error-message {
        font-size: 1rem;
        }
      `}</style>
    </div>
  );
}

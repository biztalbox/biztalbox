"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
// prop type
type IProps = {
  btnCls?: string;
};
export default function ContactForm({ btnCls = "" }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
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

      toast.success("Thankyou, your message has been sent.");
      form.reset();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <div className="cn-contactform-input mb-25">
          <label>Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>Phone</label>
          <input id="phone" name="phone" type="tel" required />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>Email</label>
          <input id="email" name="email" type="text" />
        </div>

        <div className="cn-contactform-input mb-25">
          <label>Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="cn-contactform-btn">
          <button
            className={`tp-btn-black-md ${btnCls} w-100`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
}

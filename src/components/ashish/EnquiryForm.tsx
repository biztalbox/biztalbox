import React, { useState } from "react";
import styles from "./EnquiryForm.module.css";
import { ArrowBg } from "../svg";
import { RightArrowTwo } from "../svg";
import { useRouter } from "next/navigation";

const EnquiryForm = ({ color }: { color: string }) => {
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

      setIsSuccess(true);
      form.reset();

      // Redirect to thank you page after a short delay

      router.push("/thank-you");
    } catch (error: any) {
      setFormMessage(error.message);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formRoot}
      autoComplete="off"
    >
      <h3 style={{ color: color, marginBottom: 24}}>
        {/* Send us a message */}
        {/* Got something to say? */}
        Let&apos;s talk about your project
        {/* Let's Begin this Journey  */}
        {/* Reach out to us */}
      </h3>
      {/* <span className={styles.underline}></span> */}

      <div
        className={styles.formRow}
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          flexFlow: "row wrap",
          alignItems: "center",
        }}
      >
        <span>Hello! I&apos;m</span>
        <span className={styles.asterisk}>*</span>
        <input
          className={styles.inputField}
          name="name"
          placeholder="your name here"
          required
        />
        <span>my</span> <span>phone</span> <span>number</span> <span>is</span>{" "}
        <span className={styles.asterisk}>*</span>
        <input
          className={styles.inputField}
          name="phone"
          placeholder="type phone number here"
          required
        />
        <span>and</span> <span>email</span> <span>address</span> <span>is</span>{" "}
        <span className={styles.asterisk}>*</span>
        <input
          className={styles.inputField}
          name="email"
          placeholder="type email here"
          required
          type="email"
          style={{ flexBasis: "30%" }}
        />
        <span>I&apos;m</span> <span>looking</span> <span>to</span> <span>get</span>{" "}
        <span>your</span> <span>help</span> <span>with</span>{" "}
        <span className={styles.asterisk}>*</span>
        <input
          className={styles.inputField}
          name="message"
          placeholder="type your message here"
          style={{ flexGrow: 10 }}
          required
        />
      </div>
      <div>
      {formMessage && (
          <p
            className={`${
              isSuccess ? "text-success" : "text-danger"
            } error-message text-start`}
          >
            {formMessage}
          </p>
        )}

        <button
          className="tp-btn-black-2 tp_fade_bottom z-0"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : <>Send Message</>}
          <span className="p-relative">
            <RightArrowTwo />
            <ArrowBg />
          </span>
        </button>

        
      </div>

      <style jsx>{`
        input:focus {
          border-color: ${color} !important;
        }
      `}</style>
    </form>
  );
};

export default EnquiryForm;

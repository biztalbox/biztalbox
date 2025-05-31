import React, { useState, useEffect } from "react";
import styles from "./EnquiryForm.module.css";
import { ArrowBg } from "../svg";
import { RightArrowTwo } from "../svg";
import { useRouter } from "next/navigation";

const EnquiryForm = ({ color }: { color: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const wrapper = (event.target as HTMLElement).closest(".field-wrapper");
      const allBorders = document.querySelectorAll(`.${styles.inputBorder}`);

      if (wrapper) {
        const inputBorder = wrapper.querySelector(`.${styles.inputBorder}`);

        if (inputBorder) {
          allBorders.forEach((border) => {
            if (border !== inputBorder) {
              border.classList.remove(styles.active);
              border.classList.add(styles.inactive);
            }
          });

          inputBorder.classList.add(styles.active);
          inputBorder.classList.remove(styles.inactive);
        }
      } else {
        allBorders.forEach((border) => {
          border.classList.remove(styles.active);
          border.classList.add(styles.inactive);
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

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
      <h3 style={{ color: color, marginBottom: 24 }}>
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
        <div className="field-wrapper">
          <div className={styles.textField}>
            <input
              className={styles.inputField}
              name="name"
              placeholder="your name here"
              required
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="#fff"
                d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
              ></path>
            </svg> */}
            <div className={styles.inputBorder}></div>
          </div>
        </div>
        <span>my</span> <span>phone</span> <span>number</span> <span>is</span>{" "}
        <span className={styles.asterisk}>*</span>
        <div className="field-wrapper">
          <div className={styles.textField}>
            <input
              className={styles.inputField}
              name="phone"
              placeholder="type phone here"
              required
            />
            <div className={styles.inputBorder}></div>
          </div>
        </div>
        <span>and</span> <span>email</span> <span>address</span> <span>is</span>{" "}
        {/* <span className={styles.asterisk}>*</span> */}
        <div className="field-wrapper" style={{ flexBasis: "30%" }}>
          <div className={styles.textField}>
            <input
              className={styles.inputField}
              name="email"
              placeholder="type email here"
              type="email"
            />
            
            <div className={styles.inputBorder}></div>
          </div>
        </div>
        <span>I&apos;m</span> <span>looking</span> <span>to</span>{" "}
        <span>get</span> <span>your</span> <span>help</span> <span>with</span>{" "}
        <span className={styles.asterisk}>*</span>
        <div className="field-wrapper" style={{ flexGrow: 10 }}>
          <div className={styles.textField}>
            <input
              className={styles.inputField}
              name="message"
              placeholder="type your message here"
              required
            />
            <div className={styles.inputBorder}></div>
          </div>
        </div>
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
        // input:focus, .inputBorder{
        //   border-color: ${color} !important;
        // }
      `}</style>
    </form>
  );
};

export default EnquiryForm;

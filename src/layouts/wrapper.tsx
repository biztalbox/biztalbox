"use client";
import React from "react";
import BackToTop from "@/components/back-to-top";
import WhatsAppButton from "@/components/whatsapp-button";
import ThemeSetting from "@/components/theme-setting";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
  showWhatsApp?: boolean;
}

const Wrapper = ({ children, showBackToTop = true, showWhatsApp = true }: WrapperProps) => {
  return (
    <React.Fragment>
      {children}
      {showWhatsApp && <WhatsAppButton />}
      {showBackToTop && <BackToTop />}
      <ThemeSetting />
    </React.Fragment>
  );
};

export default Wrapper;

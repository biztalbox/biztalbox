import React from "react";
import { Metadata } from "next";
import ContactTwoMain from "@/pages/contact/contact-2";

export const metadata: Metadata = {
  title: "Contact Us - Biztal Box",
};

const ContactTwoPage = () => {
  return (
    <ContactTwoMain/>
  );
};

export default ContactTwoPage;

import React from "react";
import { Metadata } from "next";
// import ContactTwoMain from "@/pages/contact/contact-2";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us - Biztal Box",
};

const ContactTwoPage = () => {
  return (
    <ContactPage/>
  );
};

export default ContactTwoPage;

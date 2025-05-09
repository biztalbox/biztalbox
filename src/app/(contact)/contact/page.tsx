import { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Contact Us - Biztal Box",
  description: "Get in touch with our team for personalized digital marketing and web development solutions. We're here to answer your questions and help your business grow."
};

export const metadata = createMetadata(baseMetadata, '/contact');

const ContactTwoPage = () => {
  return (
    <ContactPage/>
  );
};

export default ContactTwoPage;

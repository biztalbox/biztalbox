import { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Contact Us - Biztal Box",
  description: "Get in touch with our team for personalized digital marketing and web development solutions. We're here to answer your questions and help your business grow."
};

export const metadata = createMetadata(baseMetadata, '/contact');

const ContactTwoPage = () => {
  const schemaProps = createSchemaProps('contact', '/contact');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/contact')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <ContactPage/>
    </SchemaProvider>
  );
};

export default ContactTwoPage;

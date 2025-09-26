import { Metadata } from "next";
import PortfolioWrapperMain from "@/components/portfolio/portfolio-wrapper-main";
import {
  createMetadata,
  createSchemaProps,
  createFullUrl,
} from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Marketing Agency in Indianapolis",
  description:
    "Discover our comprehensive range of digital marketing and web development services designed to help your business grow online. Marketing Agency in Indianapolis",
};

export const metadata = createMetadata(baseMetadata, "/marketing");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaProps = createSchemaProps("service", "/marketing");

  return (
    <SchemaProvider
      schemaProps={schemaProps}
      currentUrl={createFullUrl("/marketing")}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      {children}
    </SchemaProvider>
  );
}

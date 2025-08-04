import { Metadata } from "next/types";
import MotionGraphicsPage from "./page";
import { createFullUrl, createMetadata, createSchemaProps } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Motion Graphics Design Agency | Bring Your Ideas to Life",
  description: "Looking for eye-catching animations? Our motion graphics team creates captivating visuals that grab attention and explain your message clearly. Let's bring your ideas to life!"
};

export const metadata = createMetadata(baseMetadata, '/motion-graphics');

export default function MotionGraphicsLayout() {
  const schemaProps = createSchemaProps('service', '/motion-graphics');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/motion-graphics')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <MotionGraphicsPage />
    </SchemaProvider>
  );
} 
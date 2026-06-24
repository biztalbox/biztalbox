import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "./graphic.css";

const baseMetadata: Metadata = {
  title: "UK Graphic Design Studio | Biztalbox",
  description:
    "Brand identity, print, and digital design that makes people stop scrolling and start believing. Based in London, working worldwide.",
};

export const metadata = createMetadata(baseMetadata, "/graphic");

export default function GraphicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

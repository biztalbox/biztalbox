import { Metadata } from "next/types";
import MotionGraphicsPage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Motion Graphics Design Agency | Bring Your Ideas to Life",
  description: "Looking for eye-catching animations? Our motion graphics team creates captivating visuals that grab attention and explain your message clearly. Let's bring your ideas to life!"
};

export const metadata = createMetadata(baseMetadata, '/motion-graphics');

export default function MotionGraphicsLayout() {
  return <MotionGraphicsPage />;
} 
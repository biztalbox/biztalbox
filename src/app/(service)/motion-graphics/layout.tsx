import { Metadata } from "next/types";
import MotionGraphicsPage from "./page";

export const metadata: Metadata = {
  title: "Motion Graphics and Video | Creative Visuals",
  description: "Want to bring your ideas to life? We create fun motion graphics and videos that grab attention and tell your story. Let’s make your project shine!"
};

export default function MotionGraphicsLayout() {
  return <MotionGraphicsPage />;
} 
import { Metadata } from "next/types";
import MotionGraphicsPage from "./page";

export const metadata: Metadata = {
  title: "Motion Graphics",
  description: ""
};

export default function MotionGraphicsLayout() {
  return <MotionGraphicsPage />;
} 
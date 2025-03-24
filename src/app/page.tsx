import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Biztal Box",
  description: "Biztal Box is a platform for creating and managing your business",
};

export default function Home() {
  return (
      <HomePage/>
  );
}

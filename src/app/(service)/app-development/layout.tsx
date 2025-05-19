import { Metadata } from "next/types";
import AppDevelopmentPage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "App Development & Design Agency | Build Great Apps",
  description: ""
};

export const metadata = createMetadata(baseMetadata, '/app-development');

export default function AppDevelopmentLayout() {
  return <AppDevelopmentPage />;
} 
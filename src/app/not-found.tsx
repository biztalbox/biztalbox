import { Metadata } from "next";
import ErrorPage from '@/components/ErrorPage';
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
};

export const metadata = createMetadata(baseMetadata, '/404');

export default function NotFound() {
  return (
    <ErrorPage/>
  )
}
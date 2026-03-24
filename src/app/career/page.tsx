import CareerShell from "@/components/career/CareerShell";
import CareerHero from "@/components/career/CareerHero";
import { createMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import JobList from "@/components/career/JobList";

const careerMetadata: Metadata = {
  title: "Careers | Biztalbox",
  description:
    "Join Biztalbox. Build your future with our team of digital architects—where innovation meets opportunity.",
};

export const metadata = createMetadata(careerMetadata, "/career");

export default function CareerPage() {
  return (
    <CareerShell>
      <CareerHero />
      <JobList />
    </CareerShell>
  );
}

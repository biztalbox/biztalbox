import CareerShell from "@/components/career/CareerShell";
import JobDetailPage from "@/components/career/JobDetailPage";
import { fetchJobBySlug } from "@/lib/cms-jobs";
import { createMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = await fetchJobBySlug(params.slug);
  if (!job) {
    return createMetadata({ title: "Job not found | Biztalbox" }, `/career/${params.slug}`);
  }
  return createMetadata(
    {
      title: `Careers at Biztalbox | Digital Marketing Jobs & Agency Roles`,
      description: `Join Biztalbox, a leading digital marketing agency, and explore digital marketing careers, creative marketing roles, and marketing job opportunities. Work with innovative minds, tackle real challenges, and grow through meaningful projects. Apply now.`,
    },
    `/career/${params.slug}`
  );
}

export default async function CareerJobDetailPage({ params }: Props) {
  const job = await fetchJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <CareerShell>
      <JobDetailPage job={job} />
    </CareerShell>
  );
}

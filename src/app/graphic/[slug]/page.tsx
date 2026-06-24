import { notFound } from "next/navigation";
import { fetchGraphicPage } from "@/lib/cms-graphic-pages";
import GraphicPageLayout from "./GraphicPageLayout";

export const dynamic = "force-dynamic";

export default async function GraphicCmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchGraphicPage(slug);

  if (!page) notFound();

  return <GraphicPageLayout data={page} />;
}

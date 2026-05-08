import { notFound } from "next/navigation";
import { fetchVideoPage } from "@/lib/cms-video-pages";
import VideoPageLayout from "./VideoPageLayout";

export const dynamic = "force-dynamic";

export default async function VideoCmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchVideoPage(slug);

  if (!page) notFound();

  return <VideoPageLayout data={page} />;
}

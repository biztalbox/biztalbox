import TailwindScope from "@/components/TailwindScope";

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TailwindScope id="video-route-root" className="min-h-screen">
      {children}
    </TailwindScope>
  );
}

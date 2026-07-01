import TailwindScope from "@/components/TailwindScope";

export default function GraphicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TailwindScope id="graphic-route-root" className="min-h-screen">
      {children}
    </TailwindScope>
  );
}

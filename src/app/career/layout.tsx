import TailwindScope from "@/components/TailwindScope";

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TailwindScope id="career-route-root">{children}</TailwindScope>;
}

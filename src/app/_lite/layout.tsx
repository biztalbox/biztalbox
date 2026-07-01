import TailwindScope from "@/components/TailwindScope";

export default function LiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <TailwindScope
      id="lite-route-root"
      className="min-h-screen bg-[#f2f2f2] text-black"
    >
      {children}
    </TailwindScope>
  );
}

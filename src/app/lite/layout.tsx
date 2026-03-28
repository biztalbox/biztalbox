import "@/styles/tailwind-tw.css";

export default function LiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="lite-route-root" className="min-h-screen bg-[#f5f5f5] text-black">
      {children}
    </div>
  );
}
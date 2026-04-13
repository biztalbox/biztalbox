import "@/styles/tailwind-tw.css";

export default function LiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="lite-route-root" className="min-h-screen bg-[#f2f2f2] text-black">
      {children}
    </div>
  );
}
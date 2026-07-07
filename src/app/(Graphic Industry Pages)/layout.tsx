import "@/app/(Graphic Industry Pages)/styles.css";

export default function GraphicIndustryPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div data-graphic-industry-page>{children}</div>;
}

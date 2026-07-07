import "@/app/(INDUSTRY PAGES)/styles.css";

export default function IndustryPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div data-industry-page>{children}</div>;
}

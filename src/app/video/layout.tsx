export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-video-page
      style={{
        fontFamily:
          '"Century Gothic", CenturyGothic, AppleGothic, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {children}
    </div>
  );
}
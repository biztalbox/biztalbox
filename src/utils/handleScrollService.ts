

export default function handleScrollService(e: any) {
  // alert('scrolling');
  const scrollDiv = e.target;
  if (scrollDiv.scrollTop === 0) {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (
      scrollDiv.scrollHeight - scrollDiv.scrollTop ===
      scrollDiv.clientHeight
    ) {
    document.body.scrollIntoView({ behavior: "smooth", block: "end" });
  }
}

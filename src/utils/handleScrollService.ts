

export default function handleScrollService(e: any) {
  // alert('scrolling');
  const scrollDiv = e.target;
  const serviceImg = document.getElementById('service_img');
  if (scrollDiv.scrollTop === 0) {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
      if (serviceImg) {
        serviceImg.style.transform = 'scale(1)';
      }
    } else if (
      scrollDiv.scrollHeight - scrollDiv.scrollTop ===
      scrollDiv.clientHeight
    ) {
    document.body.scrollIntoView({ behavior: "smooth", block: "end" });
    if (serviceImg) {
      serviceImg.style.transform = 'scale(0.6)';
    }
  }
}

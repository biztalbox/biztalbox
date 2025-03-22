import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

export default function scrollServiceContent() {
  // Set up the scroll container
  ScrollTrigger.defaults({
    scroller: "#smooth-content"
  });

  // Pin the left section (image)
  gsap.to('.project-details-1-left', {
    scrollTrigger: {
      trigger: '#service_details_container',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
    }
  });

  // Animate the right content
   gsap.timeline({
    scrollTrigger: {
      trigger: '#service_content',
      start: 'top top',
      end: 'bottom 80%',
      scrub: 1,
      markers: true,
    },
  });

  

  // Scale image slightly on scroll
  gsap.fromTo('#service_img', 
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: '#service_details_container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        markers: true,
      },
      scale: 0.8,
      duration: 0.5,
      ease: 'power2.inOut',
    }
  );
}

// export default function ScrollTriggerService() {
//   window.addEventListener('scroll', () => {
//     const serviceContent = document.getElementById('service_content');
//     if (serviceContent) {
//       serviceContent.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
   
//     // 
//   });
// }




// export default function handleScrollService(e: any) {
//   // alert('scrolling');
//   const scrollDiv = e.target;
//   const serviceImg = document.getElementById('service_img');
//   const serviceDetailsContainer = document.getElementById('service_details_container');
//   if (scrollDiv.scrollTop === 0) {
//       document.body.scrollIntoView({ behavior: "smooth", block: "start" });
//       if (serviceImg) {
//         serviceImg.style.transform = 'scale(1)';
//       }
//       if (serviceDetailsContainer) {
//         serviceDetailsContainer.style.transform  = 'translateY(0px)';
//       }
//     } else if (
//       scrollDiv.scrollHeight - scrollDiv.scrollTop ===
//       scrollDiv.clientHeight
//     ) {
//     document.body.scrollIntoView({ behavior: "smooth", block: "end" });
//     if (serviceImg) {
//       serviceImg.style.transform = 'scale(0.6)';
//     }
//     if (serviceDetailsContainer) {
//       serviceDetailsContainer.style.transform  = 'translateY(160px)';
//     }
//   }
// }
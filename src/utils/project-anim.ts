import { gsap } from "gsap";
import $ from "jquery";
import { ScrollTrigger } from '@/plugins';

function projectThreeAnimation() {
  if (document.querySelectorAll(".tp-project-3-area").length > 0) {
    let pw = gsap.matchMedia();
    pw.add("(min-width: 100px)", () => {
      // Check if device is mobile for performance optimization
      const isMobile = window.innerWidth <= 768;
      
      gsap.set(".tp-project-3-wrap .pro-img-1 img", {
        x: isMobile ? "200" : "500", // Reduced offset for mobile
      });
      gsap.set(".tp-project-3-wrap .pro-img-2 img", {
        x: isMobile ? "-200" : "-500", // Reduced offset for mobile
      });

      let projects: any = gsap.utils.toArray(".tp-project-3-wrap");

      projects.forEach((item: any) => {
        let $this: any = $(item);

        gsap.to($this.find(".pro-img-1 img"), {
          x: "0",
          scrollTrigger: {
            trigger: $this,
            start: "top 96%",
            end: "bottom 65%",
            scrub: isMobile ? 0.5 : 1, // Reduced scrub for mobile
            transformOrigin: "50% 50%" as any,
            // Performance optimizations
            fastScrollEnd: true,
            preventOverlaps: true,
          } as any,
          // Performance optimizations
          force3D: true,
          duration: isMobile ? 0.8 : 1.2, // Reduced duration for mobile
        });

        gsap.to($this.find(".pro-img-2 img"), {
          x: "0",
          scrollTrigger: {
            trigger: $this,
            start: "top 96%",
            end: "bottom 65%",
            scrub: isMobile ? 0.5 : 1, // Reduced scrub for mobile
            transformOrigin: "50% 50%" as any,
            // Performance optimizations
            fastScrollEnd: true,
            preventOverlaps: true,
          } as any,
          // Performance optimizations
          force3D: true,
          duration: isMobile ? 0.8 : 1.2, // Reduced duration for mobile
        });
      });
    });
  }
};

function projectDetailsPin() {
  let pd = gsap.matchMedia();
  pd.add("(min-width: 1400px)", () => {

    if ($('.project-details-1-area').length > 0) {
      ScrollTrigger.create({
        trigger: ".project-details-1-area",
        start: "top top",
        end: "bottom 100%",
      });
    }

  });
};

function projectDetailsVideoPin() {
  const vd = gsap.matchMedia();
vd.add("(min-width: 1200px)", () => {
  const projectDetails2Area = document.querySelector('.project-details-2-area');
  const projectDetailsVideo = document.querySelector('.project-details-video');

  if (projectDetails2Area && projectDetailsVideo) {
    ScrollTrigger.create({
      trigger: projectDetails2Area,
      start: "top top",
      end: "bottom -100%",
    });
  }
});

// Get references to elements and ensure they are not null
const progress = document.getElementById("progress") as HTMLProgressElement | null;
const timer = document.getElementById("timer") as HTMLElement | null;
const videoProgressBtn = document.getElementById("play") as HTMLElement | null;
const video = document.querySelector("video") as HTMLVideoElement | null;

function progressLoop() {
  if (video && progress && timer) {
    setInterval(function () {
      progress.value = Math.round((video.currentTime / video.duration) * 100);
      timer.innerHTML = `${Math.round(video.currentTime)} seconds`;
    }, 1000);
  }
}

function playPause() {
  if (video && videoProgressBtn) {
    if (video.paused) {
      video.play();
      videoProgressBtn.innerHTML = "&#10073;&#10073;"; // Pause symbol
    } else {
      video.pause();
      videoProgressBtn.innerHTML = "►"; // Play symbol
    }
  }
}

if (videoProgressBtn) {
  videoProgressBtn.addEventListener("click", playPause);
}

if (video) {
  video.addEventListener("play", progressLoop);
}
  
}

export { projectThreeAnimation, projectDetailsPin,projectDetailsVideoPin };

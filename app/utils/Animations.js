import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);



export const textReveal = () => {
  const headers = document.querySelectorAll("[data-animation='header']");

  if (!headers.length) return;

  headers.forEach(header => {
    const split = SplitText.create(header, {
      type: "lines",
      linesClass: "lineChild",
      
    });

    const lines = split.lines
      .map(line => line.children[0])
      .filter(child => child !== undefined);

    gsap.set(lines, { yPercent: 100, autoAlpha: 0 });
    gsap.set(header, { visibility: "visible" });

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(lines, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.1
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(header);
  });
};



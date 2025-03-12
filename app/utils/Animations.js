import gsap from "gsap";

export const textReveal = () => {
  console.log("textReveal function is running..."); // Debugging step 1

  requestAnimationFrame(() => {
    const headers = document.querySelectorAll("[data-animation='header']");

    if (!headers.length) {
      console.warn("No elements found for textReveal animation.");
      return;
    }

    console.log(`Found ${headers.length} elements for textReveal`); // Debugging step 2

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          console.log("Intersecting:", entry.target); // Debugging step 3

          if (entry.isIntersecting) {
            console.log("Animating:", entry.target.innerText); // Debugging step 4

            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 100 },
              { opacity: 1, y: 0, ease: "power4.out", duration: 1.2 }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    headers.forEach((header) => observer.observe(header));
  });
};

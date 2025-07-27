"use client";

import React, { useLayoutEffect, useRef } from "react";
import styles from "../styles/Loader.module.css";
import gsap from "gsap";

const Loader = ({ setLoading }) => {
  const sectionRef = useRef(null);
  const fillersRef = useRef([]);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => setLoading(false),
      });

      // Slide in fillers
      tl.fromTo(
        fillersRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, stagger: 0.15 }
      );

      // Fake progress using GSAP text plugin (or a quickSetter if using real %)
      tl.to(progressRef.current, {
        innerText: 100,
        duration: 1,
        snap: { innerText: 1 },
        ease: "none",
        onUpdate: () => {
          if (progressRef.current) {
            progressRef.current.innerText = `${Math.floor(progressRef.current.innerText)}%`;
          }
        }
      });

      // Fade out progress + slide out fillers
      tl.to(progressRef.current, { y: "100%", opacity: 0, duration: 0.4 }, "+=0.2")
        .to(fillersRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power4.inOut",
          stagger: { each: 0.15, from: "end" },
        })
        .to(sectionRef.current, {
          opacity: 0,
          duration: 0.4,
        });
    }, sectionRef);

    return () => ctx.revert();
  }, [setLoading]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.loader__section} loader__section`}
    >
      {[0, 1, 2, 3].map((_, i) => (
        <div
          key={i}
          ref={(el) => (fillersRef.current[i] = el)}
          className={`${styles.loader__filler} loader__filler`}
        />
      ))}
      <h1
        ref={progressRef}
        className={`${styles.loader__progress} loader__progress`}
      >
        0%
      </h1>
    </section>
  );
};

export default Loader;

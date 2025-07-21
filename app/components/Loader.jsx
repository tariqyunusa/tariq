"use client";

import React, { useState, useLayoutEffect } from "react";
import styles from "../styles/Loader.module.css";
import gsap from "gsap";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".loader__filler",
        { y: "100%" },
        { y: "0%", stagger: 0.2, ease: "power4.out", duration: 1.5 }
      )
        .add(() => {
          gsap.to({}, {
            duration: 2, 
            onUpdate: function () {
              setProgress((prev) => (prev < 100 ? prev + 1 : 100));
            },
            onComplete: () => {
              gsap.to(".loader__progress", { y: "100%", opacity: 0, duration: 0.5 });
            }
          });
        })
        .to(".loader__filler", {
          y: "-100%",
          stagger: { each: 0.2, from: "end" },
          ease: "power4.inOut",
          duration: 1.5,
        })
        .to(".loader__section", {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setLoading(false),
        });
    });

    return () => ctx.revert();
  }, [setLoading]);

  return (
    <section className={`${styles.loader__section} loader__section`}>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <h1 className={`${styles.loader__progress} loader__progress`}>{progress}%</h1>
    </section>
  );
};

export default Loader;

"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.css";
import gsap from "gsap";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressValue = 0;

    const updateProgress = () => {
      if (progressValue < 100) {
        progressValue += Math.random() * 10;
        setProgress(Math.min(100, Math.floor(progressValue)));
        requestAnimationFrame(updateProgress);
      }
    };

    const handleLoad = () => {
        const tl = gsap.timeline();
        tl.to(
          ".loader__filler",
          { y: "0%", stagger: 0.2, ease: "power4.out", duration: 1.5 }
        )
          .add(() => {
            gsap.to({}, {
              duration: 2, 
              onUpdate: function () {
                setProgress(prev => (prev < 100 ? prev + 1 : 100));
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
          },) 
          .to(".loader__section", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => setLoading(false),
          });
      };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      updateProgress();
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [setLoading]);

  return (
    <section className={styles.loader__section}>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <div className={`${styles.loader__filler} loader__filler`}></div>
      <h1 className={`${styles.loader__progress} loader__progress`}>{progress}%</h1>
    </section>
  );
};

export default Loader;

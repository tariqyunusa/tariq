"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Loader.module.css";

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
      setProgress(100);
      setTimeout(() => setLoading(false), 500); 
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Loader;

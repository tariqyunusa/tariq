import React, { useRef, useEffect } from "react";
import styles from "../styles/project.module.css";
import gsap from "gsap";

const Project = ({ projects }) => {
  const hoverRefs = useRef([]);

  useEffect(() => {
   
    hoverRefs.current.forEach((el) => {
      if (el) gsap.set(el, { y: "-100%" });
    });
  }, []);

  const handleMouseEnter = (idx) => {
    gsap.to(hoverRefs.current[idx], {
      y: "0%", // Moves it into view
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(hoverRefs.current[idx], {
      y: "-100%", // Moves it back up
      duration: 0.4,
      ease: "power2.in",
    });
  };

  return (
    <div>
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={styles.project__link_both}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          <div
            className={styles.hover_active}
            ref={(el) => (hoverRefs.current[idx] = el)}
          >
            <h1>{project.alt}</h1>
            <p>{project.link}</p>
          </div>
          <div className={styles.project}>
            <h1>{project.name}</h1>
            <div className={styles.stack}>
              {project.stack.map((stack, stackIdx) => (
                <p key={stackIdx} className={styles.stack__item}>
                  {stack},
                </p>
              ))}
            </div>
            <div className={styles.filler}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;

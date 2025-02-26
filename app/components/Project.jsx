import React, { useRef, useEffect } from "react";
import styles from "../styles/project.module.css";
import gsap from "gsap";

const Project = ({ projects }) => {
  const hoverRefs = useRef([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    hoverRefs.current.forEach((el) => el && gsap.set(el, { y: "-100%" }));
    projectRefs.current.forEach((el) => el && gsap.set(el, { y: "0%" }));
  }, []);

  const handleMouseEnter = (idx) => {
    gsap.to(hoverRefs.current[idx], {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(projectRefs.current[idx], {
      y: "100%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(hoverRefs.current[idx], {
      y: "-100%",
      duration: 0.4,
      ease: "power2.in"
    });

    gsap.to(projectRefs.current[idx], {
      y: "0%",
      ease: "power2.in",
      duration: 0.4,
    });
  };

  return (
    <div className={styles.project__link}>
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
            <div className={styles.stack}>{project.stack.map((p, i) => (
                <p key={i} className={styles.stack__item}>{p}</p>
            ))}</div>
            <p className={styles.link}>{project.link}</p>
          </div>
          <div
            className={styles.project}
            ref={(el) => (projectRefs.current[idx] = el)}
          >
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

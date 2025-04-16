import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/project.module.css";

const Project = ({ projects }) => {
  const hoverRefs = useRef([]);
  const projectRefs = useRef([]);
  const borderRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    hoverRefs.current.forEach((el) => el && gsap.set(el, { y: "-100%" }));
    projectRefs.current.forEach((el) => el && gsap.set(el, { y: "0%" }));

    borderRefs.current.forEach((el, idx) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: "100%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectRefs.current[idx],
            start: "top 80%", // triggers when project section is near the viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
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
      ease: "power2.in",
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
            className={styles.animated__border}
            ref={(el) => (borderRefs.current[idx] = el)}
          />
          <a
            href={project.route}
            className={styles.hover_active}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (hoverRefs.current[idx] = el)}
          >
            <h1>{project.alt}</h1>
            <div className={styles.stack}>
              {project.stack.map((p, i) => (
                <p key={i} className={styles.stack__item}>
                  {p},
                </p>
              ))}
            </div>
            <p className={styles.link}>{project.link}</p>
          </a>
          <div
            className={styles.project}
            ref={(el) => (projectRefs.current[idx] = el)}
            data-animation="header"
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

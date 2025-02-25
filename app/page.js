"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Popup from "./components/Popup";
import Projects from "./Projects";

export default function Home() {
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    const popups = [
      { name: "Tariq", media: "/Assets/person.webm" },
      { name: "3+", media: "/Assets/time.webm" }
    ];

    const updatePopup = () => {
      const randomIndex = Math.floor(Math.random() * popups.length);
      setActivePopup(popups[randomIndex]);

      setTimeout(() => {
        setActivePopup(null);
      }, 5000); 
    };

    updatePopup(); 

    const interval = setInterval(updatePopup, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.hero__section_main_text}>
          <h1>
            Hi There, I am{" "}
            <Popup active={activePopup?.name === "Tariq"} media={activePopup?.media}>
              Tariq
            </Popup>{" "}
            Yunusa, a creative software engineer currently residing in yola, Nigeria who has{" "}
            <Popup active={activePopup?.name === "3+"} media={activePopup?.media}>
              3+ years
            </Popup>{" "}
            of experience building services, tools, products, and curating engaging experiences on the web.
          </h1>
        </div>
      </section>
      <Projects />
    </>
  );
}

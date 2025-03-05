"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Popup from "./components/Popup";
import Projects from "./Projects";
import About from "./About";
import Play from "./Play";
import Footer from "./components/Footer";

export default function Home() {
  const [activePopup, setActivePopup] = useState(null);

  

  return (
    <>
      <section className={styles.section}>
        <div className={styles.hero__section_main_text}>
          <h1>
            Hi There, I am{" "}
            <Popup >
              Tariq
            </Popup>{" "}
            Yunusa, a creative software engineer currently residing in yola, Nigeria who has{" "}
            <Popup href={"https://github.com/tariqyunusa"}>
              3+ years
            </Popup>{" "}
            of experience building services, tools, products, and curating engaging experiences on the web.
          </h1>
        </div>
      </section>
      <Projects />
      <About />
      <Play />
      <Footer />
    </>
  );
}

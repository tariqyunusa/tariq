"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Popup from "./components/Popup";
import Projects from "./Projects";
import About from "./About";
import Play from "./Play";
import Footer from "./components/Footer";
import { textReveal } from "./utils/Animations";

export default function Home() {
useEffect(() => {
  document.fonts.ready.then(() => {
  textReveal(); 
});
},[])
  

  return (
    <>
      <section className={styles.section}>
      <div className={styles.hero__work_status} data-animation = 'header' ><div className={styles.indicator__status_hero}></div> <p>Available for work</p></div>
        <div className={styles.hero__section_main_text}>
        <h1 data-animation = 'header'>
            <span>
            Hi There, I am{" "}
            <Popup >
              Tariq
            </Popup>{" "}
            Yunusa, a creative software Developer currently residing in yola, Nigeria who has{" "}
            <Popup href={"https://github.com/tariqyunusa"}>
              3+ years
            </Popup>{" "}
            experience building services, tools, products, and curating engaging experiences on the web.
            </span>
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

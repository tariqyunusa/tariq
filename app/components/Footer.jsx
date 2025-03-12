"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { textReveal } from "../utils/Animations";

export default function Contact() {
  useEffect(() => {
    textReveal();
  }, []);

  const [copied, setCopied] = useState(false);
  const email = "tariikhyunusa@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
      })
      .catch(err => console.error("Failed to copy email:", err));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_redundant}>
        <div className={styles.footer__wrapper}>
          <h1 data-animation="header">
            Got a question, offer, or idea in mind?{" "}
            <span className={styles.mail} onClick={handleCopyEmail}>
              Mail me
            </span>{" "}
            let's talk further.
          </h1>
          {copied && <div className={styles.mail__success}> ✅<h1>Mail Copied</h1></div>}
        </div>
      </div>
      <div className={styles.footer__links} data-animation="header">
        <a href="https://github.com/tariqyunusa" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="https://www.instagram.com/tariikh_" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/tariq-yunusa-a5414b248/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
        <a href="https://x.com/tariqYA_" target="_blank" rel="noopener noreferrer">
          <FiTwitter />
        </a>
      </div>
    </footer>
  );
}

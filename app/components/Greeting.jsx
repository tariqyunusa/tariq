import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Greetings.module.css";

const Greeting = () => {
  const greetings = [
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "مرحبا",
    "नमस्ते।",
    "Olá",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.greetings}>
     <div className={styles.greeting__wrapper}>
         <AnimatePresence mode="wait">
        <motion.span
          key={greetings[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className={styles.greeting__headline}
        >{greetings[index]}</motion.span>
      </AnimatePresence>
     </div>
    </div>
  );
};

export default Greeting;

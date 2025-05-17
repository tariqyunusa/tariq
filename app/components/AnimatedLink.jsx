"use client";
import { motion } from "framer-motion";
import styles from "../styles/AnimatedWord.module.css";
import { useState } from "react";
import Link from "next/link";

export default function AnimatedLink({ title }) {
  const [isHovered, setIsHovered] = useState(false);
  const href = `/${title === "Home" ? "" : title}`;

  return (
    <Link href={href}>
      <motion.div
        className={styles.AnimatedLink}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatedWord title={title} isHovered={isHovered} />
        <div className={styles.animatedWord__wrapper}>
          <AnimatedWord title={title} isHovered={isHovered} reversed />
        </div>
      </motion.div>
    </Link>
  );
}

const animateTitle = {
  rest: { transition: { staggerChildren: 0.02 } },
  hover: { transition: { staggerChildren: 0.02 } },
};

const animateUp = {
  rest: { y: 0 },
  hover: {
    y: -35,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const animateDown = {
  rest: { y: 35 },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const AnimatedWord = ({ title, isHovered, reversed = false }) => {
  const animation = reversed ? animateDown : animateUp;

  return (
    <motion.span
      className={styles.animatedWord}
      variants={animateTitle}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
    >
      {title.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            className={styles.animated__letter}
            variants={animation}
            key={i}
          >
            {char}
          </motion.span>
        )
      )}
    </motion.span>
  );
};

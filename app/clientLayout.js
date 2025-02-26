"use client"
import Nav from "./components/Nav";
import { useEffect } from "react";

import "./globals.css";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function ClientLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smoothness duration (higher = smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smooth: true,
      wheelMultiplier: 1, // Adjust scrolling strength
      touchMultiplier: 2, // Makes mobile touch scrolling smoother
      infinite: false, // Disable infinite scrolling unless needed
    });
    
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);
  return (
    <html lang="en">
      <body>
        {children}
        <Nav />
      </body>
    </html>
  );
}

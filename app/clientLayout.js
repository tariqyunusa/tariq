"use client"

import { useEffect } from "react";

import "./globals.css";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function ClientLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      wheelMultiplier: 2, 
      touchMultiplier: 2, 
      infinite: false, 
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
        
      </body>
    </html>
  );
}

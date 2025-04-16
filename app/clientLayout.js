"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Loader from "./components/Loader";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      wheelMultiplier: 2,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body style={{ overflow: isLoading ? "hidden" : "auto" }}>
        {isLoading ? (
          <Loader setLoading={setIsLoading} progress={progress} setProgress={setProgress} />
        ) : (
          <>
          {children}
          <Nav />
          </>
        )}
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during loader
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <Loader setLoading={setIsLoading} />

      <div
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? "hidden" : "visible",
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
        <Nav />
      </div>
    </>
  );
}

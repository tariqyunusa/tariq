"use client";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const [isLoading, setLoading] = useState(true);
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;
    window.gtag('config', GA_ID, {
      page_path: pathname,
    });
  }, [pathname, GA_ID]);

  return (
    <>
      
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {isLoading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          {children}
          <Nav />
        </>
      )}
    </>
  );
}

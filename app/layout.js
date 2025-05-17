"use client"; 
import { useEffect, useState } from "react";
import "./globals.css";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

 const metadata  = {
  title: "Tariq",
  description: "A creative software developer ",
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body >
        {isLoading ? <Loader setLoading={setIsLoading} /> : <>
        {children}
        <Nav />
        </>}
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader setLoading={setIsLoading} />
      ) : (
        <>
          {children}
          <Nav />
        </>
      )}
    </>
  );
}

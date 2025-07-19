import { useEffect } from "react";
import dynamic from "next/dynamic"; // ✅ for disabling SSR of client-only components
import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";

// ✅ Load NextSection without SSR
const NextSection = dynamic(() => import("../components/NextSection"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <NextSection />
      <Footer />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

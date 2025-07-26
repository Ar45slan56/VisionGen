import { useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BackgroundScene from "@/components/BackgroundScene";
import ChatbotWidget from "@/components/ChatbotWidget";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DemoSection from "@/components/DemoSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/Testimonials";
import Contact from "../../app/contact/page";
import ContactSection from "@/components/ContactSecion";
import CareersSection from "@/components/CareersSection";

// ✅ Disable SSR for NextSection if it uses window / animation libs
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
      {/* 🌌 Background Layer */}
    

      {/* 🌐 Main App Components */}
      <Navbar />
      <Hero />
        <BackgroundScene />
      <NextSection />
      
      <WhyChooseUsSection />
      {/* 📦 Page-Specific Content (if needed) */}
      <Component {...pageProps} />
      <ChatbotWidget />
      <DemoSection/>
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
      <CareersSection />
      <Footer />
    </>
  );
}

export default MyApp;

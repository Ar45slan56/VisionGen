"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import styles from "@/styles/Chatbots.module.css";
import ToolScroller from "@/components/ToolScroller";


export default function ChatbotPage() {
  const demoRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          demoRef.current?.scrollIntoView({ behavior: "smooth" });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (demoRef.current) observer.observe(demoRef.current);

    // Load Lottie only on client
    if (typeof window !== "undefined") {
      fetch("/lotties/chatbot-bg.json")
        .then((res) => res.json())
        .then((data) => setAnimationData(data));
    }
  }, []);

  const features = [
    { title: "Omnichannel Reach", desc: "Deploy across web, mobile, WhatsApp, Messenger, and more." },
    { title: "Smart Conversational Flows", desc: "Context-aware AI that learns and adapts with every interaction." },
    { title: "Rich Analytics Dashboard", desc: "Track engagement, satisfaction, and performance in real-time." },
    { title: "Lead Capture & Qualification", desc: "Generate leads during chat and funnel them automatically." },
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      company: "eComWorld",
      feedback: "The Vision‑GEN chatbot transformed our support—24/7 responses and skyrocketing satisfaction!",
    },
    {
      name: "John D.",
      company: "FinServe Inc.",
      feedback: "Seamless integration with WhatsApp & Slack. Setup was quick and our team loves it.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* 🔹 Animated Hero Banner */}
      <section className={styles.hero}>
        <motion.div
          className={styles.bannerWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {animationData && (
            <Lottie animationData={animationData} loop autoplay />
          )}
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypeAnimation
            sequence={[
              "AI Chatbot Designed for Your Business.",
              2000,
              "Automate Customer Support with Smart Chatbots.",
              2000,
              "Scale Your Communication Efficiently.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: "2rem",
              display: "inline-block",
              color: "#06c167",
            }}
          />
          <p className={styles.subheading}>
            Enhance user experience, automate support conversations, and grow your business with Vision‑GEN’s intelligent chatbot platform.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Features Section */}
      <section className={styles.features}>
        <motion.h2
          className={styles.featureHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Core Features
        </motion.h2>
        <div className={styles.featureGrid}>
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* toolscroller */}

      {/* 🔹 Scrolling Tool Banner */}
      <ToolScroller />

      {/* 🔹 Demo Section */}
      <section className={styles.demoSection} ref={demoRef}>
        <h2>Try it Live</h2>
        <div className={styles.demoWidget}>
          <p>🤖 Chatbot Demo Widget Goes Here...</p>
        </div>
      </section>

      {/* 🔹 Testimonials */}
      <section className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              className={styles.testimonialCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <p>“{t.feedback}”</p>
              <cite>– {t.name}, {t.company}</cite>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Ready to elevate your business with AI-driven customer service?</p>
          <a href="/contact" className={styles.ctaButton}>
            Talk to an Expert
          </a>
        </motion.div>
      </section>
    </div>
  );
}

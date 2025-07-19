// app/solutions/config/custom/page.js
"use client";

import { useState } from "react";
import styles from "./custom.module.css";
import {
  FaPuzzlePiece,
  FaTools,
  FaCubes,
  FaNetworkWired,
  FaServer,
  FaCodeBranch,
  FaDatabase,
  FaPlug,
  FaCode,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";

const articles = [
  {
    title: "What is Custom Integration?",
    excerpt: "Custom integration connects different apps, tools, and systems to work in harmony...",
    full: `Custom integration involves building unique bridges between software applications to ensure seamless communication and data flow. Whether it's connecting your ERP to CRM, syncing real-time inventory, or automating internal systems, these tailored solutions are built specifically for your business logic. Unlike off-the-shelf integrations, custom solutions offer complete control, scalability, and personalization, enabling optimized workflows and better data insights.`,
    icon: <FaPlug />,
  },
  {
    title: "When Do You Need Custom Integration?",
    excerpt: "If your tools don’t talk to each other well, or data is scattered...",
    full: `You need custom integration when you face bottlenecks due to disconnected tools, frequent manual data entry, or real-time sync requirements. Whether you're trying to push e-commerce orders to your shipping software or align customer journeys between your chatbot, CRM, and analytics dashboard, custom integrations help automate and centralize these interactions to increase efficiency and accuracy.`,
    icon: <FaLaptopCode />,
  },
  {
    title: "Benefits of Custom Integration",
    excerpt: "Boost productivity, reduce manual errors, and scale operations smoothly...",
    full: `The benefits of custom integrations include seamless workflow automation, real-time updates between platforms, improved operational visibility, and reduced reliance on manual work. It empowers you to automate business logic exactly the way you envision it, while still retaining control, flexibility, and performance. It's also secure and scalable for fast-growing companies that need unique logic flows.`,
    icon: <FaCode />,
  },
];

export default function CustomIntegrationPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Custom Integration Services</h1>
        <p>
          Build secure, scalable, and tailor-made integrations between your apps,
          APIs, and systems to ensure smooth business operations.
        </p>
      </motion.div>

      {/* Animated Bar */}
      <motion.div
        className={styles.animatedBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={styles.scrollContent}>
          <span><FaPuzzlePiece /> Custom Logic</span>
          <span><FaTools /> Tailored Solutions</span>
          <span><FaCubes /> Modular Integration</span>
          <span><FaNetworkWired /> API Sync</span>
          <span><FaServer /> Backend Linking</span>
          <span><FaCodeBranch /> GitOps Support</span>
          <span><FaDatabase /> Real-Time DB Sync</span>
          <span><FaCogs /> Automation Flows</span>
        </div>
      </motion.div>

      {/* Article Cards */}
      <div className={styles.cards}>
        {articles.map((article, i) => (
          <motion.div
            key={i}
            className={styles.card}
            onClick={() => setExpanded(expanded === i ? null : i)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.icon}>{article.icon}</div>
              <h3>{article.title}</h3>
            </div>
            <p>{article.excerpt}</p>
            {expanded === i && <div className={styles.expanded}>{article.full}</div>}
          </motion.div>
        ))}
      </div>

      {/* FAQs */}
      <div className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Can you integrate any tool or software?</summary>
          <p>Yes, we can integrate most platforms with open APIs, databases, or custom connectors.</p>
        </details>
        <details>
          <summary>How secure are custom integrations?</summary>
          <p>We implement industry-best practices like token auth, encrypted data flow, and secure hosting.</p>
        </details>
        <details>
          <summary>How long does it take to develop a custom integration?</summary>
          <p>It depends on complexity, but most integrations can be delivered in 2–4 weeks.</p>
        </details>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h3>Need a Custom Integration That Just Works?</h3>
        <a href="/contact" className={styles.ctaButton}>Contact Us Today</a>
      </div>
    </div>
  );
}

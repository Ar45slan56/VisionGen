"use client";

import { useState } from "react";
import styles from "./n8n.module.css";
import { FaCogs, FaSyncAlt, FaRocket, FaBolt, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [
  { icon: <FaCogs />, label: "Workflow Automation" },
  { icon: <FaRocket />, label: "Faster Delivery" },
  { icon: <FaSyncAlt />, label: "Real-Time Sync" },
  { icon: <FaBolt />, label: "Event Triggers" },
  { icon: <FaProjectDiagram />, label: "No-Code Logic" },
];

const articles = [
  {
    title: "What is n8n?",
    excerpt: "n8n is a powerful workflow automation tool...",
    full: `n8n is an open-source workflow automation platform that allows users to visually build workflows connecting various services and data sources. It supports over 200 integrations including APIs, databases, and CRMs. You can schedule tasks, automate repetitive actions, and create data pipelines without writing complex code. With its flexible node-based architecture, n8n empowers teams to automate backend operations, sync customer data, and much more in real time.`,
  },
  {
    title: "Why Use n8n in Business Automation?",
    excerpt: "n8n allows businesses to automate processes...",
    full: `In today's fast-paced digital environment, n8n stands out by allowing businesses to customize automation for their exact needs. Whether it's syncing leads between marketing and CRM tools, automating support workflows, or streamlining data transformations, n8n's visual interface and logic nodes empower non-tech teams to design automation with ease. Unlike Zapier, it offers on-premise hosting and is developer-friendly, providing true flexibility and control.`,
  },
  {
    title: "Benefits of Integrating n8n with Your System",
    excerpt: "n8n enhances scalability, efficiency, and consistency...",
    full: `The key benefits of using n8n include seamless integration of your favorite tools, increased efficiency by eliminating manual tasks, real-time data processing, reduced operational cost, and improved customer experience. It supports both simple and complex conditional logic, making it ideal for internal automation, external integrations, and analytics pipelines—all without sacrificing performance or maintainability.`,
  },
];

export default function N8nAutomation() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>n8n Workflow Automation</h1>
        <p>Automate your business processes visually and effortlessly using n8n – the open-source automation powerhouse.</p>
      </motion.div>

      {/* Blue Animated Scrolling Bar */}
      <div className={styles.animatedBar}>
        <motion.div
          className={styles.marquee}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {[...icons, ...icons].map((item, idx) => (
            <span className={styles.iconItem} key={idx}>
              {item.icon} {item.label}
            </span>
          ))}
        </motion.div>
      </div>

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
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            {expanded === i && <div className={styles.expanded}>{article.full}</div>}
          </motion.div>
        ))}
      </div>

      {/* FAQs */}
      <div className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Is n8n free to use?</summary>
          <p>Yes, n8n is open-source and free to self-host. They also offer cloud plans with premium support.</p>
        </details>
        <details>
          <summary>How does n8n differ from Zapier?</summary>
          <p>Unlike Zapier, n8n supports conditional logic, self-hosting, and more complex workflows.</p>
        </details>
        <details>
          <summary>Can I integrate APIs with n8n?</summary>
          <p>Absolutely! n8n supports custom API integration using its HTTP Request node.</p>
        </details>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h3>Ready to Automate Your Workflows with n8n?</h3>
        <a href="/contact" className={styles.ctaButton}>Get In Touch</a>
      </div>
    </div>
  );
}

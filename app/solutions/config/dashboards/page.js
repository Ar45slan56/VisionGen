// app/solutions/platform/dashboard/page.js
"use client";

import { useState } from "react";
import styles from "./dashboard.module.css";
import { FaTachometerAlt, FaChartBar, FaTools, FaCogs, FaLaptopCode, FaShieldAlt, FaCloud, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const blueBarData = [
  { icon: <FaTachometerAlt />, label: "Real-Time Monitoring" },
  { icon: <FaChartBar />, label: "Advanced Analytics" },
  { icon: <FaCloud />, label: "Cloud Integration" },
  { icon: <FaTools />, label: "Customizable Widgets" },
  { icon: <FaCogs />, label: "Automation Support" },
  { icon: <FaShieldAlt />, label: "Security & Roles" },
  { icon: <FaLaptopCode />, label: "Dev Tools" },
  { icon: <FaDatabase />, label: "Data Visualization" },
];

const articles = [
  {
    title: "What Is a Smart Dashboard?",
    excerpt: "A smart dashboard is a centralized interface...",
    full: `A smart dashboard is a visual interface that consolidates and presents key metrics, analytics, and workflows in one place. It helps decision-makers and teams track performance, monitor KPIs, and react instantly. Smart dashboards pull data from different tools (CRMs, ERPs, APIs, etc.), providing real-time visibility with interactive charts, user roles, alerts, and more.`
  },
  {
    title: "Benefits of Dashboard Integration",
    excerpt: "Dashboards simplify data monitoring and improve...",
    full: `Dashboards simplify data monitoring and improve business agility. From real-time alerts to historical analysis, they empower users to make data-driven decisions quickly. They reduce context switching by integrating tools, automate report generation, enhance collaboration across teams, and allow business leaders to identify bottlenecks, trends, and opportunities easily.`
  },
  {
    title: "Use Cases of Dashboards",
    excerpt: "Dashboards are used across industries such as...",
    full: `Dashboards are used in sales, marketing, operations, finance, HR, and IT. For instance, sales dashboards track leads, revenue, and performance metrics. Marketing dashboards measure campaign ROI, customer engagement, and acquisition. IT dashboards monitor uptime, deployments, and system health. The customizable nature makes them suitable for startups and enterprises alike.`
  },
];

export default function DashboardAutomation() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <motion.div className={styles.hero} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1>Smart Dashboards</h1>
        <p>Gain full control and visibility with powerful, real-time dashboards that simplify your operations, data, and decisions.</p>
      </motion.div>

      {/* Blue Animated Bar */}
      <motion.div className={styles.animatedBar} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <div className={styles.scrollContent}>
          {blueBarData.map((item, i) => (
            <span key={i}>{item.icon} {item.label}</span>
          ))}
        </div>
      </motion.div>

      {/* Article Cards */}
      <div className={styles.cards}>
        {articles.map((article, i) => (
          <motion.div key={i} className={styles.card} onClick={() => setExpanded(expanded === i ? null : i)} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
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
          <summary>Can I integrate third-party APIs?</summary>
          <p>Yes, smart dashboards can fetch and visualize data from any external API, database, or service.</p>
        </details>
        <details>
          <summary>Are dashboards real-time?</summary>
          <p>Our dashboards support both real-time and scheduled data updates, depending on your use case.</p>
        </details>
        <details>
          <summary>Can I control who sees what?</summary>
          <p>Absolutely. You can assign roles and permissions to control visibility of widgets and reports per user/group.</p>
        </details>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h3>Start Building Intelligent Dashboards Today</h3>
        <a href="/contact" className={styles.ctaButton}>Request a Demo</a>
      </div>
    </div>
  );
}

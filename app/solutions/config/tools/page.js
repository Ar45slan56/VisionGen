"use client";

import { useState } from "react";
import styles from "./tools.module.css";
import {
  FaTools,
  FaPuzzlePiece,
  FaServer,
  FaLaptopCode,
  FaProjectDiagram,
  FaCodeBranch,
  FaCubes,
  FaChartBar,
} from "react-icons/fa";
import { motion } from "framer-motion";

const blogArticles = [
  {
    title: "Top Dev Tools Every Team Needs",
    icon: <FaTools />,
    excerpt: "Explore the best developer tools for efficient workflow...",
    full: `From version control with Git to CI/CD pipelines with Jenkins, dev tools are critical for productivity. Tools like Docker, Kubernetes, and Postman streamline development, testing, and deployment. Collaboration is enhanced with GitHub, GitLab, and Jira. Having the right tools ensures scalable, maintainable, and secure software delivery.`,
  },
  {
    title: "Why Integration Tools Matter",
    icon: <FaPuzzlePiece />,
    excerpt: "Integration tools streamline business operations...",
    full: `Integration tools like Zapier, n8n, and Make.com reduce manual tasks, improve data accuracy, and keep all your services in sync. These platforms enable teams to automate workflows, sync CRMs, and trigger actions in real-time. When properly configured, they can drastically improve customer experience and operational efficiency.`,
  },
  {
    title: "APIs vs Tools: When to Use What",
    icon: <FaCodeBranch />,
    excerpt: "Choosing between building APIs or using tools depends on your goals...",
    full: `APIs offer custom, fine-tuned control, but they require more effort and dev resources. Tools like Integromat or Tray.io offer a no-code or low-code approach for faster prototyping and deployment. Use tools for standard workflows, and APIs when you need full flexibility and deep system integration.`,
  },
];

export default function ToolsAutomation() {
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
        <h1>Automation & Integration Tools</h1>
        <p>Empower your team with modern tools that automate, integrate, and accelerate your workflow.</p>
      </motion.div>

      {/* Animated Bar with Icons */}
      <motion.div
        className={styles.animatedBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className={styles.scrollContent}>
          <span><FaLaptopCode /> Dev Tools</span>
          <span><FaServer /> Backend Services</span>
          <span><FaProjectDiagram /> Project Planning</span>
          <span><FaCubes /> Microservices</span>
          <span><FaChartBar /> Business Intelligence</span>
        </div>
      </motion.div>

      {/* Blog Articles */}
      <div className={styles.cards}>
        {blogArticles.map((article, i) => (
          <motion.div
            key={i}
            className={styles.card}
            onClick={() => setExpanded(expanded === i ? null : i)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{article.icon} {article.title}</h3>
            <p>{article.excerpt}</p>
            {expanded === i && <div className={styles.expanded}>{article.full}</div>}
          </motion.div>
        ))}
      </div>

      {/* FAQs */}
      <div className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Do these tools require coding knowledge?</summary>
          <p>Some tools are no-code or low-code, while others are developer-focused. It depends on your team&#39;s needs.</p>
        </details>
        <details>
          <summary>Can I integrate these tools with our CRM?</summary>
          <p>Yes. Most modern tools provide CRM integrations out-of-the-box or via API/webhooks.</p>
        </details>
        <details>
          <summary>Are these tools secure for enterprise use?</summary>
          <p>Yes. Most tools offer robust security, data encryption, and role-based access for enterprise-level protection.</p>
        </details>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h3>Need Help Selecting the Right Tools?</h3>
        <a href="/contact" className={styles.ctaButton}>Talk to Our Experts</a>
      </div>
    </div>
  );
}

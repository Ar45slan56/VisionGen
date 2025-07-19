"use client";

import { motion } from "framer-motion";
import styles from "./NLP.module.css";
import Image from "next/image";
import robotImage from "../../../../public/assets/images/robot.png";
import Link from "next/link";
import {
  FiSettings,
  FiCpu,
  FiSearch,
  FiMessageSquare,
  FiZap,
  FiActivity,
  FiBookOpen,
  FiLayers,
} from "react-icons/fi";


export default function NlpPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.textContent}
        >
          <h1>NLP Language Models</h1>
          <p>Empowering machines to understand and generate human language.</p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.imageContainer}
        >
          <Image src={robotImage} alt="AI Robot" className={styles.robotImg} />
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className={styles.cardsSection}>
        <h2>Where NLP Helps</h2>
        <div className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <motion.div
              className={styles.card}
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Auto Scroll Banner with Icons */}
     <div className={styles.autoScrollBanner}>
  <div className={styles.scrollContent}>
    {[...Array(3)].map((_, i) => (
      <div key={i} className={styles.scrollRow}>
        <div className={styles.scrollItem}><FiSettings /> <span>Automation</span></div>
        <div className={styles.scrollItem}><FiCpu /> <span>AI Analysis</span></div>
        <div className={styles.scrollItem}><FiSearch /> <span>Data Mining</span></div>
        <div className={styles.scrollItem}><FiMessageSquare /> <span>Chatbots</span></div>
        <div className={styles.scrollItem}><FiZap /> <span>Fast Deployment</span></div>
        <div className={styles.scrollItem}><FiActivity /> <span>Sentiment Detection</span></div>
        <div className={styles.scrollItem}><FiBookOpen /> <span>Text Understanding</span></div>
        <div className={styles.scrollItem}><FiLayers /> <span>Language Models</span></div>
      </div>
    ))}
  </div>
</div>


      {/* Contact CTA */}
      <section className={styles.contactCta}>
        <h2>Ready to Transform Your Business with NLP?</h2>
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch with AI Team
        </Link>
      </section>
    </div>
  );
}

const cardData = [
  {
    title: "Customer Support Chatbots",
    description:
      "Automate customer interactions using intelligent bots trained on your product and domain.",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Analyze customer feedback in real-time to gauge mood, satisfaction, and intent.",
  },
  {
    title: "Text Summarization",
    description:
      "Condense long articles or documents into digestible insights automatically.",
  },
  {
    title: "Language Translation",
    description:
      "Bridge global communication gaps with real-time and contextual translations.",
  },
  {
    title: "Document Classification",
    description:
      "Automatically tag and organize large sets of documents for fast retrieval and insights.",
  },
];

"use client";

import { useState } from "react";
import styles from "./cms.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaRobot, FaServer, FaLayerGroup } from "react-icons/fa";

const blogs = [
  {
    title: "Modern CMS with AI Integration",
    excerpt: "Explore how AI is reshaping content management systems in 2025.",
    content:
      "In 2025, CMS platforms are adopting AI for personalized content delivery, predictive analytics, and natural language generation. This helps businesses reduce manual work and enhance user engagement with intelligent recommendations and automation.",
    icon: <FaRobot className={styles.cardIcon} />,
    link: "/blog/ai-cms",
  },
  {
    title: "Headless CMS vs Traditional CMS",
    excerpt: "Which CMS architecture should you choose for scalability and speed?",
    content:
      "Headless CMS separates the backend content from frontend presentation. It allows developers to deliver content via APIs to multiple platforms (web, mobile, IoT). This approach provides flexibility, performance, and better frontend control.",
    icon: <FaServer className={styles.cardIcon} />,
    link: "/blog/headless-vs-traditional",
  },
  {
    title: "Top 5 CMS Platforms in 2025",
    excerpt: "Discover the best platforms powering websites globally.",
    content:
      "Leading CMS platforms like WordPress, Strapi, Sanity, Contentful, and Ghost offer rich features. From visual builders to developer-friendly APIs, each caters to different needs, such as SEO, e-commerce, blogging, or enterprise portals.",
    icon: <FaLayerGroup className={styles.cardIcon} />,
    link: "/blog/top-cms-2025",
  },
];

const CmsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.cmsWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          CMS Development & Management
        </motion.h1>
        <p>
          Scalable content platforms tailored for marketing, blogging, enterprise portals,
          and AI-powered automation.
        </p>
      </section>

      {/* Blog Cards */}
      <section className={styles.blogSection}>
        <h2 className={styles.blogHeading}>Latest Articles & Insights</h2>
        <div className={styles.grid}>
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${expandedIndex === index ? styles.expanded : ""}`}
              onClick={() => toggleCard(index)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.iconWrapper}>{blog.icon}</div>
              <div className={styles.content}>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className={styles.expandedContent}
                    >
                      <p>{blog.content}</p>
                      <Link href={blog.link} className={styles.readMore}>
                        Read Full Article →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <Link href="/contact" className={styles.ctaButton}>
            Book a Free CMS Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CmsPage;

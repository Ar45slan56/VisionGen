// pages/solutions/ai/computer-vision.js
"use client";

import { useState } from "react";
import { FaCamera, FaBrain, FaRobot, FaCogs } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import styles from "./ComputerVision.module.css";

const testimonials = [
  {
    name: "Ali Raza",
    position: "CTO, TechNova",
    detail:
      "Vision-GEN’s computer vision solution significantly enhanced our quality inspection process. Great results with real-time accuracy.",
  },
  {
    name: "Sara Khan",
    position: "AI Lead, InnovateX",
    detail:
      "The facial recognition and object detection tools from Vision-GEN helped us launch our security platform 3 months ahead of schedule.",
  },
  {
    name: "Zain Ahmed",
    position: "Product Manager, AutoVision",
    detail:
      "Their AI-powered visual analysis enabled autonomous decision-making in our robotics department. Reliable and fast delivery.",
  },
];

const articles = [
  {
    title: "The Role of Computer Vision in Smart Cities",
    excerpt:
      "Discover how visual AI transforms traffic management, security, and urban planning in tomorrow’s smart cities.",
  },
  {
    title: "Facial Recognition: Ethics & Innovations",
    excerpt:
      "Learn the ethical considerations and breakthroughs in facial recognition systems.",
  },
  {
    title: "AI in Retail: Visual Checkout Systems",
    excerpt:
      "Explore how AI is used to streamline the retail experience using vision-based automation.",
  },
];

export default function ComputerVisionPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Head>
        <title>Computer Vision Solutions | Vision-GEN</title>
      </Head>
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>AI Computer Vision Solutions</h1>
          <p>
            Unlock insights from images and videos using our powerful AI
            vision tools.
          </p>
          <div className={styles.heroIcons}>
            <FaCamera />
            <FaBrain />
            <FaRobot />
            <FaCogs />
          </div>
        </section>

        {/* Animated Info Bar */}
        <div className={styles.animatedBar}>
          <div className={styles.animatedItem}>
            <FaCamera />
            Object Detection
          </div>
          <div className={styles.animatedItem}>
            <FaBrain />
            Facial Recognition
          </div>
          <div className={styles.animatedItem}>
            <FaRobot />
            Automation
          </div>
          <div className={styles.animatedItem}>
            <FaCogs />
            Industrial Vision
          </div>
        </div>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <h2>What Our Clients Say</h2>
          <div className={styles.cards}>
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`${styles.card} ${
                  activeIndex === i ? styles.active : ""
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
              >
                <h3>{item.name}</h3>
                <p className={styles.position}>{item.position}</p>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className={styles.articles}>
          <h2>Related Insights</h2>
          <div className={styles.articleList}>
            {articles.map((article, index) => (
              <div key={index} className={styles.article}>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <h2>Ready to Integrate AI Vision?</h2>
          <p>
            Let’s discuss how Vision-GEN can automate your visual processes.
          </p>
          <Link href="/contact" className={styles.contactBtn}>
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}

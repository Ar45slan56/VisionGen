"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./generative.module.css";
import { FaRobot, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";
// blogarticles
const blogArticles = [
  {
    id: 1,
    title: "What is Generative AI?",
    shortDesc: "Explore the fundamentals of how machines can create text, images, and more.",
    fullContent: "Generative AI is a subset of artificial intelligence focused on creating content such as text, images, music, and even code. It uses models like GPT, DALL·E, and others that learn from massive datasets and then generate original content based on prompts. This technology enables businesses to automate creativity, personalize experiences, and reduce costs. It plays a pivotal role in content creation, customer service, and even software development, transforming industries at scale."
  },
  {
    id: 2,
    title: "Benefits of Generative AI for Business",
    shortDesc: "Discover how businesses are leveraging AI to automate tasks and create faster results.",
    fullContent: "Generative AI empowers businesses by automating content production, streamlining customer interactions, and enabling rapid prototyping. It reduces time-to-market, enhances personalization, and supports scalable innovation. From marketing to engineering, companies use generative AI to create blog posts, images, ads, and even code snippets. It offers a cost-effective way to experiment and ideate faster while delivering consistently high-quality results."
  },
  {
    id: 3,
    title: "How Generative AI Works",
    shortDesc: "Understand the technology behind the generative models.",
    fullContent: "Generative AI models are trained on vast datasets using machine learning techniques like transformers. They learn patterns and structures of data and generate new, similar outputs. Models like GPT generate coherent text, while tools like Midjourney and DALL·E create images from text prompts. These models rely heavily on deep learning, specifically neural networks that understand context, semantics, and visual composition."
  },
  {
    id: 4,
    title: "Future Applications of Generative AI",
    shortDesc: "Explore where this evolving technology is headed.",
    fullContent: "The future of generative AI includes advanced medical diagnostics, personalized education, autonomous creativity, and more. We’ll see AI co-create with humans in art, music, storytelling, and product design. Its role in simulations, digital twins, and synthetic data generation is expected to expand, impacting industries like healthcare, manufacturing, and entertainment in unprecedented ways."
  }
];

export default function GenerativeAI() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Generative AI Services</h1>
        <p>Transforming imagination into innovation using state-of-the-art AI solutions.</p>
      </section>

      {/* Animated Bar */}
      <div className={styles.animatedBar}>
        <span><FaRobot /> AI Content</span>
        <span><FaLightbulb /> Intelligent Ideas</span>
        <span><FaCogs /> Smart Automation</span>
        <span><FaChartLine /> Growth Insights</span>
        <span><FaRobot /> Generative Design</span>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {blogArticles.map(article => (
          <motion.div
            key={article.id}
            className={styles.card}
            whileHover={{ scale: 1.03 }}
            onClick={() => handleCardClick(article.id)}
          >
            <h3>{article.title}</h3>
            <p>{article.shortDesc}</p>
            {activeCard === article.id && (
              <motion.div
                className={styles.fullContent}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                <p>{article.fullContent}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* FAQs */}
      <div className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Is Generative AI secure?</summary>
          <p>Yes. With proper data governance and model oversight, generative AI can be used safely and securely.</p>
        </details>
        <details>
          <summary>Where is Generative AI used?</summary>
           <p>In marketing, software, art, music, gaming, healthcare, and more. It&#39;s versatile and expanding rapidly.</p>
        </details>
        <details>
          <summary>Can it replace human creativity?</summary>
          <p>No. It enhances human creativity by providing suggestions and inspiration, not full replacements.</p>
        </details>
      </div>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h3>Ready to Build with AI?</h3>
        <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
      </section>
    </div>
  );
}

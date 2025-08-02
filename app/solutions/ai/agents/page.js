"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./agents.module.css";
import Link from "next/link";

const agents = [
  {
    name: "Vision AI",
    description:
      "Empower your customer support with Vision AI – our multilingual agent delivers 24/7 intelligent conversations and real-time insights.",
    animation: "🤖",
  },
  {
    name: "ML Bot",
    description:
      "Automate data analysis with ML Bot – a machine learning agent that handles classification, predictions, and smart recommendations.",
    animation: "📊",
  },
  {
    name: "Tensor Assistant",
    description:
      "Harness deep learning with Tensor Assistant – powered by TensorFlow for neural network predictions and seamless AI automation.",
    animation: "🧠",
  },
  {
    name: "Python Genie",
    description:
      "Bring custom logic to life using Python Genie – an intelligent agent that executes AI tasks, NLP pipelines, and automation scripts.",
    animation: "🐍",
  },
];

const staticBlogs = [
  {
    title: "Top AI Trends in 2025",
    description:
      "Explore what’s driving the future of artificial intelligence this year — from generative models to autonomous agents.",
    full: "This year, AI is moving beyond automation. From ethical frameworks to embedded cognition, discover how AI is reshaping everything from customer support to content creation. Generative AI will play a pivotal role in human-machine co-creativity.",
  },
  {
    title: "The Evolution of Chatbots",
    description:
      "From rule-based bots to GPT-powered assistants, see how conversational AI is revolutionizing support systems.",
    full: "Chatbots have evolved from simple scripted responders to intelligent dialogue engines. With large language models, businesses now deploy bots that can understand nuance, context, and even emotion — unlocking new dimensions in CX.",
  },
];

const Agents = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const toggleExpand = (index) => {
    setExpandedBlog(index === expandedBlog ? null : index);
  };

  return (
    <section className={styles.agentsSection}>
      {/* Heading */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 AI Agents that Transform Your Business
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover how our intelligent agents automate workflows, boost customer
        service, and offer smart business solutions.
      </motion.p>

      {/* Grid of Agents */}
      <div className={styles.grid}>
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.emoji}>{agent.animation}</span>
            </div>
            <h3 className={styles.agentName}>{agent.name}</h3>
            <p className={styles.description}>{agent.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/contact" className={styles.ctaButton}>
          Talk to an AI Expert →
        </Link>
      </motion.div>

      {/* Blog Section */}
      <div className={styles.blogSection}>
        <motion.h3
          className={styles.blogHeading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          📘 Latest AI Blogs
        </motion.h3>

        <div className={styles.blogs}>
          {staticBlogs.map((blog, index) => (
            <div key={index} className={styles.blogCard}>
              <div className={styles.blogContent}>
                <h4 className={styles.blogTitle}>{blog.title}</h4>
                <p className={styles.blogDescription}>{blog.description}</p>
                <button
                  className={styles.readMore}
                  onClick={() => toggleExpand(index)}
                >
                  {expandedBlog === index ? "Show Less ↑" : "Read More ↓"}
                </button>

                {expandedBlog === index && (
                  <motion.div
                    className={styles.expandedContent}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{blog.full}</p>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;

"use client";

import { useEffect, useState } from "react";
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

const Agents = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blogs/");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className={styles.agentsSection}>
      {/* Title */}
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
          <Link href="/blogs/ai-trends" className={styles.blogCard}>
            <div className={styles.blogContent}>
              <h4 className={styles.blogTitle}>Top AI Trends in 2025</h4>
              <p className={styles.blogDescription}>
                Explore what’s driving the future of artificial intelligence
                this year — from generative models to autonomous agents.
              </p>
              <p className={styles.readMore}>Read More →</p>
            </div>
          </Link>

          <Link href="/blogs/chatbots-evolution" className={styles.blogCard}>
            <div className={styles.blogContent}>
              <h4 className={styles.blogTitle}>The Evolution of Chatbots</h4>
              <p className={styles.blogDescription}>
                From rule-based bots to GPT-powered assistants, see how
                conversational AI is revolutionizing support systems.
              </p>
              <p className={styles.readMore}>Read More →</p>
            </div>
          </Link>

          {loading ? (
            <p className={styles.loading}>Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className={styles.loading}>No blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <Link
                href={`/blogs/${blog.slug}`}
                key={blog.id}
                className={styles.blogCard}
              >
                <div className={styles.blogContent}>
                  <h4 className={styles.blogTitle}>{blog.title}</h4>
                  <p className={styles.blogDescription}>
                    {blog.excerpt?.length > 120
                      ? `${blog.excerpt.slice(0, 120)}...`
                      : blog.excerpt ||
                        "An exciting blog on AI and tech innovation."}
                  </p>
                  <p className={styles.readMore}>Read More →</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Agents;

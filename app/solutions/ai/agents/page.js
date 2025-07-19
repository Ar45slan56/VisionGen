"use client";

import { motion } from "framer-motion";
import styles from "./agents.module.css";
import Image from "next/image";
import Link from "next/link";

const agents = [
  {
    name: "Vision AI",
    description:
      "Empower your customer support with Vision AI – our multilingual agent delivers 24/7 intelligent conversations and real-time insights.",
    icon: "/icons/openai.svg",
    animation: "🤖",
  },
  {
    name: "ML Bot",
    description:
      "Automate data analysis with ML Bot – a machine learning agent that handles classification, predictions, and smart recommendations.",
    icon: "/icons/machineLearning.png",
    animation: "📊",
  },
  {
    name: "Tensor Assistant",
    description:
      "Harness deep learning with Tensor Assistant – powered by TensorFlow for neural network predictions and seamless AI automation.",
    icon: "/icons/tenserflow.png",
    animation: "🧠",
  },
  {
    name: "Python Genie",
    description:
      "Bring custom logic to life using Python Genie – an intelligent agent that executes AI tasks, NLP pipelines, and automation scripts.",
    icon: "/icons/python.svg",
    animation: "🐍",
  },
];

const Agents = () => {
  return (
    <section className={styles.agentsSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        🚀 AI Agents that Transform Your Business
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover how our custom-built intelligent agents can automate your workflows, improve customer experience, and deliver smart solutions.
      </motion.p>

      <div className={styles.grid}>
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={agent.icon}
                alt={agent.name}
                width={50}
                height={50}
                className={styles.icon}
              />
              <span className={styles.emoji}>{agent.animation}</span>
            </div>
            <h3 className={styles.agentName}>{agent.name}</h3>
            <p className={styles.description}>{agent.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/contact" className={styles.ctaButton}>
          Talk to an AI Expert →
        </Link>
      </motion.div>

      {/* Blog Preview Section */}
      <div className={styles.blogSection}>
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          📘 Latest AI Blogs
        </motion.h3>
        <div className={styles.blogs}>
          <Link href="/blogs/ai-trends" className={styles.blogCard}>
            <h4>Top AI Trends in 2025</h4>
            <p>Explore what's driving the future of artificial intelligence this year.</p>
          </Link>
          <Link href="/blogs/chatbots-evolution" className={styles.blogCard}>
            <h4>The Evolution of Chatbots</h4>
            <p>From scripted bots to GPT-powered agents, see how chatbots have transformed.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Agents;

"use client";
import styles from "../styles/HeroSection.module.css";
import { motion } from "framer-motion";

export default function HeroSection({ title }) {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
    </section>
  );
}

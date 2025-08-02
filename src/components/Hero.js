// Hero.js
"use client";
import styles from "../styles/Hero.module.css";
import AnimatedBackground from "./AnimatedBackground";
import SpinningRobot from "./SpinningRobot";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <AnimatedBackground />
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Transform Your Business with Intelligent AI Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={styles.subtitle}
          >
            We automate processes, enhance decision-making, and fuel innovation through cutting-edge AI technologies.
          </motion.p>
          <div className={styles.buttonGroup}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className={styles.ctaPrimary}
              href="#services"
            >
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className={styles.ctaSecondary}
              href="#demo"
            >
              Watch Demo
            </motion.a>
          </div>
        </div>
        <div className={styles.rightVisual}>
          <SpinningRobot />
        </div>

      </div>
    </section>
  );
};

export default Hero;
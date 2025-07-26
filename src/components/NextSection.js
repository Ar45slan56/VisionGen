"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/NextSection.module.css";
import servicesData from "../data/servicesData";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const BackgroundScene = dynamic(() => import("./BackgroundScene"), { ssr: false });

const NextSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollDir, setScrollDir] = useState("down"); // ✅ Valid JS
  const lastScrollY = useRef(0);
  const sectionRefs = useRef([]);

  // Scroll direction detector
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.reveal);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={styles.backgroundCanvas}>
        <BackgroundScene />
      </div>

      <motion.h2
        id="services-heading"
        className={styles.heading}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Explore Our Services
      </motion.h2>

      <motion.div
        className={styles.searchWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </motion.div>

      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a href="/contact" className={styles.ctaButton} role="button">
          🚀 Book a Free Consultation
        </a>
      </motion.div>

      {servicesData.map((category, catIndex) => {
        const filtered = category.services.filter((service) =>
          service.title.toLowerCase().includes(searchTerm) ||
          service.description.toLowerCase().includes(searchTerm)
        );

        if (filtered.length === 0) return null;

        return (
          <div
            key={category.category}
            ref={(el) => (sectionRefs.current[catIndex] = el)}
            className={styles.categoryBlock}
          >
            <motion.h3
              className={styles.categoryTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {category.category}
            </motion.h3>

            <div className={styles.cardGrid}>
              {filtered.map((service, index) => {
                const Icon = service.icon;
                const directionY = scrollDir === "down" ? 30 : -30;

                return (
                  <motion.a
                    key={index}
                    href={service.href}
                    className={styles.card}
                    initial={{ opacity: 0, y: directionY }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon className={styles.icon} />
                    </div>
                    <h4 className={styles.title}>{service.title}</h4>
                    <p className={styles.description}>{service.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NextSection;

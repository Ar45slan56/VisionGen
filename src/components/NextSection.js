"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/NextSection.module.css";
import servicesData from "../data/servicesData";
import { motion } from "framer-motion";

const NextSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const sectionRefs = useRef([]);

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
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <h2 id="services-heading" className={styles.heading}>
        Our Services
      </h2>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          className={styles.searchInput}
        />
      </div>

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
            <h3 className={styles.categoryTitle}>{category.category}</h3>

            <div className={styles.cardGrid}>
              {filtered.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.a
                    key={index}
                    href={service.href}
                    className={styles.card}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    aria-label={`View ${service.title}`}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon className={styles.icon} aria-hidden="true" />
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

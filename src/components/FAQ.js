"use client";
import styles from "../styles/Faq.module.css";

export default function FaqSection() {
  return (
    <section className={styles.faq}>
      <h2>FAQs</h2>
      <details>
        <summary>What services do you offer?</summary>
        <p>We offer AI, Web, and Automation services.</p>
      </details>
      <details>
        <summary>How to get started?</summary>
        <p>Fill out our contact form and we’ll reach out.</p>
      </details>
    </section>
  );
}

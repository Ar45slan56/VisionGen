"use client";
import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Clients Say</h2>
      <div className={styles.testimonialCard}>
        <p>“Awesome service! Highly recommended.”</p>
        <h4>– John Doe</h4>
      </div>
    </section>
  );
}

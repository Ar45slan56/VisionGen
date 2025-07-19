"use client";
import styles from "../styles/ToolsBanner.module.css";
import Marquee from "react-fast-marquee";

export default function ToolsBanner() {
  return (
    <section className={styles.banner}>
      <Marquee speed={50}>
        {["Python", "Next.js", "Django", "AI", "Automation"].map((tool) => (
          <span key={tool} className={styles.tool}>
            {tool}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

"use client";

import React from "react";
import styles from "../styles/ToolScroller.module.css"; // CSS module for styling
import tools from "../data/toolsData"; // array of tools with { icon, label }

const ToolScroller = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Powering Our Stack</h2>
      <div className={styles.scrollerWrapper}>
        <div className={styles.marquee}>
          {[...tools, ...tools].map((tool, index) => (
            <div className={styles.toolCard} key={index}>
              <img src={tool.icon} alt={tool.label} className={styles.icon} />
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolScroller;

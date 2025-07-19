'use client';

import styles from './prediction.module.css';
import { useState } from 'react';
import { MdOutlineInsights } from 'react-icons/md';

const blogs = [
  {
    title: 'Predictive Maintenance with AI',
    content: `
      In modern industries, downtime is a costly enemy. VisionGEN’s predictive maintenance uses AI to forecast failures before they happen. Our models ingest sensor data, environmental metrics, and historical performance to identify early signs of degradation.

      Unlike reactive models, predictive systems prevent breakdowns rather than manage them. This results in reduced service costs, extended asset lifespans, and increased safety across the board. Our platform adapts in real time, learning from usage patterns and evolving with new operational inputs.

      With VisionGEN, predictive intelligence becomes a strategic advantage. From robotics to HVAC, our tools empower teams to act before problems arise—unlocking a future of reliability.
    `
  },
  {
    title: 'Market Trend Forecasting',
    content: `
      Understanding tomorrow’s market today is every business leader’s dream. Our trend forecasting engine blends structured data, social signals, and economic indicators into live models that refine themselves with time.

      VisionGEN's algorithms learn from user behavior, competitive movements, and global trends, offering granular insights into demand patterns, product adoption, and pricing reactions. Our forecasting interface provides confidence intervals and simulated futures, helping teams make risk-aware decisions.

      Whether you're planning inventory, launching a campaign, or adjusting financial portfolios, VisionGEN’s predictive edge keeps you informed and ahead.
    `
  },
  {
    title: 'VisionGEN’s Smart Prediction Engine',
    content: `
      Built from ground up using modular ML architecture, VisionGEN’s prediction engine is more than just analytics—it’s a decision-making partner. We combine historical data, adaptive algorithms, and real-time feedback loops to produce models that evolve dynamically.

      Our engine supports plug-and-play data connectors and offers transparent performance dashboards. You can inspect data sources, retrain models, and define target metrics—all without needing a data science team.

      Designed for versatility, the engine suits industries from logistics to e-commerce, ensuring data is transformed into foresight, not just hindsight.
    `
  },
  {
    title: 'Client Success Stories',
    content: `
      From manufacturing plants in UAE to retail chains in Pakistan, VisionGEN’s predictions have transformed operations worldwide. One client reduced equipment downtime by 42% using our predictive maintenance tools; another used market trend models to time a product launch perfectly.

      These stories reflect not just technical success but business impact. Our AI-driven tools have saved millions in lost revenue, improved customer satisfaction, and streamlined workflows.

      Clients trust VisionGEN because we turn complexity into clarity—delivering insights that drive action and growth.
    `
  }
];

export default function PredictionPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>AI-Powered Prediction Solutions</h1>
          <p>
            VisionGEN designs intelligent forecasting systems that adapt in real time to power smarter decisions. From maintenance predictions to demand simulation, our tools transform data into clarity.
          </p>
          <a className={styles.contactBtn} href="/contact">Get in Touch</a>
        </div>
        <div className={styles.heroVisual}>
          <MdOutlineInsights className={styles.heroIcon} />
        </div>
      </section>

      {/* Animated Bar */}
      <div className={styles.animatedBarWrapper}>
        <div className={styles.animatedBar}>
          <span>Smart Forecasting</span>
          <span>Real-Time Models</span>
          <span>AI Innovation</span>
          <span>Scalable Intelligence</span>
        </div>
      </div>

      {/* Blog Section */}
      <section className={styles.articlesSection}>
        <h2>Latest Blogs</h2>
        <div className={styles.articleGrid}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`${styles.articleCard} ${openIndex === index ? styles.active : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3>{blog.title}</h3>
              {openIndex === index && <p>{blog.content}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

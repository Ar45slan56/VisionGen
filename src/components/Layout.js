"use client";

import Navbar from "@/components/Navbar";
import styles from "@/styles/PageWrapper.module.css";

export default function Layout({ title, subtitle, children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0c29] text-white font-sans">
        <Navbar />
        <main className="pt-24 px-6">
          <div className={styles.wrapper}>
            {title && <h1 className={styles.heading}>{title}</h1>}
            {subtitle && <p className={styles.subheading}>{subtitle}</p>}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

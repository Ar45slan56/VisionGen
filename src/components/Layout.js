// components/Layout.js
import styles from '@/styles/PageWrapper.module.css';
export default function Layout({ title, subtitle, children }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.subheading}>{subtitle}</p>
      {children}
    </div>
  );
}

import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Background Glow */}
      <div className={styles.top}>
        {/* Branding Section */}
        <div>
          <h2 className={styles.logo}>VISIONGEN</h2>
          <p className={styles.tagline}>
            Shaping intelligent systems for tomorrow.
          </p>
          <div className={styles.social}>
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiYoutube /></a>
            <a href="mailto:contact@visiongen.ai"><FiMail /></a>
          </div>
        </div>

        {/* Services */}
        <div className={styles.services}>
          <h4>Core Services</h4>
          <ul>
            <li><Link href="#">AI Agents & Automation</Link></li>
            <li><Link href="#">n8n Workflows</Link></li>
            <li><Link href="#">Vision Systems</Link></li>
            <li><Link href="#">Custom CMS</Link></li>
            <li><Link href="#">Web UI/UX</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h4>Get In Touch</h4>
          <p>
            Phone: <a href="tel:+923011234567" className={styles.contactLink}>+92 301 1234567</a>
          </p>
          <p>
            Email: <a href="mailto:contact@visiongen.ai" className={styles.contactLink}>contact@visiongen.ai</a>
          </p>
          <p>Locations:</p>
          <ul>
            <li>Pakistan</li>
            <li>UAE</li>
            <li>UK</li>
            <li>USA</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h4>Join Our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter Email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Bottom Links */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} VisionGEN. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="#">Careers</Link>
          <Link href="#">Privacy Policy</Link>
          <span className={styles.lang}>EN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

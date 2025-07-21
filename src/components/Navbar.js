"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import gsap from "gsap";
import styles from "../styles/Navbar.module.css";
import navLinks from "../data/navLinks";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileActive, setMobileActive] = useState({});

  const dropdownRefs = useRef({});
  const subDropdownRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activeDropdown !== null && dropdownRefs.current[activeDropdown]) {
      requestAnimationFrame(() =>
        gsap.fromTo(
          dropdownRefs.current[activeDropdown],
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        )
      );
    }
  }, [activeDropdown]);

  useEffect(() => {
    if (
      activeSubDropdown !== null &&
      subDropdownRefs.current[activeSubDropdown]
    ) {
      requestAnimationFrame(() =>
        gsap.fromTo(
          subDropdownRefs.current[activeSubDropdown],
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" }
        )
      );
    }
  }, [activeSubDropdown]);

  const toggleDropdown = useCallback((index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
    setActiveSubDropdown(null);
  }, []);

  const toggleMobileDropdown = useCallback((key) => {
    setMobileActive((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logovision2.png"
              alt="VisionGEN Logo"
              width={140}
              height={50}
              priority
            />
          </Link>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <FiX size={26} color="#06c167" />
          ) : (
            <FiMenu size={26} color="#06c167" />
          )}
        </div>

        <ul className={styles.navLinks}>
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`${item.subItems ? styles.hasDropdown : ""} ${pathname === item.href ? styles.activeLink : ""
                }`}
              onMouseEnter={() => item.subItems && toggleDropdown(index)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              {item.href ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.dropdownLabel}>
                  {item.label}
                  <FiChevronDown
                    className={`${styles.arrow} ${activeDropdown === index ? styles.rotate : ""
                      }`}
                  />
                </span>
              )}

              {item.subItems && (
                <ul
                  className={styles.dropdown}
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  style={{
                    display: activeDropdown === index ? "block" : "none",
                  }}
                >
                  {item.subItems.map((subItem, subIndex) =>
                    subItem.subItems ? (
                      <li
                        key={subIndex}
                        className={styles.hasDropdown}
                        onMouseEnter={() =>
                          setActiveSubDropdown(`${index}-${subIndex}`)
                        }
                        onMouseLeave={() => setActiveSubDropdown(null)}
                      >
                        <span className={styles.dropdownLabel}>
                          {subItem.label}
                          <FiChevronRight className={styles.arrow} />
                        </span>
                        <ul
                          className={styles.subDropdown}
                          ref={(el) =>
                            (subDropdownRefs.current[
                              `${index}-${subIndex}`
                            ] = el)
                          }
                          style={{
                            display:
                              activeSubDropdown === `${index}-${subIndex}`
                                ? "block"
                                : "none",
                          }}
                        >
                          {subItem.subItems.map((deepItem, deepIndex) => (
                            <li key={deepIndex}>
                              <Link
                                href={deepItem.href || "#"}
                                className={styles.dropdownLink}
                              >
                                {deepItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href || "#"}
                          className={styles.dropdownLink}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}

          <li>
            <Link href="/contact" className={styles.bookButton}>
              Book a Free Call
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""
            }`}
        >
          {navLinks.map((item, index) => (
            <div key={index} className={styles.mobileItem}>
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={styles.link}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <span
                    className={styles.mobileDropdownLabel}
                    onClick={() => toggleMobileDropdown(index)}
                  >
                    {item.label}
                    <FiChevronDown
                      className={`${styles.arrow} ${mobileActive[index] ? styles.rotate : ""
                        }`}
                    />
                  </span>
                  <div
                    className={`${styles.mobileDropdownWrapper} ${mobileActive[index] ? styles.open : ""
                      }`}
                  >
                    <div className={styles.mobileDropdown}>
                      {item.subItems?.map((sub, subIndex) =>
                        sub.subItems ? (
                          <div key={subIndex}>
                            <span
                              className={styles.mobileDropdownLabel}
                              onClick={() =>
                                toggleMobileDropdown(`${index}-${subIndex}`)
                              }
                            >
                              {sub.label}
                              <FiChevronDown
                                className={`${styles.arrow} ${mobileActive[`${index}-${subIndex}`]
                                  ? styles.rotate
                                  : ""
                                  }`}
                              />
                            </span>
                            <div
                              className={`${styles.mobileDropdownWrapper} ${mobileActive[`${index}-${subIndex}`]
                                ? styles.open
                                : ""
                                }`}
                            >
                              <div className={styles.mobileSubDropdown}>
                                {sub.subItems.map((deep, deepIndex) => (
                                  <Link
                                    href={deep.href || "#"}
                                    key={deepIndex}
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {deep.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={sub.href || "#"}
                            key={subIndex}
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}

          <div className={styles.mobileItem}>
            <Link
              href="/book-call"
              className={styles.bookButton}
              onClick={() => setMenuOpen(false)}
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

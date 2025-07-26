"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import navLinks from "../data/navLinks";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileActive, setMobileActive] = useState({});
  const [hovered, setHovered] = useState(false); // 👈 new

  const dropdownRefs = useRef({});
  const subDropdownRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navBg = isScrolled || hovered ? "bg-white shadow-lg" : "bg-transparent";

  return (
    <nav className="group fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300">
      <div
        className={`w-full px-8 py-5 transition-colors duration-300 backdrop-blur-sm bg-transparent group-hover:bg-white ${navBg}`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logovision2.png"
              alt="VisionGEN Logo"
              width={200}
              height={20}
              priority
            />
          </Link>

          {/* Hamburger Icon */}
          <div
            className="block md:hidden z-[1001]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <FiX size={26} color="#06c167" />
            ) : (
              <FiMenu size={26} color="#06c167" />
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center list-none">
            {navLinks.map((item, index) => (
              <div
                key={index}
                className="relative hover:bg-white transition-colors duration-200 rounded-md"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <li className="relative px-2 py-1">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`relative text-base font-medium px-2 py-1 text-black transition-colors duration-200
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                      after:bg-[#06c167] after:transition-all after:duration-300
                      hover:text-[#06c167] hover:after:w-full
                      ${pathname === item.href ? "text-[#06c167] after:w-full" : ""}
                    `}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      onClick={() => toggleDropdown(index)}
                      className={`relative flex items-center cursor-pointer font-medium px-2 py-1 text-black transition-colors duration-200
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                      after:bg-[#06c167] after:transition-all after:duration-300
                      hover:text-[#06c167] hover:after:w-full
                      ${activeDropdown === index ? "text-[#06c167] after:w-full" : ""}
                    `}
                    >
                      {item.label}
                      <FiChevronDown
                        className={`ml-1 transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""
                          }`}
                      />
                    </span>
                  )}
                </li>

                {item.subItems && (
                  <ul
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    className={`absolute top-full left-0 min-w-[260px] mt-2 bg-white rounded-xl shadow-lg py-2 z-50 ${activeDropdown === index ? "block" : "hidden"
                      }`}
                  >
                    {item.subItems.map((subItem, subIndex) =>
                      subItem.subItems ? (
                        <li
                          key={subIndex}
                          className="relative"
                          onMouseEnter={() =>
                            setActiveSubDropdown(`${index}-${subIndex}`)
                          }
                          onMouseLeave={() => setActiveSubDropdown(null)}
                        >
                          <span className="flex justify-between items-center px-4 py-2 text-sm cursor-pointer hover:bg-green-50 hover:text-[#06c167]">
                            {subItem.label}
                            <FiChevronRight />
                          </span>
                          <ul
                            ref={(el) =>
                              (subDropdownRefs.current[`${index}-${subIndex}`] = el)
                            }
                            className={`absolute left-full top-0 ml-2 min-w-[240px] bg-white rounded-xl shadow-lg py-2 ${activeSubDropdown === `${index}-${subIndex}`
                              ? "block"
                              : "hidden"
                              }`}
                          >
                            {subItem.subItems.map((deepItem, deepIndex) => (
                              <li key={deepIndex}>
                                <Link
                                  href={deepItem.href || "#"}
                                  className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-[#06c167]"
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
                            className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-[#06c167]"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <li className="z-10 relative">
              <Link
                href="/contact"
                className="inline-block px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-[#02fa83] to-[#6ef0af] rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-out whitespace-nowrap text-center"
              >
                Book a Free Call
              </Link>
            </li>


          </ul>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-white to-neutral-100 z-[999] flex flex-col gap-6 px-6 py-16 overflow-y-auto transition-all duration-500 ease-in-out ${menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
              }`}
          >
            {navLinks.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-black hover:text-green-600 transition duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    {/* Level 1 */}
                    <div
                      className="flex justify-between items-center text-base font-semibold text-black cursor-pointer hover:text-green-600"
                      onClick={() => toggleMobileDropdown(index)}
                    >
                      {item.label}
                      <FiChevronDown
                        className={`ml-2 transition-transform duration-300 ${mobileActive[index] ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>

                    {/* Level 2 */}
                    <div
                      className={`ml-4 overflow-hidden transition-all duration-500 ease-in-out ${mobileActive[index]
                          ? "max-h-[1000px] opacity-100 mt-2"
                          : "max-h-0 opacity-0 -translate-y-2"
                        }`}
                    >
                      {item.subItems?.map((sub, subIndex) =>
                        sub.subItems ? (
                          <div key={subIndex} className="space-y-1">
                            {/* Level 2 Parent */}
                            <div
                              className="flex justify-between items-center text-sm font-medium text-black cursor-pointer hover:text-green-600"
                              onClick={() =>
                                toggleMobileDropdown(`${index}-${subIndex}`)
                              }
                            >
                              {sub.label}
                              <FiChevronDown
                                className={`ml-2 transition-transform duration-300 ${mobileActive[`${index}-${subIndex}`]
                                    ? "rotate-180"
                                    : "rotate-0"
                                  }`}
                              />
                            </div>

                            {/* Level 3 */}
                            <div
                              className={`ml-4 overflow-hidden transition-all duration-500 ease-in-out ${mobileActive[`${index}-${subIndex}`]
                                  ? "max-h-[1000px] opacity-100 mt-1"
                                  : "max-h-0 opacity-0 -translate-y-2"
                                }`}
                            >
                              {sub.subItems.map((deep, deepIndex) =>
                                deep.subItems ? (
                                  <div key={deepIndex} className="space-y-1">
                                    {/* Level 3 Parent */}
                                    <div
                                      className="flex justify-between items-center text-sm font-medium text-black cursor-pointer hover:text-green-600"
                                      onClick={() =>
                                        toggleMobileDropdown(
                                          `${index}-${subIndex}-${deepIndex}`
                                        )
                                      }
                                    >
                                      {deep.label}
                                      <FiChevronDown
                                        className={`ml-2 transition-transform duration-300 ${mobileActive[
                                            `${index}-${subIndex}-${deepIndex}`
                                          ]
                                            ? "rotate-180"
                                            : "rotate-0"
                                          }`}
                                      />
                                    </div>

                                    {/* Level 4 */}
                                    <div
                                      className={`ml-4 overflow-hidden transition-all duration-500 ease-in-out ${mobileActive[
                                          `${index}-${subIndex}-${deepIndex}`
                                        ]
                                          ? "max-h-[1000px] opacity-100 mt-1"
                                          : "max-h-0 opacity-0 -translate-y-2"
                                        }`}
                                    >
                                      {deep.subItems.map((final, finalIndex) => (
                                        <Link
                                          href={final.href || "#"}
                                          key={finalIndex}
                                          className="block text-sm text-[#02c56d] hover:text-[#05a456] hover:translate-x-1 transition-all duration-300 pl-2"
                                          onClick={() => setMenuOpen(false)}
                                        >
                                          {final.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <Link
                                    href={deep.href || "#"}
                                    key={deepIndex}
                                    className="block text-sm text-[#02c56d] hover:text-[#05a456] hover:translate-x-1 transition-all duration-300 pl-2"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {deep.label}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={sub.href || "#"}
                            key={subIndex}
                            className="block text-sm text-gray-700 hover:text-green-600 transition duration-200"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="w-full flex justify-center mt-8">
              <Link
                href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#ace3c9] to-[#6ef0af] rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap text-center"
                onClick={() => setMenuOpen(false)}
              >
                Book a Free Call
              </Link>
            </div>
          </div>




        </div>
      </div>
    </nav>
  );
};

export default Navbar;

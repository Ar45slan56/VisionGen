"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "../data/navLinks";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Sticky navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside to close mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${scrolled
          ? "bg-[#0f0c29]/90 shadow-lg"
          : "bg-gradient-to-br from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-[99999] flex items-center justify-center shrink-0 rounded-full group hover:scale-[1.02] transition duration-300"
        >
          <div className="h-20 w-30 rounded-full overflow-hidden">
            <motion.img
              src="/visiongen222.png"
              alt="VisionGen Logo"
              className="h-full w-full object-cover drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(0,255,255,0.5)]"
              initial={{ scale: 2 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center text-sm font-medium text-white ml-auto">
          {navLinks.map((item, i) => (
            <Dropdown key={i} item={item} pathname={pathname} />
          ))}
          <Link
            href="/contact"
            className="bg-purple-600 hover:bg-purple-700 transition text-white font-bold px-4 py-2 rounded-xl shadow-md"
          >
            Contact Sales
          </Link>
        </div>

        {/* Mobile toggle */}
        {!mobileOpen && (
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white z-[99999]"
          >
            <Menu size={28} />
          </button>
        )}

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#0f0c29]/95 backdrop-blur-2xl px-6 py-10 text-white z-[9998] overflow-y-auto"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setMobileOpen(false)}>
                <X size={32} className="text-white" />
              </button>
            </div>
            {navLinks.map((item, i) => (
              <div key={i} className="mb-6">
                <Link
                  href={item.href || "#"}
                  className={`block text-lg font-bold mb-2 ${pathname === item.href ? "text-purple-300" : "text-white"
                    }`}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="ml-4 space-y-1">
                    {item.subItems.map((sub, j) =>
                      sub.subItems ? (
                        <div key={`${i}-${j}`}>
                          <p className="text-sm font-bold text-purple-300 mb-1">
                            {sub.label}
                          </p>
                          {sub.subItems.map((deep, k) => (
                            <Link
                              key={`${i}-${j}-${k}`}
                              href={deep.href}
                              className={`block text-sm ${pathname === deep.href
                                  ? "text-purple-300"
                                  : "hover:text-purple-300"
                                }`}
                            >
                              {deep.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          key={`${i}-${j}`}
                          href={sub.href}
                          className={`block text-sm ${pathname === sub.href
                              ? "text-purple-300"
                              : "hover:text-purple-300"
                            }`}
                        >
                          {sub.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center bg-purple-600 hover:bg-purple-700 transition text-white font-bold px-4 py-3 rounded-xl mt-10"
            >
              Contact Sales
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Dropdown({ item, pathname }) {
  const [isHovering, setIsHovering] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsHovering(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        href={item.href || "#"}
        className={`inline-block pb-1 transition duration-300 ${pathname === item.href
            ? "text-purple-400 font-semibold underline underline-offset-4"
            : "text-white"
          } hover:scale-105 hover:text-purple-300`}
      >
        {item.label}
        <span className="block h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
      </Link>

      <AnimatePresence>
        {isHovering && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 mt-4 bg-black/80 text-white backdrop-blur-lg border border-white/10 rounded-xl shadow-xl px-6 py-4 min-w-[260px] z-[9999] space-y-4"
          >
            {item.subItems.map((sub, j) =>
              sub.subItems ? (
                <div key={j}>
                  <p className="text-sm font-semibold text-purple-300 mb-1">
                    {sub.label}
                  </p>
                  {sub.subItems.map((deep, k) => (
                    <Link
                      key={`${j}-${k}`}
                      href={deep.href}
                      className={`block text-sm ${pathname === deep.href
                          ? "text-purple-300"
                          : "hover:text-purple-300"
                        }`}
                    >
                      {deep.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={j}
                  href={sub.href}
                  className={`block text-sm ${pathname === sub.href
                      ? "text-purple-300"
                      : "hover:text-purple-300"
                    }`}
                >
                  {sub.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

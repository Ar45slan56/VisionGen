"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from 'react-icons/fa';
import gsap from "gsap";

export default function ChatbotHero() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const canvas = document.getElementById("bgCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let dots = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot, i) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const dx = dot.x - dots[j].x;
          const dy = dot.y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 120})`;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#334140] to-[#334152] text-white overflow-hidden">
      <canvas
        id="bgCanvas"
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      ></canvas>

      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight"
        >
          Transform Customer Support with{" "}
          <span className="text-[#38bdf8]">AI-Powered Chatbots</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-lg md:text-xl max-w-2xl"
        >
          Engage, support, and automate conversations with smart AI agents—24/7.
        </motion.p>

{/* scroll button start */}
        <div className="flex justify-center mt-12">
          <a
            href="#next-section"
            className={`inline-flex items-center gap-3 px-12 py-5 text-xl font-semibold text-white rounded-full
      bg-[#3b4a60] shadow-md transition-all duration-700 ease-in-out
      hover:bg-white hover:text-[#3b4a60] hover:shadow-lg
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      scroll-smooth
    `}
          >
            <span
              className={`tracking-wider transition-all duration-200 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
              Scroll Down ...
            </span>
            <FaArrowDown className="text-3xl animate-bounce" />
          </a>
        </div>
        {/* scroll button end */}
      </div>
    </div>
  );
}

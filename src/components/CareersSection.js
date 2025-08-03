"use client";
import { motion } from "framer-motion";

export default function CareersSection() {
  return (
    <section className="relative z-10 py-20 px-4 text-center bg-gradient-to-b from-white to-blue-50">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6">
        Join Our Team
      </motion.h2>
      <p className="max-w-xl mx-auto text-gray-700 mb-6">
        <p>We&#39;re building the future of AI. We believe in transparency, growth, and passion.</p>
      </p>
      <a href="/careers" className="text-blue-700 underline font-semibold">View Open Roles →</a>
    </section>
  );
}

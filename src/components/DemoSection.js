"use client";
import { motion } from "framer-motion";

export default function DemoSection() {
  return (
    <section className="relative z-10 py-20 px-4 text-center bg-black/70 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        How It Works
      </motion.h2>
      <motion.div className="max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
      >
        <video controls className="rounded-lg shadow-lg">
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}

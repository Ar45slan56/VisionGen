"use client";
import { motion } from "framer-motion";

const industries = ["Finance", "Healthcare", "Retail", "Logistics", "Real Estate", "SaaS"];

export default function IndustriesSection() {
  return (
    <section className="relative z-10 py-20 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
      <div className="flex gap-6 overflow-x-auto px-4 snap-x">
        {industries.map((industry, index) => (
          <motion.div key={index}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
            className="min-w-[200px] p-6 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-xl shadow-lg snap-center"
          >
            {industry}
          </motion.div>
        ))}
      </div>
      <a href="/industries" className="mt-8 inline-block text-blue-700 underline font-semibold">See Industry Solutions →</a>
    </section>
  );
}

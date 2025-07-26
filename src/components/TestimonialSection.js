"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "John D.", quote: "VisionGEN transformed our support system!", company: "TechSoft" },
  { name: "Emily R.", quote: "Their AI chatbot saved us 40% in costs.", company: "RetailCloud" },
  { name: "Ahmed S.", quote: "Superb integration and lightning-fast delivery!", company: "LogiX" },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section className="relative z-10 py-20 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
          className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md"
        >
          <p className="text-lg italic">“{testimonial.quote}”</p>
          <div className="mt-4 text-sm font-semibold">{testimonial.name}, {testimonial.company}</div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 space-x-2">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-400"}`} />
        ))}
      </div>
      <a href="/resources/case-studies" className="mt-8 inline-block text-blue-700 underline font-semibold">View Full Case Studies →</a>
    </section>
  );
}

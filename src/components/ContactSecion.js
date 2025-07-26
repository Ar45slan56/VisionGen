"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      setSuccess("✅ Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccess("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your project or question..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </motion.button>
        </form>
        {success && <p className="text-center mt-4 text-green-600 font-medium">{success}</p>}
      </motion.div>
    </section>
  );
}


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Toast from "@/components/toast";

const BackgroundScene = dynamic(() => import("../BackgroundScene"), { ssr: false });

const inputStyle =
  "px-4 py-3 bg-white/10 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 ease-in-out";

export default function MultiLanguageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    organizationType: "",
    country: "",
    queryType: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [expandedBlog1, setExpandedBlog1] = useState(false); // State for first blog card
  const [expandedBlog2, setExpandedBlog2] = useState(false); // State for second blog card

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({
      name: "",
      email: "",
      organization: "",
      organizationType: "",
      country: "",
      queryType: "",
      message: "",
    });
  };

  const BlogCard = ({ title, shortText, longText, isExpanded, setExpanded, colorClass }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? "h-auto" : "h-[180px]"
      } ${colorClass}`}
      onClick={() => setExpanded(!isExpanded)}
      style={{
        background: `linear-gradient(to bottom right, ${colorClass.split('-')[1]} 10%, ${colorClass.split('-')[2]} 90%)`,
      }}
    >
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <motion.p
        initial={false}
        animate={{ opacity: isExpanded ? 1 : 1, height: isExpanded ? "auto" : "50px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-sm text-gray-100 overflow-hidden"
      >
        {isExpanded ? longText : shortText}
      </motion.p>
      <button className="mt-4 text-white hover:underline font-bold">
        {isExpanded ? "Read Less ←" : "Read More →"}
      </button>
    </motion.div>
  );

  return (
    <section className="relative z-10 py-28 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-[#0e161c] to-[#0f1c24] text-white overflow-hidden">
      <BackgroundScene />

      <div className="max-w-7xl mx-auto">
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <Toast message="✅ Your query has been sent!" type="success" />
          </motion.div>
        )}

        {/* Informative Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-green-400 drop-shadow"
          >
            🌐 Multilingual AI Support
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Engage global customers with real-time AI-powered translation in over{" "}
            <strong>100+ languages</strong>. Whether it's Arabic, Urdu, Mandarin, or Spanish — VisionGEN bots understand, respond, and adapt instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-sm text-gray-400 max-w-xl mx-auto"
          >
            Powered by advanced NLP and multilingual embeddings, your customers won’t just be heard — they’ll be understood.
          </motion.div>
        </div>

        {/* Image + Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image
              src="/assets/images/languageSupport.png"
              alt="Multilingual AI Chatbot"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-green-300 mb-2">
              💬 Speak Every Language — Effortlessly
            </h3>
            <p className="text-sm text-gray-200 mb-6">
              Got customers in Brazil? Partners in Turkey? Users in Japan? Our multilingual support empowers your entire journey.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className={inputStyle}
                />
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className={inputStyle}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  required
                  className={inputStyle}
                />
                <input
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  placeholder="Organization Type"
                  required
                  className={inputStyle}
                />
              </div>

              <input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                required
                className={`${inputStyle} w-full`}
              />

              <select
                id="queryType"
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 ease-in-out hover:bg-white/20"
              >
                <option value="" className="text-gray-700 bg-white">Select Query Type</option>
                <option value="demo" className="text-gray-700 bg-white">Request a Demo</option>
                <option value="integration" className="text-gray-700 bg-white">Integration Help</option>
                <option value="pricing" className="text-gray-700 bg-white">Pricing Info</option>
                <option value="general" className="text-gray-700 bg-white">General Inquiry</option>
              </select>

              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className={`${inputStyle} w-full resize-none`}
              />

              <button
                type="submit"
                className="w-full text-[1.125rem] sm:text-[1.2rem] font-bold tracking-wide rounded-lg 
                py-3 px-6 bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white 
                transition-all duration-300 ease-in-out 
                shadow-[inset_0_-2px_0_rgba(0,0,0,0.12),0_6px_14px_-4px_rgba(72,220,132,0.4)] 
                border border-green-300 
                hover:scale-[1.03] hover:shadow-[0_8px_20px_-4px_rgba(72,220,132,0.5)] 
                active:scale-[0.99] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
              >
                📨 Submit Query
              </button>
            </form>
          </motion.div>
        </div>

        {/* Blog Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <BlogCard
            title="🌍 Global Reach with AI"
            shortText="Learn how multilingual AI is enabling businesses to scale globally without communication barriers — from customer support to internal collaboration."
            longText="In today's interconnected world, expanding your business globally is no longer a luxury but a necessity. Multilingual AI solutions act as a bridge, breaking down language barriers that often hinder international growth. From providing seamless customer support in various languages to facilitating internal communication among diverse teams, AI-powered translation ensures your message is accurately conveyed and understood. This not only enhances customer satisfaction but also boosts employee productivity and fosters a truly global enterprise. Explore how these technologies are revolutionizing the way businesses interact with the world, enabling unprecedented reach and impact."
            isExpanded={expandedBlog1}
            setExpanded={setExpandedBlog1}
            colorClass="from-blue-500 to-purple-600"
          />

          <BlogCard
            title="💡 Real-Time Translations"
            shortText="Discover how real-time AI translation reduces response times, increases satisfaction, and supports diverse user bases across industries."
            longText="Real-time AI translation is transforming customer interactions and operational efficiency across numerous industries. By instantly translating conversations, documents, and even live speeches, businesses can significantly reduce response times in customer service, leading to higher satisfaction rates. This immediate understanding fosters stronger relationships with a diverse user base, irrespective of their native language. Imagine a medical professional consulting with a patient from a different linguistic background, or a sales team closing a deal with an international client – all seamlessly facilitated by real-time translation. This technology not only streamlines communication but also opens up new markets and opportunities, ensuring no customer or partner is left unheard."
            isExpanded={expandedBlog2}
            setExpanded={setExpandedBlog2}
            colorClass="from-green-500 to-teal-600"
          />
        </div>
      </div>
    </section>
  );
}

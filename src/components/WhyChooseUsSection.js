"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Brain, Rocket, Users, Code } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
    title: "Secure & Reliable",
    description: (
      <>
        Our infrastructure ensures industry-grade security and uptime.<br />
        <ul className="list-disc list-inside mt-2 text-slate-400 text-sm">
          <li>End-to-end encryption</li>
          <li>99.99% uptime SLA</li>
          <li>Regular security audits</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Brain className="w-10 h-10 text-yellow-400" />,
    title: "AI Expertise",
    description: (
      <>
        Leverage our AI engineers' experience across domains like NLP, vision, and predictive analytics.
        <ul className="list-disc list-inside mt-2 text-slate-400 text-sm">
          <li>Chatbot & assistant integration</li>
          <li>Recommendation engines</li>
          <li>Custom LLM fine-tuning</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Rocket className="w-10 h-10 text-pink-400" />,
    title: "Rapid Deployment",
    description: (
      <>
        Speed without compromise — our prebuilt tools get your projects live in days.
        <ul className="list-disc list-inside mt-2 text-slate-400 text-sm">
          <li>Pretrained model base</li>
          <li>CI/CD-ready AI pipelines</li>
          <li>Low-latency APIs</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Users className="w-10 h-10 text-green-400" />,
    title: "Client-Focused",
    description: (
      <>
        Your goals come first. We adapt, align, and iterate based on your needs.
        <ul className="list-disc list-inside mt-2 text-slate-400 text-sm">
          <li>Weekly feedback loops</li>
          <li>Dedicated account manager</li>
          <li>Multi-language support</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Code className="w-10 h-10 text-red-400" />,
    title: "Custom Integrations",
    description: (
      <>
        We fit into your stack — not the other way around.
        <ul className="list-disc list-inside mt-2 text-slate-400 text-sm">
          <li>CRM/ERP integrations</li>
          <li>Data pipeline compatibility</li>
          <li>API-first architecture</li>
        </ul>
      </>
    ),
  },
];

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <main className="relative bg-gradient-to-b from-[#0e1833] via-[#0c1222] to-[#0e1833] min-h-screen text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      {/* <section className="text-center py-24 px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering the Future with AI
        </motion.h1>
        <motion.p
          className="mt-6 text-lg max-w-2xl mx-auto text-slate-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          VisionGEN delivers smart AI solutions tailored to your growth. Fast, reliable, and future-proof.
        </motion.p>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose VisionGEN?
          </motion.h2>
          <motion.p
            className="text-slate-300 mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We combine innovation, performance, and strategy to help your business grow with AI.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 transition-all duration-300 ${
                expanded === idx ? "scale-[1.03]" : "hover:scale-[1.03]"
              }`}
              onClick={() => toggleCard(idx)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 cursor-pointer">
                {feature.title}
              </h3>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    className="text-slate-300 text-sm mt-2 border-t border-white/10 pt-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

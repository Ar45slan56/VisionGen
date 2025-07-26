"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const BackgroundScene = dynamic(() => import("./BackgroundScene"), {
  ssr: false,
});

const features = [
  {
    title: "24/7 Customer Support",
    description:
      "AI Chatbots provide instant support, reducing wait times and improving customer satisfaction.",
    img: "/assets/images/customer-support.jpg",
    link: "/contact",
  },
  {
    title: "Lead Qualification",
    description:
      "Automatically qualify leads and route them to the right sales reps using smart conversation flows.",
    img: "/assets/images/lead_qualification.jpg",
    link: "/solutions/ai/chatbots/lead-connection",
  },
  {
    title: "Multi-language Support",
    description:
      "Break barriers with AI chatbots that understand and reply in multiple languages.",
    img: "/assets/images/languageSupport.png",
    link: "/solutions/ai/chatbots/multi-language",
  },
];

export default function ChatbotNextSection() {
  return (
    <section
      id="next-section"
      className="relative z-10 py-24 px-4 sm:px-8 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#334140" }}
    >
      <BackgroundScene />

      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          🤖 Why Choose AI Chatbots?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12 text-lg text-gray-200"
        >
          Enhance user experience, streamline support operations, and automate tasks with cutting-edge AI chatbot solutions.
        </motion.p>

        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          🚀 Key Features of Our AI Chatbots
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <Link key={i} href={item.link}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="cursor-pointer h-full bg-white/10 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all p-6 sm:p-8 group relative overflow-hidden border border-white/20 flex flex-col"
              >
                <div className="relative w-full h-[220px] mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-base mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

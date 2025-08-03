"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";

// Dummy testimonials
const testimonials = [
  {
    name: "Sarah Malik",
    feedback: "Visiongen transformed our customer support with AI chatbots that work 24/7!",
  },
  {
    name: "Ahmed Raza",
    feedback: "The automation pipelines built by Visiongen saved us hundreds of hours every month.",
  },
  {
    name: "Laura Chen",
    feedback: "Incredible leadership and delivery &mdash; highly recommend their AI integration services.",
  },
];

export default function AboutUs() {
  const [index, setIndex] = useState(0);
  const testimonialCount = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonialCount]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* === 3D BACKGROUND === */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <Suspense fallback={null} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* === MAIN CONTENT === */}
      <main className="relative z-10">
        {/* === HERO === */}
        <motion.section
          className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Empowering Intelligence with Visiongen
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            At Visiongen, we specialize in delivering cutting-edge AI solutions to automate and transform your business future.
          </p>
        </motion.section>

        {/* === ABOUT CONTENT === */}
        <motion.section
          className="py-16 px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-300 mb-8">
            Visiongen aims to harness the power of artificial intelligence to simplify processes, enhance decision-making,
            and build a smarter world. From intelligent chatbots to AI automation pipelines, we provide full-stack AI development
            tailored to your needs.
          </p>
          <h3 className="text-3xl font-medium mb-4">What We Offer</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <li>🤖 Intelligent Chatbots &amp; Assistants</li>
            <li>📈 AI-Powered Automation</li>
            <li>🧠 Machine Learning Model Training</li>
            <li>🔍 NLP &amp; Language Models (RAG, LLMs)</li>
            <li>🧾 AI Meeting Bots &amp; Summarizers</li>
            <li>🔐 Secure AI Deployments</li>
          </ul>
        </motion.section>

        {/* === CEO SECTION === */}
        <motion.section
          className="py-16 px-6 bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl max-w-4xl mx-auto text-center mt-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Meet Our CEO</h2>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/shawaiz.png"
              width={160}
              height={160}
              className="rounded-full border-4 border-purple-500 shadow-xl"
              alt="Shawaiz Arif - CEO"
            />
            <h3 className="text-xl font-medium text-white">Shawaiz Arif</h3>
            <p className="text-gray-300 max-w-lg">
              As the visionary behind Visiongen, Shawaiz leads the company with a passion for innovation and a deep understanding
              of how AI can transform industries. His leadership continues to inspire groundbreaking progress in AI applications.
            </p>
          </div>
        </motion.section>

        {/* === TESTIMONIAL SLIDER === */}
        <motion.section
          className="py-20 px-6 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
          <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-xl transition-all duration-500">
            <p className="text-xl text-gray-100 italic mb-4">&ldquo;{testimonials[index].feedback}&rdquo;</p>
            <p className="text-sm text-purple-300">— {testimonials[index].name}</p>
          </div>
          <div className="mt-4 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-purple-400" : "bg-gray-400"}`}
              ></button>
            ))}
          </div>
        </motion.section>

        {/* === CONTACT CTA === */}
        <motion.section
          className="py-16 text-center px-6 bg-gradient-to-br from-purple-800 to-pink-700 rounded-t-3xl"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to innovate with AI?</h2>
          <p className="text-white text-opacity-80 mb-6">
            We&apos;re ready to help you build a smarter future. Reach out to our team today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Contact Visiongen
          </a>
        </motion.section>
      </main>
    </div>
  );
}

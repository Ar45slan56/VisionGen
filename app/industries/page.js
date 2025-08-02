'use client';
import { motion } from 'framer-motion';
import GlowingSphere from './GlowingSphere';
import FloatingCube from './FloatingCube';
import Link from 'next/link';
const industries = [
  {
    title: "Healthcare",
    description: "Revolutionizing patient outcomes with AI-assisted diagnostics, EHR automation, and telehealth innovation."
  },
  {
    title: "Fintech",
    description: "Powering secure digital finance through AI-driven fraud detection and seamless transaction processing."
  },
  {
    title: "Manufacturing",
    description: "Optimizing operations using predictive maintenance, robotics, and smart factory ecosystems."
  },
  {
    title: "E-commerce",
    description: "Enhancing digital shopping with AI chatbots, recommendation engines, and real-time inventory intelligence."
  },
  {
    title: "Travel & Logistics",
    description: "Streamlining routes and delivery using real-time tracking, fleet AI, and smart logistics networks."
  },
  {
    title: "Education",
    description: "Transforming learning with immersive AR/VR classrooms and adaptive tutoring platforms powered by AI."
  }
];

export default function Industries() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0026] via-[#120032] to-[#030015] text-white overflow-hidden">
      {/* 3D Background */}
      <GlowingSphere />

      {/* Hero Section */}


      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-36 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Industries <span className="text-cyan-400 drop-shadow-md">We Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            We craft AI-first, scalable digital ecosystems tailored to your industry's needs — from healthcare to education.
          </p>
          <Link href="/contact" passHref>
            <button className="relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold shadow-xl hover:from-cyan-300 hover:to-blue-400 transition duration-300 hover:scale-105">
              <span className="z-10">Get in Touch</span>
              <span className="absolute inset-0 rounded-full bg-white/10 blur-lg opacity-40"></span>
            </button>
          </Link>
        </motion.div>

        {/* Right-side 3D Model */}
        <div className="w-full md:w-[400px] h-[300px] md:h-[400px]">
          <FloatingCube />
        </div>
      </section>


      {/* Industry Cards */}
      <section className="relative z-10 px-6 md:px-24 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl hover:shadow-cyan-400/40 hover:scale-[1.05] transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{industry.title}</h3>
            <p className="text-base text-white/80 leading-relaxed">{industry.description}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-24 py-24 text-center bg-white/10 backdrop-blur-lg mt-16 rounded-t-3xl border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug text-cyan-300 drop-shadow-lg">
            Let’s Build the Future<br className="hidden md:block" /> of Your Industry
          </h2>
          <p className="mb-10 text-white/80 max-w-2xl mx-auto text-lg">
            Collaborate with our team to shape custom AI solutions for your business landscape.
          </p>

          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400
       to-blue-500 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:from-cyan-300 hover:to-blue-400 transition duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-white/10 rounded-full blur-sm opacity-20 pointer-events-none"></span>
            <span className="relative z-10">Book a Consultation</span>
          </Link>

        </motion.div>
      </section>
    </div>
  );
}

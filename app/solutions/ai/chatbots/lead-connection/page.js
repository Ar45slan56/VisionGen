"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Head from "next/head";
import { ChevronDown } from "lucide-react";
import { FaUser, FaEnvelope, FaBuilding, FaCommentDots } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

// Lazy load 3D animated background
const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

const faqs = [
    {
        question: "How does Vision-GEN handle my lead data?",
        answer:
            "We securely collect, store, and use your lead data to help you connect with customers through AI-powered workflows.",
    },
    {
        question: "Can I integrate this with my existing CRM?",
        answer: "Absolutely. Our automation layer connects with CRMs like Salesforce, Hubspot, and more.",
    },
    {
        question: "Is support available for setup and configuration?",
        answer: "Yes. We provide full onboarding assistance and dedicated account managers.",
    },
];

export default function LeadConnectionPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [openIndex, setOpenIndex] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFAQToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! Your message has been received.", {
            style: {
                border: '1px solid #06c167',
                padding: '16px',
                color: '#0e1433',
                fontWeight: '600',
                borderRadius: '12px'
            },
            iconTheme: {
                primary: '#06c167',
                secondary: '#f0fff4'
            },
        });
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#0e1433] via-[#101d3f] to-[#151e4c] text-white overflow-hidden">
            <Head>
                <title>Lead Connection | Vision-GEN</title>
            </Head>

            <Toaster position="top-right" />
            <ParticleBackground />

            {/* Hero Section */}
            <section className="relative z-10 px-4 pt-32 pb-20 max-w-6xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Seamlessly Connect with Leads
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                >
                    Automate, track, and convert leads using smart workflows and real-time analytics powered by Vision-GEN.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="mt-8 px-10 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#06c167] to-[#05a156] shadow-xl hover:brightness-110 transition duration-300"
                >
                    Book a Free Demo
                </motion.button>
            </section>

            {/* Extra Info Section */}
            <section className="relative z-10 py-16 px-6 max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-4"
                >
                    Why Choose Vision-GEN?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-300 max-w-3xl mx-auto"
                >
                    We offer an end-to-end lead intelligence platform that empowers businesses to drive more qualified leads,
                    enhance customer interactions, and automate follow-ups with AI. Vision-GEN integrates deeply with your
                    existing tech stack and scales with your growth.
                </motion.p>
            </section>

            {/* Contact Form Section */}
            {/* Contact Form Section */}
            <section className="relative z-10 py-20 px-4 text-black">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto rounded-3xl p-12 backdrop-blur-md bg-white/20 border border-white/30 shadow-[inset_0_0_1px_rgba(255,255,255,0.6),_0_8px_30px_rgba(0,0,0,0.2)]"
                >
                    <h2 className="text-4xl font-extrabold text-center mb-10 text-white drop-shadow">
                        Connect with Us
                    </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <label className="block text-sm font-semibold mb-1 flex items-center gap-2"><FaUser /> Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                onChange={handleChange}
                                value={formData.name}
                                className="w-full px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 text-white placeholder:text-white/70 focus:ring-2 focus:ring-[#06c167] focus:outline-none"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <label className="block text-sm font-semibold mb-1 flex items-center gap-2"><FaEnvelope /> Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                onChange={handleChange}
                                value={formData.email}
                                className="w-full px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 text-white placeholder:text-white/70 focus:ring-2 focus:ring-[#06c167] focus:outline-none"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="md:col-span-2">
                            <label className="block text-sm font-semibold mb-1 flex items-center gap-2"><FaBuilding /> Company Name</label>
                            <input
                                type="text"
                                name="company"
                                onChange={handleChange}
                                value={formData.company}
                                className="w-full px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 text-white placeholder:text-white/70 focus:ring-2 focus:ring-[#06c167] focus:outline-none"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="md:col-span-2">
                            <label className="block text-sm font-semibold mb-1 flex items-center gap-2"><FaCommentDots /> Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                onChange={handleChange}
                                value={formData.message}
                                className="w-full px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 text-white placeholder:text-white/70 focus:ring-2 focus:ring-[#06c167] focus:outline-none"
                            ></textarea>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#06c167] to-[#05a156] text-white px-8 py-3 rounded-full font-semibold hover:brightness-110 transition duration-300 shadow-lg"
                            >
                                Submit Message
                            </button>
                        </motion.div>
                    </form>
                </motion.div>
            </section>


            {/* FAQ Section */}
            <section className="relative z-10 bg-white text-black py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="border border-gray-200 rounded-lg shadow-sm p-6 bg-gray-50"
                            >
                                <div
                                    onClick={() => handleFAQToggle(index)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </div>
                                {openIndex === index && <p className="mt-4 text-gray-700">{faq.answer}</p>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
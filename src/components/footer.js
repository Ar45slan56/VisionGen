"use client";

import { FaTwitter, FaLinkedin, FaDribbble, FaEnvelope, FaPhone } from "react-icons/fa";
import AnimatedDots from "./AnimatedDots"; // Make sure path is correct

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      <AnimatedDots />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-400 animate-pulse drop-shadow-[0_0_10px_#3b82f6]">
              VisionGEN
            </span>
          </h3>
          <p className="text-sm">
            Building future-forward solutions with creativity, precision, and technology.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Web Development</a></li>
            <li><a href="#" className="hover:text-white transition">AI Integration</a></li>
            <li><a href="#" className="hover:text-white transition">UX/UI Design</a></li>
            <li><a href="#" className="hover:text-white transition">Consulting</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> hello@visiongen.com
            </li>
            
            <li className="mt-4 flex space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="Dribbble" className="hover:text-pink-400 transition transform hover:scale-110">
                <FaDribbble size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 mt-6 py-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-white font-medium drop-shadow-[0_0_8px_#3b82f6] text-blue-400">VisionGEN</span>. All rights reserved.
      </div>
    </footer>
  );
}

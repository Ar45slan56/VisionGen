"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Toast({ message, status = "success", duration = 4000, onClose }) {
  const statusStyles = {
    success: "text-green-400",
    error: "text-red-400",
    info: "text-blue-400",
  };

  React.useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-8 right-8 z-50 bg-white/10 backdrop-blur-lg text-white
                   text-sm sm:text-base px-6 py-4 rounded-lg shadow-xl border border-white/20 
                   flex items-center gap-3"
      >
        <span className={`${statusStyles[status]} text-lg`}>
          {status === "success" && "✅"}
          {status === "error" && "❌"}
          {status === "info" && "ℹ️"}
        </span>
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
}

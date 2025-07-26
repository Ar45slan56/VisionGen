"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, Bot, MessageCircle, Minus, User2 } from "lucide-react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hello! How can I assist you today?",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      from: "user",
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = {
      from: "bot",
      text: data.reply,
      time: new Date().toLocaleTimeString(),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[1001] bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 w-[380px] max-h-[580px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col overflow-hidden z-[1000] shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header with minimize */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold">
              <div className="flex items-center gap-2">
                <Bot size={18} />
                <span>AI Assistant</span>
              </div>
              <button onClick={() => setOpen(false)} className="hover:opacity-75 transition">
                <Minus size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-sm scrollbar-thin scrollbar-thumb-blue-300/50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className={`flex gap-2 items-end ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.from === "bot" && (
                    <div className="flex gap-2 items-end">
                      <div className="bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-white px-4 py-2 rounded-2xl rounded-bl-none shadow-inner max-w-[75%]">
                        <p>{msg.text}</p>
                        <span className="text-[10px] opacity-50 block mt-1 text-right">{msg.time}</span>
                      </div>
                      <div className="bg-blue-500 text-white p-1 rounded-full">
                        <Bot size={16} />
                      </div>
                    </div>
                  )}
                  {msg.from === "user" && (
                    <div className="flex gap-2 items-end flex-row-reverse">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-none shadow-md max-w-[75%]">
                        <p>{msg.text}</p>
                        <span className="text-[10px] opacity-70 block mt-1 text-right">{msg.time}</span>
                      </div>
                      <div className="bg-gray-300 dark:bg-gray-700 p-1 rounded-full">
                        <User2 size={16} className="text-black dark:text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                onClick={handleSend}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                <SendHorizonal size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-20 text-center text-white">
      {/* Animated Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse delay-300" />

      {/* Extra Glow Layer */}
      <div className="absolute inset-0 bg-purple-700/20" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Do you have a Project Idea?
          </span>
          <br />
          Let’s bring it to life.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-purple-200 max-w-xl mx-auto mb-10 text-lg"
        >
          From concept to completion, I’ll help you craft something remarkable
          — beautiful, functional, and unforgettable.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{
            scale: 1.07,
            boxShadow: "0px 8px 25px rgba(236, 72, 153, 0.6)",
          }}
          className="relative inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Let’s Work Together</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
}

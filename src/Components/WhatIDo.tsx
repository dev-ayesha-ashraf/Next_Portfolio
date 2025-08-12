"use client";

import { motion } from "framer-motion";

const services = [
  { title: "User Experience (UX)", desc: "Crafting intuitive experiences that users love." },
  { title: "User Interface (UI)", desc: "Designing beautiful and functional interfaces." },
  { title: "Web Development", desc: "Building responsive, high-performance websites." },
];

export default function WhatIDo() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-300" />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-70" />

      <div className="container mx-auto grid md:grid-cols-2 gap-14 relative z-10 px-4">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            What I Do
          </h2>
          <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
            I help brands and businesses bring their ideas to life through a perfect
            mix of design, usability, and technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.07, boxShadow: "0px 8px 25px rgba(147, 51, 234, 0.5)" }}
            className="relative bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-lg font-semibold transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">💬 Say Hello</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          </motion.button>
        </motion.div>

        {/* Right Column - Service Cards */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(147, 51, 234, 0.15)",
              }}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 transition-all duration-300"
            >
              <h3 className="font-semibold mb-2 text-xl text-purple-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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

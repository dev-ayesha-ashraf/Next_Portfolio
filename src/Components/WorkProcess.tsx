"use client";

import { motion } from "framer-motion";
import { FaSearch, FaChartLine, FaPaintBrush, FaRocket } from "react-icons/fa";

export default function WorkProcess() {
  const steps = [
    { icon: <FaSearch />, title: "Research", text: "Gather insights, study the market, and understand user needs." },
    { icon: <FaChartLine />, title: "Analyze", text: "Break down data to define clear goals and strategies." },
    { icon: <FaPaintBrush />, title: "Design", text: "Create stunning, functional, and user-friendly interfaces." },
    { icon: <FaRocket />, title: "Launch", text: "Bring your vision to life and make it accessible to the world." },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto text-center px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-800"
        >
          Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Work Process</span>
          <span className="block w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed text-lg"
        >
          From understanding your vision to delivering results, here’s how we bring your ideas to life.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, y: -8 }}
              className="relative group p-8 rounded-2xl shadow-lg bg-white/60 backdrop-blur-lg border border-transparent hover:border-purple-300 hover:shadow-purple-200/60 transition"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-3xl shadow-xl"
              >
                {step.icon}
              </motion.div>
              
              <h3 className="font-bold text-xl mb-3 text-purple-700">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  FaGoogle,
  FaDribbble,
  FaLinkedin,
  FaAmazon,
  FaMedium,
  FaSpotify,
} from "react-icons/fa";

const brands = [
  { Icon: FaGoogle, name: "Google", color: "text-red-500" },
  { Icon: FaDribbble, name: "Dribbble", color: "text-pink-500" },
  { Icon: FaLinkedin, name: "LinkedIn", color: "text-blue-600" },
  { Icon: FaAmazon, name: "Amazon", color: "text-yellow-500" },
  { Icon: FaMedium, name: "Medium", color: "text-black" },
  { Icon: FaSpotify, name: "Spotify", color: "text-green-500" },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative py-28 bg-gradient-to-br from-white via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Animated Gradient Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 rounded-full blur-[140px] opacity-40 animate-pulse" />
      </div>

      <div className="container mx-auto text-center relative z-10 px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg"
        >
          Trusted by Global Brands
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-700 mt-6 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed"
        >
          Powering innovation for the world’s most recognized companies —
          brands that inspire billions trust us.
        </motion.p>

        {/* Brand Logos */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
          {brands.map(({ Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-lg shadow-md border border-purple-100 hover:scale-110 hover:shadow-2xl hover:shadow-purple-300/50 transition-all duration-700 flex items-center justify-center"
            >
              {/* Glow ring effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 opacity-0 group-hover:opacity-30 blur-xl transition duration-700" />

              <span className="sr-only">{name}</span>
              <Icon
                aria-hidden
                className={`relative z-10 text-5xl text-gray-400 group-hover:${color} transition duration-700 drop-shadow-md`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

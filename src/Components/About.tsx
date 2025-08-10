"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "../../public/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            <Image
              src={profileImg}
              alt="Profile"
              className="rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              width={340}
              height={440}
            />
            {/* Glow border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-3xl border-[3px] border-purple-400/70 shadow-lg shadow-purple-300/50"
            ></motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10 md:p-12 mt-8 md:mt-0 border border-purple-100"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-700 leading-tight tracking-tight"
          >
            Crafting <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Unforgettable</span> Digital Experiences
          </motion.h2>

          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            I design and develop services for customers specializing in creating
            stylish, modern websites, web services, and online stores. My passion
            is to craft digital user experiences through meaningful interactions
            that leave a lasting impression.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-10 flex-wrap">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-3 rounded-xl shadow-md hover:shadow-purple-400/50 hover:scale-105 transition font-semibold tracking-wide">
              My Projects
            </button>
            <button className="bg-white border border-gray-200 text-gray-800 px-7 py-3 rounded-xl shadow-md hover:border-purple-300 hover:shadow-purple-200 hover:scale-105 transition font-semibold">
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 flex-wrap">
            <SocialIcon icon={<FaLinkedin size={20} />} />
            <SocialIcon icon={<FaGithub size={20} />} />
            <SocialIcon icon={<FaTwitter size={20} />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white shadow-md hover:shadow-purple-300 cursor-pointer transition duration-300"
    >
      {icon}
    </motion.div>
  );
}

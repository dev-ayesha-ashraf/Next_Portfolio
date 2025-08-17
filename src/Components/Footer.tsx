"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 text-gray-300 py-12 border-t border-purple-700/30 overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full -z-10 animate-pulse" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center gap-8 text-center md:text-left md:flex-row md:justify-between">
        
        {/* Left: Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold text-lg shadow-lg shadow-purple-500/40"
        >
          B
        </motion.div>

        {/* Center: Nav Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          {[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Blog", href: "#blog" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative group transition"
              >
                {label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Right: Socials + Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center md:items-end gap-4"
        >
          {/* Social Icons */}
          <div className="flex gap-5 text-xl">
            <FaFacebookF className="cursor-pointer text-gray-400 hover:text-blue-600 transition duration-300" />
            <FaTwitter className="cursor-pointer text-gray-400 hover:text-sky-400 transition duration-300" />
            <FaLinkedinIn className="cursor-pointer text-gray-400 hover:text-blue-700 transition duration-300" />
            <FaInstagram className="cursor-pointer text-gray-400 hover:text-pink-500 transition duration-300" />
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Figma Clone. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portfolio1 from "../../public/portfolio1.jpg";
import portfolio2 from "../../public/portfolio2.jpg";
import portfolio3 from "../../public/portfolio3.jpg";

const projects = [
  { img: portfolio1, title: "Product Admin Dashboard", category: "Web App" },
  { img: portfolio2, title: "E-commerce Storefront", category: "Web App" },
  { img: portfolio3, title: "Mobile App Landing Page", category: "UI Design" },
  { img: portfolio1, title: "Analytics Dashboard", category: "Web App" },
  { img: portfolio2, title: "Portfolio Website", category: "Web Design" },
  { img: portfolio3, title: "SaaS Platform UI", category: "UI/UX" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Floating Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-300" />

      <div className="container mx-auto text-center relative z-10 px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
        >
          Our Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          A curated selection of our finest work — blending creativity, technology, and strategy.
        </motion.p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
            >
              {/* Image with Overlay & Hover Text */}
              <div className="relative h-56 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-pink-500/40 transition-all duration-300 text-sm font-medium">
                    View Project →
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <p className="text-sm font-medium text-purple-600 mb-1">{project.category}</p>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 animate-gradient"
        >
          Load More
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
      `}</style>
    </section>
  );
}

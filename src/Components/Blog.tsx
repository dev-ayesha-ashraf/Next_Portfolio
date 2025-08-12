"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import blog1 from "../../public/blog1.jpg";
import blog2 from "../../public/blog2.jpg";
import blog3 from "../../public/blog3.jpg";

const posts = [
  { img: blog1, title: "Lorem ipsum dolor sit amet", date: "March 1, 2025" },
  { img: blog2, title: "Sed ut perspiciatis unde", date: "Feb 25, 2025" },
  { img: blog3, title: "At vero eos et accusamus", date: "Feb 20, 2025" },
  { img: blog1, title: "Ut enim ad minima veniam", date: "Feb 15, 2025" },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl -z-10 animate-pulse delay-300" />

      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient"
        >
          ✨ Our Latest Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          Dive into captivating stories, expert tips, and inspiring ideas worth
          sharing.
        </motion.p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />
                </motion.div>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {post.date}
                </p>
                <h3 className="font-semibold text-lg group-hover:text-pink-600 transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 inline-block text-sm font-medium text-pink-600 hover:text-pink-800 transition"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
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
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Hello World with Animation 🎉
      </motion.h1>
    </main>
  );
}

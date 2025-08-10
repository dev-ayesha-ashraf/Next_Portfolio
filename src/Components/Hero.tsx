"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "../../public/pakata-goh-RDolnHtjVCY-unsplash.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-16 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Hello, I’m{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Ayesha Ashraf
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-gray-600 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed"
          >
            I’m a Professional{" "}
            <span className="font-semibold text-purple-600">
              UI/UX Designer
            </span>{" "}
            and Developer based in London, England. I create immersive and
            beautiful digital experiences through a blend of code & human-focused
            design.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg"
          >
            Say Hello
          </motion.button>
          <div className="mt-14 flex flex-wrap gap-6 justify-center md:justify-start">
            <Stat number="15 Y." label="Experience" />
            <Stat number="250+" label="Projects Completed" />
            <Stat number="58" label="Happy Clients" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative group"
          >
            <Image
              src={profileImg}
              alt="Profile"
              className="rounded-3xl shadow-2xl border-[6px] border-white transition-all duration-500 group-hover:scale-105"
              width={370}
              height={480}
            />
            <div className="absolute inset-0 rounded-3xl ring-4 ring-purple-400/30 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow: "0 6px 20px rgba(147, 51, 234, 0.15)",
      }}
      className="backdrop-blur-md bg-white/60 px-8 py-5 rounded-2xl shadow-md border border-white/40 text-center min-w-[130px] transition-all cursor-pointer"
    >
      <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
        {number}
      </p>
      <p className="text-gray-700 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

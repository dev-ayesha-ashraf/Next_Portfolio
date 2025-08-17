"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-white via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200 rounded-full blur-[160px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 rounded-full blur-[140px] opacity-40 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 drop-shadow-lg mb-14"
        >
          Get In Touch
        </motion.h2>

        <div className="backdrop-blur-2xl bg-white/70 border border-purple-200/50 rounded-3xl shadow-2xl p-12 grid md:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
              Let’s discuss your project
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              We’d love to hear from you. Whether you’re curious about features,
              a free trial, or press — we’re here to answer any questions.
            </p>

            <div className="space-y-7">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Address",
                  text: "New Mexico 31134",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  text: "my@gmail.com",
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Call",
                  text: "00-214-00000",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 text-2xl shadow-md hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-6 mt-12 text-2xl">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-center justify-center"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-0 blur-md group-hover:opacity-40 transition duration-500" />
                    <Icon className="cursor-pointer relative text-gray-400 group-hover:text-purple-600 transition duration-500" />
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { type: "text", placeholder: "Name*" },
              { type: "email", placeholder: "Email*" },
              { type: "text", placeholder: "Location" },
              { type: "text", placeholder: "Budget*" },
              { type: "text", placeholder: "Subject*", span: true },
            ].map((field, idx) => (
              <input
                key={idx}
                type={field.type}
                placeholder={field.placeholder}
                className={`border-b border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none py-4 bg-transparent placeholder-gray-400 text-lg transition duration-500 ${
                  field.span ? "md:col-span-2" : ""
                }`}
              />
            ))}

            <textarea
              placeholder="Message*"
              rows={5}
              className="border-b border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none py-4 bg-transparent placeholder-gray-400 text-lg md:col-span-2 transition duration-500"
            ></textarea>

            <button
              type="submit"
              className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-4 px-12 rounded-2xl md:col-span-2 w-fit hover:scale-105 transition duration-500"
            >
              <span className="relative z-10">Send Message</span>
              {/* Glow Aura */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 blur-xl opacity-40 animate-pulse" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    quote:
      "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis sit amet.",
    author: "Esther Howard",
    role: "Managing Director, ABC Company",
  },
  {
    quote:
      "Curabitur imperdiet semper eros, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas rutrum elit purus.",
    author: "Leslie Alexander",
    role: "CEO, Designify",
  },
  {
    quote:
      "Morbi ornare elit a libero suscipit porta. Praesent at elit commodo, blandit metus eget, imperdiet nibh.",
    author: "Cody Fisher",
    role: "Founder, DevHub",
  },
];

export default function Testimonial() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!instanceRef.current) return;
    instanceRef.current.on("slideChanged", (s) => {
      setCurrentSlide(s.track.details.rel);
    });
  }, [instanceRef]);

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-gradient-to-b from-purple-100 via-white to-pink-50 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 via-pink-300 to-amber-200 rounded-full blur-[180px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-200 rounded-full blur-[160px] opacity-40 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="container mx-auto text-center max-w-5xl px-6"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg"
        >
          Voices of Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-gray-700 mt-6 text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Real experiences. Real impact. See why our community never stops
          talking about us.
        </motion.p>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider mt-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide flex justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative backdrop-blur-xl bg-white/70 shadow-2xl rounded-3xl p-12 max-w-3xl border border-purple-200/40 hover:shadow-purple-300/40 hover:scale-[1.02] transition-transform duration-500"
              >
                {/* Decorative Quote Icon */}
                <span className="absolute -top-10 left-10 text-8xl text-purple-200/70 font-serif select-none">
                  “
                </span>

                <p className="text-2xl text-gray-800 italic leading-relaxed relative z-10">
                  {t.quote}
                </p>

                {/* Author Info */}
                <div className="mt-10 relative z-10">
                  <h4 className="font-extrabold text-gray-900 text-xl">
                    {t.author}
                  </h4>
                  <p className="text-md text-purple-600">{t.role}</p>
                </div>

                {/* Glow effect bottom border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 rounded-b-3xl animate-pulse" />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                currentSlide === i
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 scale-125 shadow-lg shadow-purple-400/50"
                  : "bg-gray-300 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

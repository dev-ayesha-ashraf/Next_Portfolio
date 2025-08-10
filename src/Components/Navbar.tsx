"use client";

import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", to: "hero" },
        { name: "About", to: "about" },
        { name: "Work Process", to: "work" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-lg shadow-lg z-50 border-b border-white/30"
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-wide cursor-pointer">
                    MyPortfolio
                </div>
                <ul className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-pointer text-gray-700 hover:text-purple-700 font-medium relative group"
                            >
                                {item.name}
                                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="hidden md:inline-block relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-purple-300/50 transition font-medium">
                    <span className="relative z-10">Contact</span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    ></motion.div>
                </button>
                <div
                    className="md:hidden text-purple-700 text-2xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/70 backdrop-blur-md shadow-md px-6 py-4 border-t border-white/30"
                    >
                        <ul className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="block text-gray-700 hover:text-purple-700 transition font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-purple-300/50 transition font-medium">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

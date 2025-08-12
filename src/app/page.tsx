"use client";

import About from "@/Components/About";
import Blog from "@/Components/Blog";
import CallToAction from "@/Components/CallToAction";
import Hero from "@/Components/Hero";
import Portfolio from "@/Components/Portfolio";
import WhatIDo from "@/Components/WhatIDo";
import WorkProcess from "@/Components/WorkProcess";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <WorkProcess />
    <Portfolio />
    <CallToAction />
    <Blog />
    <WhatIDo />
    </>
  );
}

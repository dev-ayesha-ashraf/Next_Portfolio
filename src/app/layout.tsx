"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "@/lib/lenis";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}

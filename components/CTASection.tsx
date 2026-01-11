"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="w-full pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent">
        <div
          className="absolute inset-0 opacity-100 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(255, 105, 180, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 0, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(135, 206, 250, 0.4) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-pp-cirka mb-6 sm:mb-8 text-black font-normal">
          Complex is our comfort zone
        </h2>
        <Link
          href="https://www.lorikeetcx.ai/get-a-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white font-pp-cirka py-4 px-8 sm:py-5 sm:px-12 rounded-lg sm:rounded-xl text-lg sm:text-xl transition-colors hover:bg-gray-900"
        >
          Get a demo
        </Link>
      </div>
    </div>
  );
}

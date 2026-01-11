"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTAFooter() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Enhanced gradient background with multiple layers for depth */}
      <div className="absolute left-[10%] top-[20%] right-[10%] bottom-[10%] bg-gradient-to-b from-white via-white to-transparent">
        {/* Base layer - soft warm glow */}
        <div
          className="absolute inset-0 opacity-80 blur-3xl animate-pulse-slow"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 20% 60%, rgba(255, 105, 180, 0.7) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 75% 25%, rgba(255, 215, 0, 0.6) 0%, transparent 55%)",
          }}
        />
        {/* Middle layer - cool tones */}
        <div
          className="absolute inset-0 opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 85% 75%, rgba(138, 43, 226, 0.5) 0%, transparent 45%), radial-gradient(circle at 40% 85%, rgba(0, 191, 255, 0.5) 0%, transparent 50%), radial-gradient(circle at 15% 30%, rgba(255, 20, 147, 0.4) 0%, transparent 40%)",
          }}
        />
        {/* Top layer - vibrant accents */}
        <div
          className="absolute inset-0 opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse 50% 30% at 60% 45%, rgba(255, 182, 193, 0.6) 0%, transparent 50%), radial-gradient(ellipse 40% 35% at 25% 75%, rgba(147, 112, 219, 0.5) 0%, transparent 45%)",
          }}
        />
        {/* Subtle animated layer for movement */}
        <div
          className="absolute inset-0 opacity-40 blur-3xl animate-gradient-shift"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(255, 105, 180, 0.3) 0deg, rgba(255, 215, 0, 0.3) 90deg, rgba(138, 43, 226, 0.3) 180deg, rgba(0, 191, 255, 0.3) 270deg, rgba(255, 105, 180, 0.3) 360deg)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-pp-cirka mb-6 sm:mb-8 text-black font-normal">
              Complex is our comfort zone
            </h2>
            <Link
              href="https://www.lorikeetcx.ai/get-a-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900 sm:px-6 sm:py-2.5"
            >
              Get a demo
            </Link>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-6 sm:pb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 sm:gap-12">
            {/* Left: Security badges + Logo + Copyright + Links */}
            <div className="space-y-6 sm:space-y-8">
              {/* Security badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href="https://www.vanta.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 relative block"
                  >
                    <Image
                      src="/images/vanta-iso-27001-badge.png"
                      alt="ISO 27001 Certified by Vanta"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                  <span className="text-[9px] sm:text-[10px] text-black">
                    ISO 27001
                  </span>
                  <span className="text-[8px] text-gray-500">
                    Certified by Vanta
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href="https://www.vanta.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 relative block"
                  >
                    <Image
                      src="/images/vanta-soc-2-badge.svg"
                      alt="SOC 2 Type II Certified by Vanta"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                  <span className="text-[9px] sm:text-[10px] text-black">
                    SOC 2 Type II
                  </span>
                  <span className="text-[8px] text-gray-500">
                    Certified by Vanta
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href="https://www.vanta.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 relative block"
                  >
                    <Image
                      src="/images/vanta-hipaa-badge.png"
                      alt="HIPAA Certified by Vanta"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                  <span className="text-[9px] sm:text-[10px] text-black">
                    HIPAA
                  </span>
                  <span className="text-[8px] text-gray-500">
                    Certified by Vanta
                  </span>
                </div>
              </div>

              {/* Logo */}
              <Link
                href="https://www.lorikeetcx.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Image
                  src="/images/lorikeet-logo-light.png"
                  alt="Lorikeet"
                  width={140}
                  height={40}
                  className="h-8 w-auto sm:h-10"
                />
              </Link>

              {/* Copyright */}
              <p className="text-sm text-black">
                <span>© {new Date().getFullYear()} </span>
                <span className="font-pp-cirka">Lorikeet</span>
                <span>. All rights reserved.</span>
              </p>

              {/* Footer links */}
              <div className="flex flex-wrap gap-4 text-sm text-black">
                <Link
                  href="https://www.lorikeetcx.ai/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="https://www.lorikeetcx.ai/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Terms of Service
                </Link>
                <Link href="#" className="hover:underline">
                  Cookie Settings
                </Link>
              </div>
            </div>

            {/* Right: Navigation columns */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-black mb-3">Product</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>
                    <Link
                      href="https://www.lorikeetcx.ai/pricing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.cxroi.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      CX ROI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.lorikeetcx.ai/customers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Customer Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Nominate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://app.lorikeetcx.ai/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-black mb-3">Company</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>
                    <Link
                      href="https://www.lorikeetcx.ai/company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.lorikeetcx.ai/careers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.lorikeetcx.ai/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.lorikeetcx.ai/partners"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/lorikeet-cx/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.lorikeetcx.ai/trust-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Trust Center
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ABN at bottom right */}
          <div className="mt-8 sm:mt-12 pt-4 border-t border-black/10 flex justify-end">
            <span className="text-xs text-black">ABN: 53 669 390 149</span>
          </div>
        </div>
      </div>
    </div>
  );
}

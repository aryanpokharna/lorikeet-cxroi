"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Same gradient background as CTA section for seamless flow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white">
        <div
          className="absolute inset-0 opacity-100 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(255, 105, 180, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 0, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(135, 206, 250, 0.4) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 sm:gap-12">
          {/* Left: Security badges + Logo + Copyright + Links */}
          <div className="space-y-6 sm:space-y-8">
            {/* Security badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-[8px] sm:text-[10px] font-medium text-center px-1">
                    ISO
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-black">
                  ISO 27001
                </span>
                <span className="text-[8px] text-gray-500">
                  Certified by Vanta
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-[8px] sm:text-[10px] font-medium text-center px-1">
                    SOC
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-black">
                  SOC 2 Type II
                </span>
                <span className="text-[8px] text-gray-500">
                  Certified by Vanta
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-[8px] sm:text-[10px] font-medium text-center px-1">
                    HIPAA
                  </span>
                </div>
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
    </footer>
  );
}

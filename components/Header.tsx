"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-4 z-30 mx-auto w-full max-w-[90%] sm:max-w-4xl lg:max-w-5xl px-4 sm:px-6">
      <div className="flex items-center justify-between rounded-full bg-white px-3 py-2 shadow-lg sm:px-5 sm:py-3">
        {/* Logo */}
        <Link
          href="https://www.lorikeetcx.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <Image
            src="/images/lorikeet-logo-light.png"
            alt="Lorikeet"
            width={112}
            height={32}
            className="h-6 w-auto sm:h-7"
            priority
          />
        </Link>

        {/* Desktop nav + CTA Button grouped together */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-xs font-medium text-gray-700">
            <Link
              href="https://www.lorikeetcx.ai/product"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Product
            </Link>
            <Link
              href="https://www.lorikeetcx.ai/customers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Customers
            </Link>
            <Link
              href="https://www.lorikeetcx.ai/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="https://www.lorikeetcx.ai/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="https://www.lorikeetcx.ai/company"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Company
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="https://www.lorikeetcx.ai/get-a-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-gray-800 sm:px-5 sm:py-2"
          >
            Get a demo
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function MobileMenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-[100]">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-[-1rem] left-0 z-50 text-black transition hover:text-red-700"
      >
        {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>

      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
        />
      )}

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute top-12 left-0 z-50 w-48 rounded-xl bg-white p-4 shadow-xl">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-black">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className="hover:text-red-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={toggleMenu}
                className="hover:text-red-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={toggleMenu}
                className="hover:text-red-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                onClick={toggleMenu}
                className="hover:text-red-700"
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={toggleMenu}
                className="hover:text-red-700"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

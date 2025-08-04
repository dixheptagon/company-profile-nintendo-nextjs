// components/LoginDrawer.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";

export default function LoginSignUpDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(true)}
        className="login-bar flex cursor-pointer items-center gap-3 rounded-2xl border border-red-700 px-3 py-1 font-semibold text-red-500 hover:text-red-700"
      >
        <FaUserAlt />
        <span className="text-sm">Log In/Sign Up</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background blur */}
            <motion.div
              className="bg-opacity-50 fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[360px] overflow-y-auto bg-white p-6 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800">
                  Log in / Sign up
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-gray-500 hover:text-red-500"
                >
                  <ImCross />
                </button>
              </div>

              <div className="mb-6 rounded-xl bg-gray-100 p-4">
                <Image
                  src="/navbar/drawer-image.avif" // contoh image lokal (lo bisa pakai image dari public folder)
                  alt="Login icons"
                  width={300}
                  height={80}
                  className="mx-auto mb-3"
                />
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  👋 Welcome to Nintendo!
                </p>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                  <li>🎮 Hi, Player One!</li>
                  <li>😊 Glad you`re here — let`s play!</li>
                  <li>🌟 Your adventure starts now!</li>
                </ul>
              </div>

              <button className="mb-3 w-full rounded-md bg-red-600 py-2 font-bold text-white hover:bg-red-700">
                Log In
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full rounded-md border-2 border-red-600 py-2 font-bold text-red-600 hover:bg-red-100"
              >
                <Link href="/register">Sign Up</Link>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

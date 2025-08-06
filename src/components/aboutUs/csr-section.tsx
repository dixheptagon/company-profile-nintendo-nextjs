"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const slides = [
  {
    image: "/csr-section/1.jpg",
    caption:
      "1. Working to create products that can be enjoyed with peace of mind.",
  },
  {
    image: "/csr-section/2.jpg",
    caption: "2. Promoting CSR activities throughout our entire supply chain.",
  },
  {
    image: "/csr-section/3.avif",
    caption:
      "3. Working to build an environment where each and every employee can realize their potential.",
  },
  {
    image: "/csr-section/4.webp",
    caption: "4. Striving to reduce environment impact in a variety of ways.",
  },
];

export default function CSRSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="bg-white px-4 py-16 md:px-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left Column */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-red-700 md:text-4xl">
            CSR Information
          </h2>
          <q className="mb-6 block text-4xl text-black">
            Putting Smiles on the Faces of Everyone{" "}
            <span className="rounded-md bg-red-200 p-0.5">Nintendo</span>{" "}
            Touches
          </q>
          <button className="mt-4 rounded-xl bg-red-600 px-6 py-3 text-white shadow-md transition hover:bg-red-700">
            <Link href="https://www.nintendo.co.jp/csr/en-us/index.html">
              Learn More About Our Impact
            </Link>
          </button>
        </div>

        {/* Right Column */}
        <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg md:h-80">
          <Image
            src={slides[current].image}
            alt={`CSR Slide ${current + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            priority
          />
          <div className="absolute inset-0 flex items-end justify-center rounded-2xl bg-black/30 px-4 text-center">
            <p className="flex rounded-xl bg-red-500/50 p-3 text-lg font-semibold text-white md:text-2xl">
              {slides[current].caption}
            </p>
          </div>

          {/* Next & Prev buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black hover:bg-white"
          >
            <FaRegArrowAltCircleLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black hover:bg-white"
          >
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

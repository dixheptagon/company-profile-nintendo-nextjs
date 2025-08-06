"use client";

import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

const images = [
  {
    src: "/hero-section/mario.png",
    title: "Super Mario Bros.",
    description: "Join Mario on his newest adventure!",
  },
  {
    src: "/hero-section/zelda.jpeg",
    title: "Zelda: Tears of the Kingdom",
    description: "Uncover the mystery of Hyrule.",
  },
  {
    src: "/hero-section/kirby.jpeg",
    title: "Kirby and the Forgotten Land",
    description: "Bounce into action!",
  },
  {
    src: "/hero-section/pokemon.jpg",
    title: "Pokemon",
    description: "Catch 'em all!",
  },
  {
    src: "/hero-section/minecraft.jpg",
    title: "Minecraft",
    description: "Build and explore your world!",
  },
  {
    src: "/hero-section/animalCrossing.jpg",
    title: "Animal Crossing",
    description: "Get to know your neighbors!",
  },
];

export default function NintendoHero() {
  const [index, setIndex] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const { src, title, description } = images[index];

  return (
    <section className="relative h-[42.5rem] w-full overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-all duration-500 ease-in-out"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-black/30 px-10 pb-15 text-white">
        <motion.h2
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-3xl font-bold sm:text-5xl"
        >
          {title}
        </motion.h2>
        <motion.p
          key={description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg sm:text-xl"
        >
          {description}
        </motion.p>
        <button className="mt-5 rounded bg-white px-4 py-2 text-black transition hover:bg-gray-200">
          <Link href="https://www.nintendo.com" target="_blank">
            Learn More
          </Link>
        </button>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2 px-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-white/50 p-2 text-black hover:bg-white"
        >
          <FaRegArrowAltCircleLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 px-4">
        <button
          onClick={handleNext}
          className="rounded-full bg-white/50 p-2 text-black hover:bg-white"
        >
          <FaRegArrowAltCircleRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

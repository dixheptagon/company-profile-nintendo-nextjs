"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const historyData = [
  {
    year: "1889",
    title: "The Beginning",
    description:
      "Fusajiro Yamauchi began a small business manufacturing Hanafuda playing cards in Kyoto, Japan.",
    image: "/company-history/1889.avif",
  },
  {
    year: "1980",
    title: "Game & Watch™",
    description:
      "Announced Nintendo of America Inc. Started selling the Game & Watch™ product line.",
    image: "/company-history/1980.avif",
  },
  {
    year: "1981",
    title: "Donkey Kong™",
    description:
      "Launched Donkey Kong™, the hottest coin-operated machine in the business.",
    image: "/company-history/1981.avif",
  },
  {
    year: "1985",
    title: "NES™ Era",
    description:
      "The Nintendo Entertainment System™ (NES™) launched in America and became a smash hit.",
    image: "/company-history/1985.avif",
  },
  {
    year: "1985 Quarter 2",
    title: "Mario Bros™",
    description:
      "Mario™ was first introduced in the Super Mario Bros.™ game.",
    image: "/company-history/1985-2.avif",
  },
  {
    year: "1986",
    title: "the Legend of Zelda™",
    description:
      "The character Link™ made his first appearance in the Legend of Zelda™ game for NES.",
    image: "/company-history/1986.avif",
  },
  {
    year: "1989",
    title: "Game Boy™",
    description:
      "Introduced Game Boy™, the first portable handheld game system. Originally bundled with the Tetris™ game, it was an instant phenomenon.",
    image: "/company-history/1989.avif",
  },
  {
    year: "1991",
    title: "Super NES™",
    description:
      "The 16-bit Super Nintendo Entertainment System™ (Super NES™) was released in the U.S.",
    image: "/company-history/1991.avif",
  },
  {
    year: "1996",
    title: "Nintendo 64™",
    description:
      "The Nintendo 64™ system launched in the U.S. on Sept. 29, along with the critically acclaimed Super Mario 64™ game.",
    image: "/company-history/1996.avif",
  },
  {
    year: "1998",
    title: "Game Boy Color™",
    description:
      "Nintendo introduced Game Boy Color™. Pokémon™, a breakthrough game concept for Game Boy, was introduced to the world and generated a nationwide craze to “Catch `em All!.",
    image: "/company-history/1998.avif",
  },
  {
    year: "2001",
    title: "Nintendo GameCube™",
    description:
      "Launched the Game Boy™ Advance and the Nintendo GameCube™ systems. The Nintendo GameCube was the first Nintendo system to use optical discs instead of cartridges for its games.",
    image: "/company-history/2001.avif",
  },
  {
    year: "2004",
    title: "Nintendo DS™",
    description:
      "Launched the Nintendo DS™, an innovative, dual-screen handheld gaming system.",
    image: "/company-history/2004.avif",
  },
  {
    year: "2006",
    title: "Wii™",
    description:
      "Nintendo introduced the Wii™ system and with it several advanced features. Wireless motion-sensitive controllers, built-in Wi-Fi capability, and a host of other features made Wii the best-selling later-generation console system in the world.",
    image: "/company-history/2006.avif",
  },
  {
    year: "2008",
    title: "Wii™",
    description:
      "Wii became the first system purchased by more than 10 million Americans in a single year.",
    image: "/company-history/2008.avif",
  },
  {
    year: "2011",
    title: "Nintendo 3DS™",
    description:
      "The Nintendo 3DS™ system launched, letting users view and play 3D content without special 3D glasses.",
    image: "/company-history/2011.avif",
  },
  {
    year: "2012",
    title: "Wii U™",
    description:
      "The Wii U™ system launched with the innovative Wii U GamePad controller that offered users new ways to play together, including off-TV. This system also introduced support for amiibo™ accessories.",
    image: "/company-history/2012.avif",
  },
  {
    year: "2015",
    title: "Splatoon™",
    description:
      "The Splatoon™ game launched, introducing the squid-kids known as Inklings.",
    image: "/company-history/2015.avif",
  },
  {
    year: "2017",
    title: "Nintendo Switch™",
    description:
      "The Nintendo Switch™ system launched, along with hits including Super Mario Odyssey™ and The Legend of Zelda™: Breath of the Wild.",
    image: "/company-history/2017.avif",
  },
  {
    year: "2019",
    title: " Nintendo Switch Lite",
    description:
      "The Nintendo Switch Lite system launched. Designed specifically for portable play, the compact system plays the library of Nintendo Switch games that work in handheld mode.",
    image: "/company-history/2019.avif",
  },
];

export default function CompanyHistorySlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % historyData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? historyData.length - 1 : prev - 1));
  };

  const currentItem = historyData[current];

  return (
    <section className="relative mx-auto max-w-3xl px-4 py-20 text-black">
      <h2 className="mb-4 text-center text-4xl font-bold text-red-700">
        Our History
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-black">
        We`ve been dedicated to our mission for a long time — since 1889, in
        fact.
      </p>

      <div className="relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img
              src={currentItem.image}
              alt={currentItem.year}
              className="mx-auto mb-6 max-h-[300px] max-w-[300px] rounded-lg object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold text-red-600">
              {currentItem.year}
            </h3>
            <h4 className="mb-2 text-lg font-semibold">{currentItem.title}</h4>
            <p className="text-sm text-gray-700">{currentItem.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-gray-200 p-2 shadow hover:bg-gray-400"
        >
          <FaRegArrowAltCircleLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-gray-200 p-2 shadow hover:bg-gray-400"
        >
          <FaRegArrowAltCircleRight />
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Slide {current + 1} of {historyData.length}
      </div>
    </section>
  );
}

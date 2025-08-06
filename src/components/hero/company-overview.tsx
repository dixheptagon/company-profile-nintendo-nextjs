"use client";

import Image from "next/image";
import { CgGames } from "react-icons/cg";
import { FaSmileBeam } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const cards = [
  {
    icon: <CgGames className="text-4xl text-red-600" />,
    title: "Unmatched Iconic Games",
    description:
      "Nintendo is the home of legendary franchises like Super Mario, Zelda, and Pokémon, offering exclusive games that have shaped the history of gaming.",
    image: "/company-overview/unmatched-iconic-games.png",
    overlay: "Unmatched Iconic Games",
  },
  {
    icon: <FaSmileBeam className="text-4xl text-yellow-500" />,
    title: "Perfect for All Ages",
    description:
      "With its family-friendly approach and easy-to-learn controls, Nintendo creates gaming experiences that everyone—from kids to adults—can enjoy together..",
    image: "/company-overview/perfect-for-all-ages.jpg",
    overlay: "Perfect for All Ages",
  },
  {
    icon: <IoCodeSlash className="text-4xl text-blue-500" />,
    title: "Innovative and Unique Gameplay",
    description:
      "Nintendo consistently breaks boundaries with creative hardware and fresh ways to play, from motion controls to hybrid consoles like the Nintendo Switch.",
    image: "/company-overview/innovative-and-unique-gameplay.webp",
    overlay: "Innovative and Unique Gameplay",
  },
];

export default function CompanyOverview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center text-red-700">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Why Must{" "}
          <span className="relative inline-block">
            <span className="relative z-10 transition-all duration-300 hover:text-2xl hover:text-amber-300">
              Nintendo?
            </span>
          </span>
        </h2>
        <p className="mb-12 text-gray-600">
          Nintendo isn`t just a game console—it`s a unique gaming experience
          that blends innovation, nostalgia, and fun for everyone.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-700/50"
            >
              <div className="p-6 text-left">
                <div>{card.icon}</div>
                <h3 className="mt-4 text-lg font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              </div>
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  src={card.image}
                  alt={card.overlay}
                  className="h-46 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-end p-2">
                  <p className="rounded-2xl bg-red-500/75 p-1 text-xl font-bold text-white">
                    {card.overlay}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

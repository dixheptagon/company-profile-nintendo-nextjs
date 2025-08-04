// components/TeamCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/legacy/image";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export default function TeamCard({ name, position, image }: TeamMember) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl bg-gray-200 p-4 text-center shadow-md transition-all"
    >
      <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border border-gray-300">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{position}</p>
    </motion.div>
  );
}

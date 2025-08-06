import React from "react";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  username: string;
  message: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  username,
  message,
  avatarUrl,
}) => {
  return (
    <section className="h-80">
      <div className="relative flex min-h-56 w-72 flex-col rounded-xl bg-gray-50 p-4 text-black shadow-xl transition hover:scale-[1.05]">
        <button className="absolute top-3 right-3 text-white/50 hover:text-white">
          <FaXmark />
        </button>
        <div className="mb-3 flex items-center gap-3">
          <Image
            width={40}
            height={40}
            src={avatarUrl}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-black/60">@{username}</p>
          </div>
        </div>
        <p className="mb-6 line-clamp-5 text-sm">{message}</p>
        <button className="mt-auto text-xs text-[#1da1f2] hover:underline">
          <Link href="https://www.nintendolife.com/reviews" target="_blank">
            Read More on Nintendo Revies
          </Link>
        </button>
      </div>
    </section>
  );
};

export default TestimonialCard;

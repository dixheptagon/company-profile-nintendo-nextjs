import { SiNintendo } from "react-icons/si";
import Image from "next/legacy/image";
import Link from "next/link";

export default function NintendoPromoSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-red-700 px-4 py-8">
      {/* Header */}
      <div className="mt-3 mb-10 flex flex-col items-center text-white">
        <SiNintendo className="text-7xl" />
        <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
          My Nintendo Store
        </h2>
      </div>

      {/* Promo Card */}
      <div className="w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-lg">
        {/* Image */}
        <div className="relative h-60 w-full">
          <Image
            src="/products/products-image.avif"
            alt="Play Together Sale"
            layout="fill"
            priority
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h3 className="text-2xl font-black text-red-700 md:text-3xl">
            EXPLORE OUR PRODUCTS
          </h3>
          <p className="mt-2 text-black">
            Games, consoles, and more — all in one place
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-700">
            Ready to power up your play?
          </p>

          {/* Bottom Bar */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-600 md:text-left">
              Discover your next favorite Nintendo produc
            </p>
            <Link
              href="https://www.nintendo.com/us/store/"
              target="_blank"
              className="rounded bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

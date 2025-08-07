import Link from "next/link";
import { SiNintendo } from "react-icons/si";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        {/* Logo & Copyright + Social */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="scale-100 text-[6rem] transition hover:scale-110"
          >
            <SiNintendo />
          </Link>
          <div className="mt-3 flex gap-4 text-[2rem] text-white">
            <Link
              href="https://www.instagram.com/nintendoamerica/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://twitter.com/NintendoAmerica"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/NintendoAmerica/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/nintendo"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
          <p className="mt-2 text-sm text-white/80">
            © 2025 Nintendo Inc. All rights reserved
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-center gap-2 font-semibold md:flex-row md:gap-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/teams" className="hover:text-gray-300">
            Teams
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}

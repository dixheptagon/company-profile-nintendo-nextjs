import Link from "next/link";
import React from "react";
import { SiNintendo } from "react-icons/si";
import LoginSignUpDrawer from "./login-signup-drawer";
import MobileMenuDropdown from "./mobile-menu-dropdown";

export default function Navbar() {
  return (
    <header className="navbar-container fixed top-0 z-999 flex h-15 w-screen items-center justify-between bg-white px-4 md:px-0">
      {/* Mobile Layout */}
      <div className="flex w-full items-center justify-between md:hidden">
        {/* Navbar Menu (kiri) */}
        <nav className="flex items-center">
          <MobileMenuDropdown />
        </nav>

        {/* Logo (tengah) */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="text-[6rem] text-red-700 hover:text-red-800"
          >
            <SiNintendo />
          </Link>
        </div>

        {/* Login/Signup (kanan) */}
        <div className="flex items-center">
          <LoginSignUpDrawer />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden w-full justify-between md:flex">
        {/* Logo */}
        <nav className="logo-space flex h-15 w-1/12 cursor-pointer items-center bg-red-700 hover:bg-red-800 md:w-1/10">
          <Link href={"/"} className="mx-auto text-[4rem] lg:text-[6rem]">
            <SiNintendo />
          </Link>
        </nav>

        {/* Main Nav */}
        <nav className="features-space flex cursor-pointer items-center px-5">
          <div className="nav-space flex h-[inherit] items-center gap-10 font-semibold text-black">
            <Link href={"/"} className="hover:text-red-700">
              Home
            </Link>
            <Link href={"/about-us"} className="hover:text-red-700">
              About Us
            </Link>
            <Link href={"/products"} className="hover:text-red-700">
              Products
            </Link>
            <Link href={"/teams"} className="hover:text-red-700">
              Teams
            </Link>
            <Link href={"/blog"} className="hover:text-red-700">
              Blog
            </Link>
          </div>
        </nav>

        {/* Login */}
        <nav className="login-space flex h-[inherit] cursor-pointer items-center pr-12">
          <LoginSignUpDrawer />
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import React from "react";
import { SiNintendo } from "react-icons/si";
import LoginSignUpDrawer from "./login-signup-drawer";

export default function Navbar() {
  return (
    <header className="navbar-container fixed top-0 z-999 flex h-15 w-screen justify-between bg-white">
      <nav className="logo-space flex h-[inherit] w-1/12 cursor-pointer items-center bg-red-700 hover:bg-red-800">
        <Link href={"/"} className="mx-auto text-[6rem]">
          <SiNintendo />
        </Link>
      </nav>

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

      <nav className="login-space flex h-[inherit] cursor-pointer items-center pr-12">
        <LoginSignUpDrawer />
      </nav>
    </header>
  );
}

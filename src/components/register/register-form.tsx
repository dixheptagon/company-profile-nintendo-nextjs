"use client";

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const toggleShow = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100/50 p-4">
      <div className="relative w-full max-w-md rounded-md bg-white px-6 py-8 shadow-md">
        {/* Close button */}
        <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-600">
          <Link href={"/"}>
            <ImCross />
          </Link>
        </button>

        {/* LEGO logo */}
        <div className="mb-2 flex justify-center">
          <SiNintendo className="text-8xl text-red-700" />
        </div>

        {/* Title */}
        <h2 className="mb-2 text-center text-xl font-bold text-black">
          Create your NINTENDO<sup>®</sup> account
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Join the Nintendo universe — sign up and start your adventure!
        </p>

        {/* Username Input */}
        <div className="relative mb-4 text-black">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="username"
              className="w-full rounded-md border py-2 pr-10 pl-4 placeholder-gray-400"
              placeholder="Write your username"
            />
            <FaUser className="absolute top-3 right-3 text-gray-400" />
          </div>
        </div>

        {/* Email Input */}
        <div className="relative mb-4 text-black">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              id="email"
              className="w-full rounded-md border py-2 pr-10 pl-4 placeholder-gray-400"
              placeholder="Write your email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="relative mb-4 text-black">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full rounded-md border py-2 pr-10 pl-4 placeholder-gray-400"
              placeholder="Write your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={toggleShow}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button className="w-full rounded-full bg-blue-700 py-2 font-semibold text-white transition hover:bg-blue-800">
          Register
        </button>
      </div>
    </div>
  );
}

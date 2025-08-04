"use client";

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import { validationRegisterSchema } from "@/features/register/schemas/validationRegisterSchema";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle show password
  const toggleShow = () => setShowPassword((prev) => !prev);

  // Handle form submission
  const handleRegister = async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post("/api/authentication/register", {
        username,
        email,
        password,
      });
      console.log(response.data);
      toast.success(response?.data?.message);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err?.response?.data?.message);
    }
  };

  // Form Validation
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationRegisterSchema,
    onSubmit: ({ username, email, password }) => {
      handleRegister({
        username: username,
        email: email,
        password: password,
      });
    },
  });

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

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Username Input */}
          <div className="relative mb-4 text-black">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="w-full rounded-md border py-2 pr-10 pl-4 placeholder-gray-400"
                placeholder="Write your username"
              />
              <FaUser className="absolute top-3 right-3 text-gray-400" />
            </div>
            {formik.errors.username && formik.touched.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}
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
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full rounded-md border py-2 pr-10 pl-4 placeholder-gray-400"
                placeholder="Write your email "
              />
            </div>
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
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
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full rounded-md border py-2 pr-10 pl-4 placeholder-gray-400"
                placeholder="Write your password"
              />
              <button
                type="button"
                onClick={toggleShow}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-blue-700 py-2 font-semibold text-white transition hover:bg-blue-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

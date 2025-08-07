"use client";

import { useEffect } from "react";
import { SiNintendo } from "react-icons/si";
import { FaRegSadTear } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center bg-white px-4 text-center">
      {/* Nintendo Logo */}
      <div className="mb-4 text-6xl text-red-700">
        <SiNintendo />
      </div>

      {/* Error Icon */}
      <div className="text-5xl text-red-700">
        <FaRegSadTear />
      </div>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-black text-red-700">
        Something went wrong!
      </h1>

      {/* Error message */}
      <p className="mt-2 max-w-md text-base text-gray-700">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>

      {/* Try Again Button */}
      <button
        onClick={() => reset()}
        className="mt-6 rounded-full bg-red-700 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-800"
      >
        Try Again
      </button>
    </div>
  );
}

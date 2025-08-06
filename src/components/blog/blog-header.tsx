"use client";

import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";
import useAuthStore from "@/store/useAuthStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function BlogHeader() {
  const { username, role } = useAuthStore();
  const router = useRouter();

  // Conditional user is admin or not
  const onHandleRole = async () => {
    if (role === "admin") {
      toast.success(`Welcome admin ${username}, create your blog now!`);
      router.push("/blog/create-blog");
    } else if (role === "user") {
      toast.error(`${username} are not admin!`);
    } else {
      toast.error("You are not logged in, Please login first!");
    }
  };

  return (
    <header className="my-10 px-4 text-center">
      <h1 className="mb-2 text-3xl font-bold text-red-700 md:text-4xl">
        Nintendo Dev Blog
      </h1>
      <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
        Explore updates, insights, and behind-the-scenes stories from the world
        of Nintendo development.
      </p>

      <div className="my-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search for a blogs"
          className="w-full rounded-lg border border-gray-500 px-4 py-2 text-black md:w-1/3"
        />

        <button
          onClick={onHandleRole}
          className="flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-white transition hover:bg-red-800"
        >
          <IoIosAddCircle className="text-2xl" />
          Create Blog
        </button>
      </div>
    </header>
  );
}

import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";
import useAuthStore from "@/store/useAuthStore";

export default function BlogHeader() {
  const { role } = useAuthStore();

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
        {role === "admin" ? (
          <button className="rounded-lg bg-red-700 px-4 py-2 text-white transition hover:bg-red-800">
            <Link href="/blog/create-blog" className="flex items-center gap-2">
              <IoIosAddCircle className="text-2xl" />
              Create Blog
            </Link>
          </button>
        ) : null}
      </div>
    </header>
  );
}

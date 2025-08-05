"use client";

import { useEffect, useState } from "react";
import BlogHeader from "./blog-header";
import Image from "next/legacy/image";
import { IBlogProps } from "@/features/blog/type";
import axios from "axios";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<IBlogProps[]>([]);

  const GetDataBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");

      console.log(response);
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetDataBlogs();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Blog Header */}
      <BlogHeader />

      {/* List of Blogs */}
      <div className="grid grid-cols-1 gap-6 text-black md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-xl hover:shadow-red-500/50"
          >
            <div className="relative h-52 w-full">
              <Image
                src={blog.blog_image}
                alt={blog.blog_title}
                layout="fill"
                sizes="100%"
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-gray-500">
                {blog.blog_author} /{" "}
                {new Date(blog.blog_created_date).toLocaleString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{blog.blog_title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

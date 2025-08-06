"use client";

import { validationCreateBlogSchema } from "@/features/blog/create-blog/schemas/validationCreateBlogSchema";
import { ICreateBlog } from "@/features/blog/create-blog/type";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";
import Image from "next/legacy/image";

export default function CreateBlog() {
  const router = useRouter();
  const [preview, setPreview] = useState("");

  const handlePostBlog = async ({
    title,
    postDate,
    author,
    description,
    imageUrl,
  }: ICreateBlog) => {
    try {
      const response = await axios.post("/api/blog/create-blog", {
        blog_title: title,
        blog_created_date: postDate,
        blog_author: author,
        blog_description: description,
        blog_image: imageUrl,
      });
      toast.success(response?.data?.message);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      toast.error(err?.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      postDate: "",
      author: "",
      description: "",
      imageUrl: "",
    },
    validationSchema: validationCreateBlogSchema,
    onSubmit: async ({ title, postDate, author, description, imageUrl }) => {
      await handlePostBlog({
        title: title,
        postDate: postDate,
        author: author,
        description: description,
        imageUrl: imageUrl,
      });
      router.push("/blog");
    },
  });

  // Update preview when imageUrl changes
  useEffect(() => {
    setPreview(formik.values.imageUrl);
  }, [formik.values.imageUrl]);

  // Check role and redirect if not admin
  const { role } = useAuthStore();
  useEffect(() => {
    if (role !== "admin") {
      router.push("/blog");
    }
  }, [role]);

  return (
    <div className="min-h-screen bg-red-700 p-8 text-black">
      <h1 className="flex justify-center py-8 text-3xl font-bold text-white">
        Create a New Blog
      </h1>

      {/* User Info */}
      <div className="mb-4 flex justify-end">
        <div className="rounded-lg bg-white px-4 py-2 text-sm text-red-700">
          Logged in as: <strong>Admin</strong>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="">
        <div className="input-container mx-auto flex max-w-6xl flex-col gap-6 rounded-xl bg-white p-6 md:flex-row">
          {/* Left: Image URL */}
          <div className="flex w-full flex-col gap-2 md:w-1/3">
            <label htmlFor="imageUrl" className="text-sm font-semibold">
              Image URL
            </label>
            <input
              name="imageUrl"
              id="imageUrl"
              type="text"
              placeholder="Paste image URL..."
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              className="w-full rounded border border-gray-400 p-2 text-sm"
            />
            {formik.errors.imageUrl && formik.touched.imageUrl && (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.imageUrl}
              </div>
            )}

            {preview && (
              <Image
                src={preview}
                alt="Preview"
                className="w-full rounded object-contain"
                style={{ maxHeight: "200px" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            )}
          </div>

          {/* Right: Inputs */}
          <div className="w-full space-y-4 md:w-2/3">
            <div>
              <input
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="w-full rounded border border-gray-600 bg-white px-4 py-2"
              />
              {formik.errors.title && formik.touched.title && (
                <div className="mt-1 text-sm text-red-500">
                  {formik.errors.title}
                </div>
              )}
            </div>

            <div>
              <input
                name="postDate"
                id="postDate"
                type="date"
                value={formik.values.postDate}
                onChange={formik.handleChange}
                className="w-full rounded border border-gray-600 bg-white px-4 py-2"
              />
              {formik.errors.postDate && formik.touched.postDate && (
                <div className="mt-1 text-sm text-red-500">
                  {formik.errors.postDate}
                </div>
              )}
            </div>

            <div>
              <input
                name="author"
                id="author"
                type="text"
                placeholder="Author"
                value={formik.values.author}
                onChange={formik.handleChange}
                className="w-full rounded border border-gray-600 bg-white px-4 py-2"
              />
              {formik.errors.author && formik.touched.author && (
                <div className="mt-1 text-sm text-red-500">
                  {formik.errors.author}
                </div>
              )}
            </div>

            <div>
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                rows={5}
                className="w-full rounded border border-gray-600 bg-white px-4 py-2"
              />
              {formik.errors.description && formik.touched.description && (
                <div className="mt-1 text-sm text-red-500">
                  {formik.errors.description}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mx-auto mt-6 max-w-6xl md:col-span-2">
          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-3 text-lg text-white hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

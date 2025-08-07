import Image from "next/legacy/image";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
interface IParams {
  params: {
    objectId: string;
  };
}

// Fungsi untuk mengambil data blog
const GetDetailsBlog = async ({ objectId }: { objectId: string }) => {
  const res = await fetch(`http://localhost:3000/api/blog/detail/${objectId}`, {
    cache: "no-cache",
  });

  const { data } = await res.json();
  if (!res.ok) throw new Error(`Blog with objectId ${objectId} not found!`);
  return data;
};

// Fungsi untuk generate metadata
export async function generateMetadata(
  { params }: IParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { objectId } = await params;

  // Ambil data blog berdasarkan objectId
  const blog = await GetDetailsBlog({ objectId });

  // Jika blog tidak ditemukan, kembalikan notFound
  if (!blog) return notFound();

  return {
    title: `${blog.blog_title} | Nintendo Dev Blog`,
    description: blog.blog_description?.slice(0, 150), // potong jadi 150 karakter
    openGraph: {
      title: blog.blog_title,
      url: `/blog/detail/${objectId}`, // url untuk halaman blog detail, ini perlu di ubah sesuai dengan URL yang sesuai
      images: [
        {
          url: blog.blog_image,
          width: 1200,
          height: 630,
          alt: blog.blog_title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.blog_title,
      images: [blog.blog_image],
    },
  };
}

export function escapeHTML(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default async function Page({ params }: IParams) {
  const { objectId } = await params;
  const blog = await GetDetailsBlog({ objectId });

  return (
    // Main Content
    <main className="bg-white">
      <div className="mx-auto mt-10 max-w-3xl px-4 py-16 text-black">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-700 hover:text-gray-900">
          <Link href="/" className="cursor-pointer hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="cursor-pointer hover:underline">
            Blog
          </Link>{" "}
          /{" "}
          <Link href={`/blog/detail-blog/${objectId}`} className="font-medium">
            {blog.blog_title}
          </Link>
        </nav>

        {/* Title */}
        <h1 className="mb-2 text-3xl font-bold">{blog.blog_title}</h1>

        {/* Meta Info */}
        <p className="mb-6 text-sm text-gray-500">
          {blog.blog_author} /{" "}
          {new Date(blog.blog_created_date).toLocaleString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* Main Image */}
        <div className="mb-8 overflow-hidden rounded-xl">
          <Image
            src={blog.blog_image} // Pastikan gambar ada di /public/images
            alt={blog.blog_title}
            width={1200}
            height={600}
            className="h-auto w-full"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-4 leading-relaxed text-black">
          <div className="space-y-2 whitespace-pre-line">
            {blog.blog_description}
          </div>
        </div>
      </div>
    </main>
  );
}

import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function POST(req: NextRequest) {
  try {
    const blog = await req.json();

    const response = await Backendless.Data.of("BlogPosts").save(blog);
    return NextResponse.json({
      succes: true,
      message: `Blog [📑${blog.blog_title}] created successfully`,
    });
  } catch (error) {
    const err = error as {
      status?: number;
      message?: string;
    };
    return NextResponse.json(
      {
        message: err.message ?? "Something went wrong",
      },
      {
        status: err?.status ?? 500,
      },
    );
  }
}

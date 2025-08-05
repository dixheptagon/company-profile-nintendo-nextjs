import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function GET() {
  try {
    const findDataBlogs = await Backendless.Data.of("BlogPosts").find();

    console.log(findDataBlogs);

    return NextResponse.json({
      message: "Get data blog successfully",
      data: findDataBlogs,
    });
  } catch (error) {
    console.log(error);
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

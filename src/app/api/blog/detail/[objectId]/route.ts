import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { objectId: string } },
) {
  try {
    const { objectId } = params;

    const findDataBlogs = await Backendless.Data.of("BlogPosts").findById({
      objectId,
    });

    return NextResponse.json({
      message: `Get data blog with objectId ${objectId} successfully`,
      data: findDataBlogs,
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

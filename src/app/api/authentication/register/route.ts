import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();

    await Backendless.UserService.register(user);
    return NextResponse.json({
      succes: true,
      message: `User ${user.username} registered successfully`,
    });
  } catch (error: any) {
    const err = error as {
      status: number;
      message: string;
    };

    return NextResponse.json(
      {
        message: error.message ?? "Something went wrong",
      },
      {
        status: err?.status ?? 500,
      },
    );
  }
}

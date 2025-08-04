import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const res = await Backendless.UserService.login(username, password);

    return NextResponse.json({
      message: `User ${username} logged in successfully`,
      data: res,
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

import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function GET(req: NextRequest) {
  try {
    const objectId = (await headers()).get("authorization");

    if (!objectId) {
      throw {
        status: 401,
        message: "User unauthorized, object id must be provided",
      };
    }

    const findUserByObjectId = await Backendless.Data.of("Users").findById({
      objectId,
    });

    return NextResponse.json({
      message: "Session login successfully",
      data: findUserByObjectId,
    });
  } catch (error) {
    console.log("error", error);
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

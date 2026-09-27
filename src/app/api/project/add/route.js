import Project from "@/src/models/Project";
import connectToDB from "@/src/database";
import { verifyAuth } from "@/src/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await verifyAuth();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    await connectToDB();

    const extractData = await req.json();

    const saveData = await Project.create(
      extractData
    );

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data Saved Successfully",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong, Please try again",
      },
      {
        status: 500,
      }
    );
  } catch (error) {
    console.error("Project POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong, Please try again",
      },
      {
        status: 500,
      }
    );
  }
}
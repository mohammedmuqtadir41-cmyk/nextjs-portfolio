import Project from "@/src/models/Project";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();

    const extractData = await Project.find({});

    return NextResponse.json({
      success: true,
      data: extractData,
    });
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
}
import About from "@/src/models/About";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    console.log("EXTRACT DATA RECEIVED:", extractData); // <-- Add this log

    const saveData = await About.create(extractData);
    console.log("SAVE DATA RESULT:", saveData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data Saved Successfully",
      });
    }

    return NextResponse.json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
}

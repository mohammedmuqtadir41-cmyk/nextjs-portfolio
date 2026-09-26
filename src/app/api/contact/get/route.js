import Contact from "@/src/models/Contact";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();

    const extractData = await Contact.find({})
      .sort({ updatedAt: -1 });

    return NextResponse.json({
      success: true,
      data: extractData,
    });
  } catch (e) {
    console.log("Contact GET Err", e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
}
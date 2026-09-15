import About from "@/src/models/About";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    // console.log("EXTRACT DATA RECEIVED:", extractData);

    const { _id, ...aboutData } = extractData;

    let saveData;

    if (_id) {
      saveData = await About.findByIdAndUpdate(_id, aboutData, {
        new: true,
        runValidators: true,
      });
    } else {
      saveData = await About.create(aboutData);
    }
    
    // console.log("SAVE DATA RESULT:", saveData);

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

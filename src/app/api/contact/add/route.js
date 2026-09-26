import Contact from "@/src/models/Contact";
import connectToDB from "@/src/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();

    const extractData = await req.json();

    const { _id, ...contactData } = extractData;

    let saveData;

    if (_id) {
      saveData = await Contact.findByIdAndUpdate(
        _id,
        contactData,
        {
          new: true,
          runValidators: true,
        }
      );
    } else {
      saveData = await Contact.create(contactData);
    }

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
    console.log("Contact POST Err", e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
}
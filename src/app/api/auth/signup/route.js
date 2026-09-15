import User from "@/src/models/User";
import connectToDB from "@/src/database";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();

    const { name, email, password } = await req.json();

    // Check if all fields are provided
    if (!name || !email || !password) {
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      return NextResponse.json({
        success: true,
        message: "User registered successfully",
      });
    }

    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, Please try again",
    });
  }
}
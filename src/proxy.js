import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default async function proxy(request) {
  console.log("🔥 PROXY RUNNING:", request.nextUrl.pathname);

  const token = request.cookies.get("token")?.value;

  console.log("🍪 TOKEN:", token);

  if (!token) {
    console.log("❌ NO TOKEN, REDIRECTING");

    return NextResponse.redirect(
      new URL("/auth", request.url)
    );
  }

  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET
    );

    await jwtVerify(token, secret);

    console.log("✅ TOKEN VALID");

    return NextResponse.next();
  } catch (error) {
    console.log("❌ INVALID TOKEN");

    return NextResponse.redirect(
      new URL("/auth", request.url)
    );
  }
}

export const config = {
  matcher: ['/admin',"/admin/:path*"],
};
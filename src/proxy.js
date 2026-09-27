import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default async function proxy(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(
      new URL("/auth", request.url)
    );
  }

  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET
    );

    await jwtVerify(token, secret);

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(
      new URL("/auth", request.url)
    );
  }
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
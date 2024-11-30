import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const redirectCookie = request.cookies.get("redirected");

  if (!redirectCookie) {
    const redirectResponse = NextResponse.redirect(new URL("/", request.url));
    redirectResponse.cookies.set("redirected", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/"
    });
    return redirectResponse;
  }

  return response;
};

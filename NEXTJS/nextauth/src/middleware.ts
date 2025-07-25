import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPage = path === "/login" || path === "/signup" || path === "/";
  const token = request.cookies.get("token")?.value || "";
  if (isPublicPage && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
  if (!isPublicPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/profile", "/signup", "/login"],
};

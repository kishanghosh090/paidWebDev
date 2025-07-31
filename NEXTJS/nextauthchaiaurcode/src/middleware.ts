import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const url = request.nextUrl;
  if (token && url.pathname.startsWith("/signin")) {
    return NextResponse.redirect("/");
  }

  if (!token && url.pathname !== "/signin") {
    return NextResponse.redirect("/signin");
  }
}

export const config = {
  matcher: ["/signin", "/"],
};

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");
  const loginToken = request.cookies.get("loginToken")?.value;
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }
  const loginUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname == "/signup";
  if (loginUserNotAccessPath) {
    //accessing not secured route
    if (loginToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    //accessing secured route
    if (!loginToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied",
            success: false,
          },
          {
            status: 401,
          }
        );
      }
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
    }
  }
  console.log(loginToken);
  // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};

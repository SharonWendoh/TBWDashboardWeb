import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest){
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    // Redirect to /login if there is no session and user tries to access a protected route
    if (!session && pathname.startsWith('/pages/Dashboard')){
        return NextResponse.redirect(new URL('/pages/Login', req.url))
    }

    // Redirect to /dashboard if there is a session and user tries to access /login
    if (session && (pathname.startsWith('/pages/Login') || pathname.startsWith('/pages/Register'))) {
        return NextResponse.redirect(new URL('/pages/Dashboard', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/pages/Dashboard', '/pages/Login','/pages/Register','/']
}
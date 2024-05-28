import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import jwt from 'jsonwebtoken';

export async function middleware(req) {
  // Get the cookie header from the request
  const cookieHeader = req.headers.get('cookie');
  // Parse the cookies
  const cookies = parse(cookieHeader || '');
  const authToken = cookies.authToken; // The name of your auth token cookie

  // Check if the request is for the /dashboard route
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (!authToken) {
      // Redirect to /admin if auth token is missing
      const url = new URL('/admin', req.nextUrl.origin);
      return NextResponse.redirect(url);
    }
    // Proceed with the request if auth token is available
    return NextResponse.next();
  }

  // Proceed with the request for other routes
  return NextResponse.next();
}

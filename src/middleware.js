import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import jwt from 'jsonwebtoken';

export async function middleware(req) {
  const cookieHeader = req.headers.get('cookie');
  const cookies = parse(cookieHeader || '');
  const userAuthToken = cookies.userAuthToken;
  const authBranchToken = cookies.authBranchToken;
  const authToken = cookies.authToken;

  if (req.nextUrl.pathname.startsWith('/user')) {
    if (!userAuthToken) {
      const url = new URL('/partnersignin', req.nextUrl.origin);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith('/branch')) {
    if (!authBranchToken) {
      const url = new URL('/admin', req.nextUrl.origin);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (!authToken) {
      const url = new URL('/admin', req.nextUrl.origin);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

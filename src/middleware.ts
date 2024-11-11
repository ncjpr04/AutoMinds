import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

export default function middleware(req: any, event: any) {
  const url = req.nextUrl.pathname;

  // Define public routes and ignored routes
  const publicRoutes = ['/', '/api/clerk-webhook', '/api/drive-activity/notification', '/api/payment/success'];
  const ignoredRoutes = [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
  ];

  // If the route is in public or ignored routes, bypass Clerk middleware
  if (publicRoutes.includes(url) || ignoredRoutes.includes(url)) {
    return NextResponse.next();
  }

  // Apply Clerk middleware for other routes
  return clerkMiddleware()(req, event);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

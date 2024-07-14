import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
  '/dashboard',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
  '/plans',
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
// proxy.ts (with Kinde SDK)
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function proxy(req: Request) {
	return withAuth(req); // Handles authentication for protected routes
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!_next/static|_next/image|favicon.ico).*)",
	],
};

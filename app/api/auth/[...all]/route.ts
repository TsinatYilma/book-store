import { auth } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handlers = toNextJsHandler(auth);

// This handles all requests like /api/auth/sign-in, /api/auth/get-session, etc.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Match specific subroutes
  if (pathname.endsWith("/get-session")) {
    return handlers.GET(req);
  }
  if (pathname.endsWith("/callback/google")) {
    return handlers.GET(req); // ✅ Handles the Google callback
  }

  // Optional: handle other GET routes or return 405
  return new Response("Method Not Allowed", { status: 405 });
}

export async function POST(req: Request) {
  return handlers.POST(req);
}

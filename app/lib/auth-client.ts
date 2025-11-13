import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    basePath: "/api/auth",
    session: {
        session: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
            staleTime: Infinity,
          },
    }
});

export async function getServerSession() {
    return await authClient.getSession();
  }



import { useQuery } from "@tanstack/react-query";
import { getSession } from "@/app/lib/auth-client";
import type { Session } from "better-auth"; // adjust type import
import {BetterAuthSession} from "@/app/lib/definition"

export function useSessionQuery() {
  return useQuery<BetterAuthSession | null>({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await getSession();
      return data ?? null;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true, // or false if you don’t want it
    refetchOnReconnect: true,
    refetchOnMount: false,
    retry: false,
  });
}

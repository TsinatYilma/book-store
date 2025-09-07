"use client"
import { useEffect } from "react";
import { useSession } from "@/app/lib/auth-client";
import { useAuthStore } from "@/store/session";
import { authClient } from "@/app/lib/auth-client" // import the auth client
const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } =  authClient.useSession()


useEffect(() => {
  const { data: session } = useSession();
  if (session?.user) {
    useAuthStore.getState().setUser(session.user);
  }
}, [session]);

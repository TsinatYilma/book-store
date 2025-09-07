import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import {schema} from "@/db/schema"
import { nextCookies } from "better-auth/next-js"; // your drizzle instance
import { cache } from "react";
import { headers } from "next/headers";
 
export const auth = betterAuth({
    emailAndPassword: {
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema,
    }),
    plugins: [nextCookies()]
});

export const getSession = cache(async () => {
      return await auth.api.getSession({
         headers: await headers()
     })
 })
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import {schema} from "@/db/schema";
import { nextCookies } from "better-auth/next-js"; 
import { cache } from "react";
import { headers } from "next/headers";
import {Resend} from "resend"
import ForgotPassword from "../pages/forgotPassword/forgot-password";
import ForgotPasswordEmail from "../pages/forgotPassword/resetPassword";

const resend = new Resend(process.env.RESEND_API_KEY as string)

 
export const auth = betterAuth({
    session: {
      cookieCache: {
          enabled: true,
          maxAge: 5 * 60 // Cache duration in seconds
      }
    },
    emailAndPassword: {
    enabled: true, 
    sendResetPassword: async ({user, url}) => {
        await resend.emails.send({ 
          from: "noreply@orcdevbokstore.com",
          to: user.email,
          subject: "Reset your password",
          react: ForgotPasswordEmail({username: user.name, resetUrl: url, userEmail: user.email}),
        });
      },
  }, 
  cookie: {
    name: 'session',
    options: {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
    },
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


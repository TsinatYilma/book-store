"use client"
import { authClient } from "@/app/lib/auth-client"
import Link from "next/link"

interface ForgotPasswordEmail{
    username: string,
    resetUrl: string,
    userEmail: string,
}

export default function ForgotPasswordEmail(props: ForgotPasswordEmail) {
    const {username, resetUrl, userEmail} = props

    return (
      <div className="bg-[#0f0f0f] text-gray-100 font-sans p-6 rounded-xl max-w-md mx-auto shadow-lg border border-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-white">Reset Your Password</h2>
        <p className="text-sm mb-6 text-gray-300">
          Hello ${username}, We received a request to reset your password for ${userEmail}. Click the button below to choose a new one.
          If you didn’t request this, you can safely ignore this email.
        </p>
        <Link
          href={resetUrl}
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Reset Password
        </Link>
        <p className="text-xs text-gray-500 mt-6 text-center">
          If you have any questions, contact us at <span className="underline">support@yourdomain.com</span>
        </p>
      </div>
    );
  }
  
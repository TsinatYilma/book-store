// components/AuthOverlay.tsx
"use client";
import { useAuthOverlay } from "@/app/LayoutContext/OverlayContext";
import { createPortal } from "react-dom";
import Login from "@/app/pages/login/SignIn";
import SignUp from "../pages/signup/Register";

export default function AuthOverlay() {
  const { isVisible, hide, mode } = useAuthOverlay();

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center min-w-full">
      {mode === "login" ? <Login /> : <SignUp />}
    </div>,
    document.body
  );
}

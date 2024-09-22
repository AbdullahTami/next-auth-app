"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({
  mode = "redirect",
  asChild,
  children,
}: LoginButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}

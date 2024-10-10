"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "@/components/auth/LoginForm";

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
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}

"use client";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Social() {
  function handleClick(provider: "google" | "github") {
    signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleClick("google")}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleClick("github")}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
}

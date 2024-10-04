import { logout } from "@/actions/logout";
import React from "react";

interface LogoutButtonProps {
  children?: React.ReactNode;
}
export default function LogoutButton({ children }: LogoutButtonProps) {
  async function handleClick() {
    await logout();
  }
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}

"use client";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import React from "react";
import FormError from "@/components/FormError";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: "USER" | "ADMIN";
}

export default function RoleGate({ children, allowedRole }: RoleGateProps) {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
}

"use client";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import React from "react";

export default function SettingsPage() {
  const user = useCurrentUser();

  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={logout} type="submit">
        Sign out
      </button>
    </div>
  );
}

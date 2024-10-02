"use client";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import React from "react";

export default function SettingsPage() {
  const user = useCurrentUser();

  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={logout} type="submit">
        Sign out
      </button>
    </div>
  );
}

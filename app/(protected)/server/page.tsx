import UserInfo from "@/components/UserInfo";
import { currentUser } from "@/lib/auth";
import React from "react";

export default async function ServerPage() {
  const user = await currentUser();
  return <UserInfo user={user} label="Server component 👮" />;
}

"use client";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";

import React, { useTransition } from "react";

export default function SettingsPage() {
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  async function handleClick() {
    startTransition(() => {
      settings({
        name: "New name!!!",
      }).then(() => update());
    });
  }
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold">⚙️Settings</p>
      </CardHeader>
      <CardContent>
        <Button disabled={isPending} onClick={handleClick}>
          Update name
        </Button>
      </CardContent>
    </Card>
  );
}

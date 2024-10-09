"use server";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import db from "@/lib/db";
import { SettingsValues } from "@/schemas";

export async function settings(values: SettingsValues) {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  return { success: "Settings updated" };
}

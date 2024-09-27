"use server";

import { registerSchema, RegisterValues } from "@/schemas";
import bcrypt from "bcryptjs";
import db from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";

export async function registerAction(
  values: RegisterValues
): Promise<{ error?: string; success?: string }> {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { password, name, email } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already used!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  return { success: "Confirmation email sent!" };
}

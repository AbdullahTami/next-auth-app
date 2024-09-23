"use server";

import { registerSchema, RegisterValues } from "@/schemas";

export async function registerAction(
  values: RegisterValues
): Promise<{ error?: string; success?: string }> {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  console.log(values);
  return { success: "Email sent!" };
}

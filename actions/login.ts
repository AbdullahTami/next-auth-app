"use server";

import { loginSchema, LoginValues } from "@/schemas";

export async function loginAction(
  values: LoginValues
): Promise<{ error?: string; success?: string }> {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  console.log(values);
  return { success: "Email sent!" };
}

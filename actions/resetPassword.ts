"use server";
import { getUserByEmail } from "@/data/user";
import { resetSchema, ResetValues } from "@/schemas";

export async function reset(values: ResetValues) {
  const validatedFields = resetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  console.log(existingUser);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  //   TODO: Generate token and send email
  return { success: "Reset email sent!" };
}

"use server";

import { LoginValues } from "@/schemas";

export async function loginAction(values: LoginValues) {
  console.log(values);
}

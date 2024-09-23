import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  password: z.string().min(6, { message: "Minimum 6 characters required." }),
  name: z.string().min(1, { message: "Name is required." }),
});

export type RegisterValues = z.infer<typeof registerSchema>;

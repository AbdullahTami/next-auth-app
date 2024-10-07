import * as z from "zod";

export const settingsSchema = z.object({
  name: z.optional(z.string()),
});
export type SettingsValues = z.infer<typeof settingsSchema>;

export const newPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export type NewPasswordValues = z.infer<typeof newPasswordSchema>;

export const resetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export type ResetValues = z.infer<typeof resetSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }),
  code: z.optional(z.string()),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  password: z.string().min(6, { message: "Minimum 6 characters required." }),
  name: z.string().min(1, { message: "Name is required." }),
});

export type RegisterValues = z.infer<typeof registerSchema>;

import * as z from "zod";

import { UserRole } from "@prisma/client";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "The New Password field is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "The Password field is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "A minimum of 6 characters is required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "The email address field is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "The email address field is required",
  }),
  password: z.string().min(1, {
    message: "The password field is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "The email address field is required",
  }),
  password: z.string().min(6, {
    message: "A minimum of 6 characters is required",
  }),
  name: z.string().min(1, {
    message: "The name field is required",
  }),
});

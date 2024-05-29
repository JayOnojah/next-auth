import * as z from 'zod';

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'A minimum of 6 characters is required',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'The email address field is required',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'The email address field is required',
  }),
  password: z.string().min(1, {
    message: 'The password field is required',
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'The email address field is required',
  }),
  password: z.string().min(6, {
    message: 'A minimum of 6 characters is required',
  }),
  name: z.string().min(1, {
    message: 'The name field is required',
  }),
});

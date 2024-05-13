import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'The email address field is required',
  }),
  password: z.string().min(1, {
    message: 'The password field is required',
  }),
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

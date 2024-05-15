'use server';

import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'You provided invalid credentials' };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: 'We could not find this email address.' };
  }

  // TODO: Generate Token & Send Email

  return { success: 'Password reset link was sent to your email.' };
};

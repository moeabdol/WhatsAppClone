import { z } from 'zod';

export const SignInFormSchema = z.object({
	email: z
		.string()
		.email('Invalid email format')
		.regex(/^[^\s]+$/, 'White spaces are not allowed')
		.regex(/^[^A-Z]*$/, 'Uppercase letters are not allowed'),
	password: z
		.string()
		.min(8, 'Must be at least 8 characters long')
		.max(255, 'Must be at most 255 characters long'),
});

export type SignInForm = z.infer<typeof SignInFormSchema>;

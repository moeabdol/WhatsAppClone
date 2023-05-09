import { z } from 'zod';

export const SignUpFormSchema = z.object({
	firstName: z
		.string()
		.min(3, 'Must be at least 3 characters long')
		.max(255, 'Must be at most 255 characters long')
		.regex(/^[^\s]+$/, 'White spaces are not allowed'),
	lastName: z
		.string()
		.min(3, 'Must be at least 3 characters long')
		.max(255, 'Must be at most 255 characters long')
		.regex(/^[^\s]+$/, 'White spaces are not allowed'),
	email: z
		.string()
		.email('Invalid email format')
		.regex(/^[^\s]+$/, 'White spaces are not allowed')
		.regex(/^[^A-Z]*$/, 'Uppercase letters are not allowed'),
	password: z
		.string()
		.min(8, 'Must be at least 8 characters long')
		.max(255, 'Must be at most 255 characters long')
		.regex(/[a-z]+/, 'Must contain at least 1 small letters')
		.regex(/[A-Z]+/, 'Must contain at least 1 capital letters')
		.regex(/[0-9]+/, 'Must contain at least 1 number')
		.regex(
			/[!@#$%^&*()\-_+=\\|[\]{}`'";:?/<>.,~]+/,
			'Must contain at least 1 special character'
		),
});

export type SignUpForm = z.infer<typeof SignUpFormSchema>;

import z from 'zod';

export const userSchema = z.object({
    username: z.string(),
    password: z.string(),
    email: z.string(),
    phone_number: z.string(),
    reset_token: z.string(),
    profile_image: z.string(),
    role_id: z.number(),
    created_at: z.date().optional(),
});
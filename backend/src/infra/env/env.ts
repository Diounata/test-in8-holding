import { z } from 'zod';

export const envSchema = z.object({
  FRONTEND_URL: z.string().url().default('http://localhost:3000'),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(4000),
});

export type Env = z.infer<typeof envSchema>;

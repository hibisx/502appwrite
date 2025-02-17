// schemas for zod validation, shared in many procedures, but not used in any database

import { z } from "zod";

export const userSchema = z.object({
  userId: z.string(),
  email: z.string().email(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 characters"),
});

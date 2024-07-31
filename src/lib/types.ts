import type { loginSchema, registerSchema } from './schemas';
import * as yup from 'yup';

export type LoginFormData = yup.InferType<typeof loginSchema>;

export type RegisterFormData = yup.InferType<typeof registerSchema>;

import { z } from 'zod';

// Define zod schema for username sub schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => value.trim().length > 0, {
      message: 'First name is required',
    })
    .refine(
      (value) => {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      {
        message: 'First name must start with an uppercase letter',
      },
    ),
  lastName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => value.trim().length > 0),
});
// Define zod schema for address sub-schema
const addressValidationSchema = z.object({
  street: z.string().refine((value) => value.trim().length > 0),
  city: z.string().refine((value) => value.trim().length > 0),
  country: z.string().refine((value) => value.trim().length > 0),
});
// Define zod schema for order
const ordersValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});
// Define zod schema for the main user schema
const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string().refine((value) => value.trim().length > 0),
  password: z
    .string()
    .min(1)
    .max(20, { message: 'Password cannot be more than 20 characters' }),
  fullName: userNameValidationSchema.refine(
    (value) =>
      Object.values(value).every((namePart) => namePart.trim().length > 0),
    { message: 'User name is required' },
  ),
  age: z.number(),
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .refine((value) => value.trim().length > 0, {
      message: 'User email is required',
    }),
  isActive: z.boolean(),
  hobbies: z.enum(['gardening', 'fishing', 'playing_cricket']),
  address: addressValidationSchema,
  orders: ordersValidationSchema,
});

export default userValidationSchema;

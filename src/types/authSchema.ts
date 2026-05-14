import { isValidPhoneNumber } from 'libphonenumber-js'
import z from 'zod'

const usernameRegex = /^[a-zA-Z0-9@._]+$/
const nameRegex = /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/


export const loginSchema = z.object({
  identifier: z
    .string()
    .min(3, "Must be at least 3 characters")
    .refine((value) => {
      // check if it's an email
      const isEmail = z.email().safeParse(value).success

      if (isEmail) return true

      // otherwise validate username
      return usernameRegex.test(value)
    }, {
      message: "Enter a valid email or username (letters, numbers, @ . _ only)"
    }),

  password: z.string().min(8, "Password must be at least 8 characters")
})


export const signupSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50)
    .regex(nameRegex, "Invalid first name format")
    .transform((val) => val.trim()),

  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50)
    .regex(nameRegex, "Invalid last name format")
    .transform((val) => val.trim()),

  email: z
    .email("Invalid email address")
    .transform((val) => val.toLowerCase().trim()),

  dateOfBirth: z
    .string()
    .refine((val) => {
      const date = new Date(val)
      if (isNaN(date.getTime())) return false

      const today = new Date()
      const age = today.getFullYear() - date.getFullYear()

      return age >= 13 && age <= 120
    }, "You must be between 13 and 120 years old"),

  phone: z
    .string()
    .refine((val) => isValidPhoneNumber(val || ""), {
      message: "Invalid phone number"
    }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100)
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one lowercase letter")
    .regex(/[0-9]/, "Must include at least one number")
    .regex(/[^A-Za-z0-9]/, "Must include at least one special character"),
})
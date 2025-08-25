import {z} from "zod";

export const createUserSchema = z.object({
    name:z.string().min(1 , "Name is required").max(100 , "Name too long"),
    email:z.email("Invalid email format"),
    age:z.number().int().min(1  , "age must be positive").max(120 , "Age too high").optional()
})


export const updateUserSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long").optional(),
  email: z.email("Invalid email format").optional(),
  age: z.number().int().min(1, "Age must be positive").max(120, "Age too high").optional(),
})
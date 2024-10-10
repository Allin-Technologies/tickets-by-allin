import z from "zod";

export const userFormSchema = z.object({
    first_name: z
        .string({ required_error: "First name is required." })
        .min(2, { message: "First name must contain at least 2 character(s)." })
        .trim().toLowerCase(),
    last_name: z
        .string({ required_error: "Last name is required." })
        .min(2, { message: "Last name must contain at least 2 character(s)." })
        .trim().toLowerCase(),
    gender: z.enum(["Male", "Female"], { message: "Gender is required." }),
    email: z
        .string({ required_error: "Provide a valid email address." })
        .email({ message: "Email address is invalid." })
        .trim().toLowerCase(),
    phone_number: z
        .string({ required_error: "Phone number is required." })
        .regex(/^\+?\d+$/, { message: "Invalid phone number." })
        .min(11, { message: "Phone number must have at least 11 characters." })
        .trim(),
});

import zod from "zod";


export const contactFormSchema = zod.object({
    user_name: zod.string().min(2, "Sorry, name is required"),
    user_email: zod
        .string()
        .min(1, "Sorry, email is required")
        .email("Sorry, invalid email"),
    message: zod.string().trim().min(5, "Sorry, message must be at least 5 characters"),
})
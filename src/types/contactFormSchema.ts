import z from "zod";

export const ContactFormSchema = z.object({
    fullname: z.string().min(8),
    email: z.email(),
    message:z.string()
})
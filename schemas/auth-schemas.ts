import { z } from "zod"

export const LoginFormSchema = z.object({
    email: z.string().email({ message: "Veuillez entrer un email valide" }),
    password: z.string().min(1, { message: "Votre mot de passe est obligatoire" }),
})

export const RegisterFormSchema = z.object({
    username: z.string().min(1, { message: "Votre nom d'utilisateur est obligatoire" }),
    email: z.string().email({ message: "Veuillez entrer un email valide" }),
    password: z.string().min(6, { message: "Votre mot de passe doit contenir au moins 6 caractères" }),
    confirmPassword: z.string().refine((data: any) => data.password === data.confirmPassword, { message: "Les mots de passe doivent correspondre" })
})

export type LoginFormSchema = z.infer<typeof LoginFormSchema>
export type RegisterFormSchema = z.infer<typeof RegisterFormSchema>
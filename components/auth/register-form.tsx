'use client'
import { RegisterFormSchema } from "@/schemas/auth-schemas"
import AutoForm, { AutoFormSubmit } from "../ui/auto-form"
import AuthForm from "./auth-form"
import { authClient } from "@/lib/services/auth-services"
import { toast } from "sonner"
import { useState } from "react"

const RegisterForm = () => {

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (submittedData: RegisterFormSchema) => {
        setLoading(true)
        const { data, error } = await authClient.signUp.email({
            name: submittedData.username,
            email: submittedData.email,
            password: submittedData.password,
            callbackURL: "/main",
        });
        if (data) {
            toast.success("Inscription reussie")
        }
        if (error) {
            toast.error("Erreur d'inscription")
        }
        setLoading(false)
    }

    return (
        <AuthForm>
            <AutoForm
                formSchema={RegisterFormSchema}
                onSubmit={handleSubmit}
                fieldConfig={{
                    username: {
                        label: "Nom d'utilisateur",
                        inputProps: {
                            type: 'text',
                            placeholder: 'nom d utilisateur',
                            className: 'py-6 rounded-xl border-border/50'
                        },
                    },
                    email: {
                        label: "Email",
                        inputProps: {
                            type: 'email',
                            placeholder: 'nom@exemple.com',
                            className: 'py-6 rounded-xl border-border/50'
                        },
                    },
                    password: {
                        label: "Mot de passe",
                        inputProps: {
                            type: 'password',
                            placeholder: '••••••••',
                            className: 'py-6 rounded-xl border-border/50'
                        },
                    },
                    confirmPassword: {
                        label: "Confirmer le mot de passe",
                        inputProps: {
                            type: 'password',
                            placeholder: '••••••••',
                            className: 'py-6 rounded-xl border-border/50'
                        },
                    },
                }}
            >
                <AutoFormSubmit className='w-full py-5 mt-4 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] border-none'>
                    S'inscrire
                </AutoFormSubmit>
            </AutoForm>
        </AuthForm>
    )
}

export default RegisterForm
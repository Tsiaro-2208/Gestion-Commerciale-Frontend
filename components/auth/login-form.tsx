'use client'

import { LoginFormSchema } from '@/schemas/auth-schemas'
import AutoForm, { AutoFormSubmit } from '../ui/auto-form'
import AuthForm from './auth-form'
import { authClient } from '@/lib/services/auth-services'
import { toast } from 'sonner'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (submittedData: LoginFormSchema) => {
        setLoading(true)
        const { data, error } = await authClient.signIn.email({
            email: submittedData.email,
            password: submittedData.password,
            callbackURL: "/main",
        });
        if (data) {
            toast.success("Connexion reussie")
            console.log(data);
            localStorage.setItem("user", JSON.stringify({ name: data.user.name, email: data.user.email, image: data.user.image }))

        }
        if (error) {
            toast.error("Erreur de connexion")
        }
        setLoading(false)
    }

    return (
        <AuthForm>
            <AutoForm
                formSchema={LoginFormSchema}
                onSubmit={handleSubmit}
                fieldConfig={{
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
                }}
            >
                <AutoFormSubmit className='w-full py-5 mt-4 bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] border-none'>
                    {loading ? <Loader2 className='h-5 w-5 animate-spin' /> : 'Se connecter'}
                </AutoFormSubmit>
            </AutoForm>
        </AuthForm>
    )
}

export default LoginForm
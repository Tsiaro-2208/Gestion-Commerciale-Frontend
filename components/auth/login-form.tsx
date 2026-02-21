'use client'

import { LoginFormSchema } from '@/schemas/auth-schemas'
import AutoForm, { AutoFormSubmit } from '../ui/auto-form'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import AuthForm from './auth-form'

const LoginForm = () => {
    const handleSubmit = (data: LoginFormSchema) => {
        console.log(data)
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
                    Se connecter
                </AutoFormSubmit>
            </AutoForm>
        </AuthForm>
    )
}

export default LoginForm
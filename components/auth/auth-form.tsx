'use client'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const AuthForm = ({ children }: { children: React.ReactNode }) => {


    return (
        <div className="flex flex-col gap-6 py-2">
            {children}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-foreground dark:bg-zinc-950 px-3 text-muted-foreground font-medium">
                        Ou continuer avec
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full py-6 rounded-xl flex items-center justify-center gap-3 border-border/50 bg-white hover:bg-gray-50 text-black shadow-sm transition-all active:scale-[0.98]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    <span className='text-primary'>Continuer avec Google</span>
                </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-2">
                En continuant, vous acceptez nos{" "}
                <a href="#" className="underline underline-offset-4 hover:text-emerald-500 transition-colors">
                    Conditions
                </a>{" "}
                et notre{" "}
                <a href="#" className="underline underline-offset-4 hover:text-emerald-500 transition-colors">
                    Confidentialité
                </a>.
            </p>
        </div>
    )
}

export default AuthForm
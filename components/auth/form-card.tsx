import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "../animate-ui/components/animate/tabs"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import LoginForm from "./login-form"
import RegisterForm from "./register-form"

const FormCard = () => {
    return (
        <Card className="w-full max-w-[450px] mx-4 p-8 rounded-3xl shadow-2xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-white/20 dark:border-white/10">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-center mb-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Bienvenue</h2>
                    <p className="text-muted-foreground text-sm">Gérez votre activité commerciale en toute simplicité</p>
                </div>

                <Tabs defaultValue="login">
                    <TabsList className="w-full">
                        <TabsTrigger value="login">Se connecter</TabsTrigger>
                        <TabsTrigger value="register">S&apos;inscrire</TabsTrigger>
                    </TabsList>
                    <TabsContents>
                        <TabsContent value="login">
                            <LoginForm />
                        </TabsContent>
                        <TabsContent value="register">
                            <RegisterForm />
                        </TabsContent>
                    </TabsContents>
                </Tabs>
            </div>
        </Card>
    )
}

export default FormCard
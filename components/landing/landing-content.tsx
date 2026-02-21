import Link from "next/link"
import { Button } from "../ui/button"

const LandingContent = () => {
    return (
        <div className="w-full">
            <div className="w-full min-h-screen flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-4xl md:text-3xl font-bold">Gerez efficacement votre activité commerciale sur une seule plateforme</h1>
                <p className="text-lg font-medium">Simplifiez votre quotidien et optimisez vos ventes</p>
                <div className="flex items-center gap-4 mt-10">
                    <Button variant="outline" className="px-10 py-6 rounded-full">En savoir plus</Button>
                    <Link href="/auth">
                        <Button className="px-10 py-6 rounded-full">Commencer</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingContent
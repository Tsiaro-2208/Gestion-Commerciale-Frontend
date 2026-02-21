import FormCard from "@/components/auth/form-card"
import Aurora from "@/components/backgrounds/Aurora"

const AuthPage = () => {
    return (
        <div className="w-full min-h-full relative">
            <div className="w-full h-screen absolute">
                <Aurora
                    colorStops={["#146643", "#247f70", "#459c26"]}
                    blend={1}
                    amplitude={1.0}
                    speed={1}
                />
            </div>
            <div className="w-full min-h-screen absolute">
                <div className="w-full min-h-screen flex items-center justify-center">
                    <FormCard />
                </div>

            </div>
        </div>
    )
}

export default AuthPage
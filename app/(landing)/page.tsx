import Aurora from "@/components/backgrounds/Aurora"
import LandingContent from "@/components/landing/landing-content"

const LandingPage = () => {
    return (
        <div className='w-full min-h-screen relative'>
            <div className="w-full h-screen absolute">
                <Aurora
                    colorStops={["#146643", "#247f70", "#459c26"]}
                    blend={1}
                    amplitude={1.0}
                    speed={1}
                />
            </div>
            <div className="w-full h-screen absolute">
                <LandingContent />
            </div>
        </div>
    )
}

export default LandingPage
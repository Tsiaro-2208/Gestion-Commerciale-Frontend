export default function Loading() {
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6">

                {/* Spinner moderne */}
                <div className="relative">
                    <div className="h-16 w-16 rounded-full border-4 border-emerald-200" />
                    <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-emerald-600 border-r-emerald-500" />
                </div>

                {/* Texte */}
                <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                    <span className="animate-pulse">Chargement</span>
                    <span className="animate-bounce [animation-delay:0ms]">.</span>
                    <span className="animate-bounce [animation-delay:150ms]">.</span>
                    <span className="animate-bounce [animation-delay:300ms]">.</span>
                </div>

            </div>
        </div>
    );
}
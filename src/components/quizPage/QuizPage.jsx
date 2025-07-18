import Navigation from "../Navigation"

export default function QuizPage(){
    return (
        <div className="bg-gradient-to-r from-green-200 via-gray-200 to-red-200 h-screen">
            <Navigation />
            <div className="flex items-center justify-center mt-60">
                <h1 className="text-3xl hover:text-5xl text-emerald-600 font-main hover:text-emerald-800 md:hover:text-9xl md:text-7xl">Coming soon...</h1>
            </div>
        </div>
    )
}
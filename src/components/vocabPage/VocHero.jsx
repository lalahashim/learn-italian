import { Link } from "react-router-dom"

export default function VocHero(){
    return(
        <div className="flex flex-col items-center mt-5 justify-center gap-5 w-[80%] mx-auto font-main md:gap-8">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl text-stone-900 m-0 md:text-8xl">Italian vocabulary</h1>
                <p className="text-lg text-stone-900 m-0 md:text-3xl">Learn Italian words by level and topic</p>
            </div>
            <Link 
                to="/quiz"
                className="text-lg text-center px-2.5 py-1.5 mb-10 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 md:mb-28 md:px-4 md:py-2 md:text-xl"
            >
                Try a quiz
            </Link>
        </div>
    )
}
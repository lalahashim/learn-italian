import { Link } from "react-router-dom";

export default function HomeHero(){
    return(
        <div className="flex flex-col items-center mt-5 justify-center gap-5 w-[80%] mx-auto font-main md:gap-8">
            <div className="flex flex-col items-center gap-0">
                <h1 className="text-5xl text-stone-900 m-0 md:text-8xl">Learn Italian</h1>
                <h1 className="text-5xl text-stone-900 m-0 md:text-8xl">with ease!</h1>
            </div>
            <Link 
                to="/vocabulary"
                className="text-lg text-center px-2.5 py-1.5 mb-10 rounded-xl cursor-pointer bg-green-800 text-stone-200 hover:bg-green-900 hover:text-stone-50 md:mb-28 md:px-4 md:py-2 md:text-xl">
                Start learning
            </Link>
        </div>
    )
}
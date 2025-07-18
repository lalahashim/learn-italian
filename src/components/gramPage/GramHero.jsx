import { Link } from "react-router-dom";

export default function GrammarHero() {
    return (
        <div className="flex flex-col items-center mt-5 justify-center gap-5 w-[80%] mx-auto font-main md:gap-8">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-4xl text-stone-900 m-0 md:text-8xl">Italian grammar</h1>
                <h1 className="text-lg text-center text-stone-900 m-0 md:text-3xl">Clear explanations, examples, and structure</h1>
            </div>
            <Link 
                to="/quiz"
                className="text-lg text-center px-2.5 py-1.5 mb-10 rounded-xl cursor-pointer bg-red-700 text-stone-200 hover:bg-red-800 hover:text-stone-50 md:mb-28 md:px-4 md:py-2 md:text-xl"
            >
                Try a quiz
            </Link>
        </div>
    );
}

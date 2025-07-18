import { Link } from "react-router-dom";

export default function Overview(){
    return (
        <div className="mt-16 w-[80%] mx-auto flex flex-col gap-8 text-center md:grid md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">📚 Vocabulary</h2>
                <p>Learn words by topics with examples.</p>
                <Link
                    to="/vocabulary"
                    className="inline-block bg-green-800 text-stone-200 text-center mt-2 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-green-900 hover:text-stone-50"
                >
                    Explore
                </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">🧠 Grammar</h2>
                <p>Understand key rules with simple explanations.</p>
                <Link
                    to="/grammar"
                    className="inline-block bg-gray-100 text-center mt-2 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-200"
                >
                    Explore
                </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">📝 Quiz</h2>
                <p>Test your knowledge and track progress.</p>
                <Link
                    to="/quiz"
                    className="inline-block bg-red-700 text-stone-200 text-center mt-2 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-red-800 hover:text-stone-50"
                >
                    Explore
                </Link>
            </div>
        </div>
    )
}
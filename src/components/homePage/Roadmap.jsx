export default function Roadmap(){
    return(
        <section className="mt-20 w-[80%] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-6">Your Italian Learning Journey</h2>
            <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
                <div className="bg-white shadow-md p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">Step 1: Basic Words</h3>
                    <p className="text-gray-600">Start with greetings, numbers, and simple vocabulary.</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">Step 2: Grammar Rules</h3>
                    <p className="text-gray-600">Understand how Italian sentences work.</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">Step 3: Practice Quizzes</h3>
                    <p className="text-gray-600">Check your progress and improve.</p>
                </div>
            </div>
        </section>
    )
}
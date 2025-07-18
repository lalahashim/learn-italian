import { useState } from "react";
import Vocabulary from "./Vocabulary";
import AudioContent from "./AudioContent";

export default function MainContent(){
    const [chosenLevel, setChosenLevel] = useState("");
 
    return(
        <div className="w-[90%] mx-auto my-16 font-main">
            <div className="flex items-center">
                <button 
                    onClick={() => setChosenLevel("A1")} 
                    className={`cursor-pointer text-stone-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-green-900
                        ${chosenLevel === "A1" ? "bg-green-900" : "bg-green-800"}
                    `}>
                        A1
                </button>
                <button 
                    onClick={() => setChosenLevel("A2")} 
                    className={`cursor-pointer text-stone-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-green-900
                        ${chosenLevel === "A2" ? "bg-green-900" : "bg-green-800"}
                    `}>
                    A2
                </button>
                <button 
                    onClick={() => setChosenLevel("B1")} 
                    className={`cursor-pointer bg-zinc-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-zinc-300
                        ${chosenLevel === "B1" ? "bg-zinc-300" : "bg-zinc-200"}
                    `}>
                        B1
                </button>
                <button 
                    onClick={() => setChosenLevel("B2")} 
                    className={`cursor-pointer bg-zinc-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-zinc-300
                        ${chosenLevel === "B2" ? "bg-zinc-300" : "bg-zinc-200"}
                    `}>
                    B2
                </button>
                <button 
                    onClick={() => setChosenLevel("C1")} 
                    className={`cursor-pointer bg-red-700 text-stone-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-red-800
                        ${chosenLevel === "C1" ? "bg-red-800" : "bg-red-700"}
                    `}>
                        C1
                </button>
                <button 
                    onClick={() => setChosenLevel("audio")}
                    className={`cursor-pointer bg-red-700 px-3 py-1.5 rounded-t-lg hover:bg-red-800
                        ${chosenLevel === "audio" ? "bg-red-800" : "bg-red-700"}
                `}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" fill="currentColor" className="bi bi-headphones text-stone-200" viewBox="0 0 16 16">
                            <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
                        </svg>
                </button>
            </div>
            
            <div className={`bg-stone-50 p-3
                        ${!chosenLevel ? "rounded-tr-xl rounded-b-xl" : "rounded-tr-2xl rounded-b-2xl"}
            `}>
                {!chosenLevel ? (
                    <p>Please select a level to view vocabulary</p>
                ) : (
                    chosenLevel === "audio" ? (
                        <AudioContent />
                    ) : (
                        <Vocabulary level={chosenLevel} />
                    )
                )}
            </div>
        </div>
    )
}

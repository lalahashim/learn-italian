import { useState } from "react";
import Grammar from "./Grammar";

export default function GrammarContent(){
    const [selectedLevel, setSelectedLevel] = useState("");
 
    return(
        <div className="w-[90%] mx-auto my-16 font-main">
            <div className="flex items-center">
                <button 
                    onClick={() => setSelectedLevel("A1")} 
                    className={`cursor-pointer text-stone-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-green-900
                        ${selectedLevel === "A1" ? "bg-green-900" : "bg-green-800"}
                    `}>
                        A1
                </button>
                <button 
                    onClick={() => setSelectedLevel("A2")} 
                    className={`cursor-pointer text-stone-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-green-900
                        ${selectedLevel === "A2" ? "bg-green-900" : "bg-green-800"}
                    `}>
                    A2
                </button>
                <button 
                    onClick={() => setSelectedLevel("B1")} 
                    className={`cursor-pointer bg-gray-100 text-lg px-3 py-1.5 rounded-t-lg hover:bg-gray-200
                        ${selectedLevel === "B1" ? "bg-gray-200" : "bg-gray-100"}
                    `}>
                        B1
                </button>
                <button 
                    onClick={() => setSelectedLevel("B2")} 
                    className={`cursor-pointer bg-red-700 text-stone-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-red-800
                        ${selectedLevel === "B2" ? "bg-red-800" : "bg-red-700"}
                    `}>
                    B2
                </button>
                <button 
                    onClick={() => setSelectedLevel("C1")} 
                    className={`cursor-pointer bg-red-700 text-stone-200 text-lg px-3 py-1.5 rounded-t-lg hover:bg-red-800
                        ${selectedLevel === "C1" ? "bg-red-800" : "bg-red-700"}
                    `}>
                        C1
                </button>
            </div>
            
            <div className={`bg-stone-50 p-3
                        ${!selectedLevel ? "rounded-tr-xl rounded-b-xl" : "rounded-tr-2xl rounded-b-2xl"}
            `}>
                {!selectedLevel ? (
                    <p>Please select a level to view grammar</p>
                ) : (
                        <Grammar level={selectedLevel} />
                )}
            </div>
        </div>
    )
}
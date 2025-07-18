import { useEffect, useState } from "react"

export default function Grammar({level}){
    const [gramData, setGramData] = useState(null);

    useEffect(() => {
        fetch("/data/grammar.json")
            .then((res) => res.json())
            .then((data) => setGramData(data))
            .catch((err) => console.error("Error downloading grammar:", err));
    }, []);

    if(!gramData){
        return <p>Downloading ...</p>;
    }

    if(!gramData[level]){
        return <p>No data for {level}, yet</p>;
    }

    return (
        <div>
            {Object.entries(gramData[level].topics).map(([topic, info]) => (
                <div key={topic} className="mb-8">
                <h2 className="text-xl font-bold mb-2 md:text-2xl">
                    {topic} <span className="text-gray-600 text-lg">({info.english})</span>
                </h2>
                <p className="mb-4">{info.description}</p>

                {info.details && (
                    <div className="list-disc list-inside mb-4 space-y-1">
                    {info.details.map((detail, i) => (
                        <li key={i} className="list-none whitespace-pre-line">{detail}</li>
                    ))}
                    </div>
                )}

                {info.examples && (
                    <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Examples:</h3>
                    <ul className="space-y-2">
                        {info.examples.map((ex, i) => (
                        <li key={i} className="bg-gray-100 p-3 rounded">
                            <p><em>{ex.it}</em></p>
                            <p className="text-gray-700">{ex.en}</p>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
                </div>
            ))}
        </div>

    );
}
import { useEffect, useState } from "react";

export default function Vocabulary({level}){
    const [vocabData, setVocabData] = useState(null);

    useEffect(() => {
        fetch("/data/vocabulary.json")
            .then((res) => res.json())
            .then((data) => setVocabData(data))
            .catch((err) => console.error("Error downloading vocabulary:", err));
    }, [])

    if(!vocabData){
        return <p>Downloading ...</p>;
    }

    if(!vocabData[level]){
        return <p>No data for {level}, yet</p>;
    }

  return (
    <div>
      {Object.entries(vocabData[level].topics).map(([topic, info]) => (
        <div key={topic} className="mb-4">
          <h2 className="text-lg md:text-xl font-semibold">{topic} ({info.english})</h2>
          <ul className="list-disc list-inside">
            {info.words.map((word, i) => (
              <li key={i}>
                {word.it} — {word.en}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
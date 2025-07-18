import { useEffect, useState } from "react";

export default function AudioContent() {
  const [audioData, setAudioData] = useState(null);

  useEffect(() => {
    fetch("/data/audioData.json")
      .then((res) => res.json())
      .then((data) => setAudioData(data))
      .catch((err) => console.error("Audio data error:", err));
  }, []);

  if (!audioData) {
    return <p>Loading audio playlists...</p>;
  }

  return (
    <div>
      {Object.entries(audioData).map(([level, videos]) => (
        <div key={level} className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">{level}</h2>
          {videos.map((video, i) => (
            <div key={i} className="mb-3 bg-white shadow p-4 rounded-xl">
              <p className="font-semibold text-lg">{video.title}</p>
              <p className="text-sm text-gray-600">{video.channel}</p>
              <p className="text-sm mb-2">{video.description}</p>
              <a href={video.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">Watch on YouTube</a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

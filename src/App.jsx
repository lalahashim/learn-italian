import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homePage/Home";
import VocabularyPage from "./components/vocabPage/VocabularyPage";
import GrammarPage from "./components/gramPage/GrammarPage";
import QuizPage from "./components/quizPage/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
        <Route path="/grammar" element={<GrammarPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

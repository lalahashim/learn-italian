import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="flex items-center justify-between mx-auto px-4 py-4 w-[90%]">
        <div className="flex items-center gap-2">
          <img src="/italianFlag.png" alt="italian flag" className="w-7 h-5" />
          <h1 className="text-xl font-main">Learn Italian</h1>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="cursor-pointer">Home</Link>
          <Link to="/vocabulary" className="cursor-pointer">Vocabulary</Link>
          <Link to="/grammar" className="cursor-pointer">Grammar</Link>
          <Link to="/quiz" className="cursor-pointer">Quiz</Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 items-center py-4 bg-gray-100">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/vocabulary" onClick={() => setIsOpen(false)}>Vocabulary</Link>
          <Link to="/grammar" onClick={() => setIsOpen(false)}>Grammar</Link>
          <Link to="/quiz" onClick={() => setIsOpen(false)}>Quiz</Link>
        </nav>
      )}
    </header>
  );
}

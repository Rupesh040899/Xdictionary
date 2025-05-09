import { useEffect, useState } from "react";
import "./styles.css";
const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  {
    word: "Component",
    meaning: "A reusable building block in React.",
  },
  {
    word: "State",
    meaning: "An object that stores data for a component.",
  },
];

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const trimmed = searchInput.trim().toLowerCase();
    const found = data.find(
      (element) => element.word.toLowerCase() === trimmed
    );
    setSearchResult(found || null);
    setHasSearched(true);
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
        placeholder="Enter a word"
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <h3>Definition:</h3>

      {hasSearched ? (
        searchResult ? (
          <p>{searchResult.meaning}</p>
        ) : (
          <p>Word not found in the dictionary.</p>
        )
      ) : null}
    </div>
  );
}

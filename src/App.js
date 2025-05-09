import { useEffect, useState } from "react";
import "./styles.css";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [getData, setGetData] = useState([]);
  const [val, setVal] = useState(false);
  const handleChange = (e) => {
    //console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const found = data.find((element) => element.word === searchInput);
    //console.log(found);
    setGetData(found);
  }, [val]);

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={() => setVal(!val)}>
        Search
      </button>
      <h3>Definition:</h3>
      {searchInput ? (
        getData ? (
          <p>{getData.meaning}</p>
        ) : (
          <p>Word not found in the dictionary.</p>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

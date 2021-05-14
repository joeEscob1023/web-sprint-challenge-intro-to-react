import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./Constants/index";
//import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState("1");

  const openDetails = (index) => {
    setCurrentCharacterIndex(index);
  };

  const closeDetails = () => {
    setCurrentCharacterIndex(null);
  };

  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => {
        setCharacters(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((char, index) => {
        return <Character key={index} character={char} action={openDetails} />;
      })}
      {/* {currentCharacterIndex && (
        <Character
          characterIndex={currentCharacterIndex}
          close={closeDetails}
        />
      )} */}
    </div>
  );
};

export default App;

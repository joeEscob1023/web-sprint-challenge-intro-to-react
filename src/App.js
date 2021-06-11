import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./Constants/index";
//import "./App.css";
import Character from "./components/Character";
import Details from "./components/Details";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  /*
    I spent nearly the entire time thinking we were doing our sprint like how we did our guided project the last two days. I thought we had to some how create our own id, because this API didn't have one and I couldn't figure out how to setCurrentId so I could select the right character on the page and show their info.
  */

  const [characters, setCharacters] = useState([]);
  const [currentCharIndex, setCurrentCharIndex] = useState("0");

  const openDetails = (idx) => {
    setCurrentCharIndex(idx);
  };

  const closeDetails = () => {
    setCurrentCharIndex(null);
  };

  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((char, index) => {
        console.log(char);
        return (
          <Character
            key={index}
            character={char}
            action={openDetails}
            idx={index}
          />
        );
      })}
      {currentCharIndex && (
        <Details charIndex={currentCharIndex} close={closeDetails} />
      )}
    </div>
  );
};

export default App;

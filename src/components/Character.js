// Write your Character component here
import React from "react";
import styled from "styled-components";
import Details from "./Details";

const StyledContainer = styled.div`
  background-color: black;
  color: white;
  opacity: 0.5;
  width: 33%;
`;

const StyledH1 = styled.h1`
  margin: 2%;
  padding: 2%;
`;

const toggle = (e) => {
  // if (e.target.value === "info") {
  //   console.log(e.target.value);
  // }
};

const Character = ({ character, index }) => {
  return (
    <StyledContainer>
      <StyledH1>
        {character.name} <img src={character.url} alt={character.name} />
      </StyledH1>
      <div className="info">
        <p>Height is: {character.height}</p>
        <p>Mass is: {character.mass}</p>
        <p>Hair Color is: {character.hair_color}</p>
        <p>Skin Color is: {character.skin_color}</p>
        <p>Birth Year is {character.birth_year}</p>
        <p>Their gender is: {character.gender}</p>
        <p>
          Home world is: <img src={character.homeworld} alt="home world" />
        </p>
        <p>They've been in {" " + character.films}</p>
        <a href={character.species}>
          <p>Species</p>
        </a>
        <a href={character.starships}>
          <p>Star Ships</p>
        </a>
        <a href={character.vehicles}>
          <p>Vehicles</p>
        </a>
      </div>
      <button onClick={(e) => toggle()}>See details</button>
    </StyledContainer>
  );
};

export default Character;

// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: black;
  color: white;
  opacity: 0.5;
  width: 33%;
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  margin: 2%;
  padding: 2%;
`;

const Character = ({ character }) => {
  return (
    <StyledContainer>
      <StyledH1>{character.name}</StyledH1>
    </StyledContainer>
  );
};

export default Character;

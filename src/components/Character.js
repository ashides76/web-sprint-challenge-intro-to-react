// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: #443e3e;

  p{
    color: ${props => props.theme.black}
  }
  
  .container {
    display: flex;
    flex-direction: column;
  } 

  .card {
    border: 1px solid white;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
  }
`    

const Characters = (props) => {
    const {character} = props
    return (
        <StyledCharacter>
            <div className="container">
              <div className="card">
                <h2>{character.name}</h2> 
                <p>Gender: {character.gender}</p> 
                <p>Birth Year: {character.birth_year}</p> 
                <p>Hair Color: {character.hair_color}</p> 
                <p>Hair Color: {character.eye_color}</p> 
              </div>
            </div>
        </StyledCharacter>
)}

export default Characters;
import axios from "axios";
import React, { useState, useEffect } from "react";

export function MatchPage(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches(setMatches);
  }, []);
  console.log(matches);

  const getMatches = async (setMatches) => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Leandro/matches"
      );
      setMatches(response.data.matches);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => props.trocaTela}>Home</button>
      {matches.map((match) => (
        <ul>
          <img src={match.photo} alt="fotos perfil" />
          {match.name}
        </ul>
      ))}
    </div>
  );
}

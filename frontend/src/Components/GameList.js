import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/Game")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="game-list">
      <div>
      <h2>Games Available!</h2>
      </div>
      
      <ul>
        
        {games.map((game) => (
          <li key={game._id}>
            <strong>ID:</strong> {game._id}<br />
            <strong>Title:</strong> {game.GameTitle}<br />
            <strong>Genre:</strong> {game.GameGenre}<br />
            <strong>RAM:</strong> {game.RAM}<br />
            <strong>GPU:</strong> {game.GPU}<br />
            <strong>ROM:</strong> {game.ROM}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

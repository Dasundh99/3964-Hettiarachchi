
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/Game")
      .then((response) => {
        // Use slice to get only the first 5 games
        setGames(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="game-list">
      <h2>
        Unleash Your Gaming Skills! Your Ultimate Destination for Cutting-Edge Games
      </h2>
      <h3>Top 4 Games Today!</h3>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
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

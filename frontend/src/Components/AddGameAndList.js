import React from "react";
import AddGame from "./AddGame"; // Assuming AddGame is in a separate file
import GameList from "./GameList"; // Assuming GameList is in a separate file
import '../styles.css'; // Import your CSS styles

export default function AddGameAndList() {
  return (
    <div className="combined-page">
      <div className="left-component">
        <AddGame />
      </div>
      <div className="right-component">
        <GameList />
      </div>
    </div>
  );
}


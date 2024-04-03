import React, { useState } from "react";
import axios from "axios";

export default function DeleteGame() {
  const [gameId, setGameId] = useState("");

  function deleteGame(e) {
    e.preventDefault();

    axios
      .delete(`http://localhost:8070/Game/delete/${gameId}`)
      .then(() => {
        alert("Game Deleted");
        setGameId("");
        window.location.reload()
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={deleteGame}>
        <div className="mb-3">

          <input
            type="text"
            className="form-control"
            placeholder="Game ID"
            onChange={(e) => {
              setGameId(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
  );
}

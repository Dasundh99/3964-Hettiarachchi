import React, { useState } from "react";
import axios from "axios";

export default function UpdateGame() {
  const [GameTitle, setGameTitle] = useState("");
  const [GameGenre, setGameGenre] = useState("");
  const [RAM, setRAM] = useState("");
  const [GPU, setGPU] = useState("");
  const [ROM, setROM] = useState("");
  const [gameId, setGameId] = useState(""); // Add a state variable to store the game ID you want to update

  function updateData(e) {
    e.preventDefault();

    const updatedGame = {
      GameTitle,
      GameGenre,
      RAM,
      GPU,
      ROM
    };

    axios
      .put(`http://localhost:8070/Game/update/${gameId}`, updatedGame) // Use the correct API endpoint with the game ID
      .then((response) => {
        alert("Game Updated");
        setGameTitle("");
        setGameGenre("");
        setRAM("");
        setGPU("");
        setROM("");
        setGameId("");
        window.location.reload()
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      
      
      <form onSubmit={updateData}>
      
        <div className="mb-3">
    
          <input

            type="text"
            placeholder="Game ID"
            className="form-control"
            onChange={(e) => {
              setGameId(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
     
          <input
            type="text"
            placeholder="Game Title"
            className="form-control"
            onChange={(e) => {
              setGameTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
    
          <input
            type="text"
            placeholder="Game Genre"
            className="form-control"
            onChange={(e) => {
              setGameGenre(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
    
          <input
            type="text"
            placeholder="RAM"
            className="form-control"
            onChange={(e) => {
              setRAM(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
      
          <input
            type="text"
            className="form-control"
            placeholder="GPU"
            onChange={(e) => {
              setGPU(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">

          <input

            type="text"
            placeholder="ROM"
            className="form-control"
            onChange={(e) => {
              setROM(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

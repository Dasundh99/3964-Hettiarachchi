import '../styles.css';
import React, { useState } from "react";
import axios from "axios";

export default function AddGame() {
  const [GameTitle, setGameTitle] = useState("");
  const [GameGenre, setGameGenre] = useState("");
  const [RAM, setRAM] = useState("");
  const [GPU, setGPU] = useState("");
  const [ROM, setROM] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newGame = {
      GameTitle,
      GameGenre,
      RAM,
      GPU,
      ROM
    };

    axios
      .post("http://localhost:8070/Game/add", newGame)
      .then(() => {
        alert("Game Added");
        setGameTitle("");
        setGameGenre("");
        setRAM("");
        setGPU("");
        setROM("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="GameTitle" className="form-label">
            Game Title
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setGameTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="GameGenre" className="form-label">
            Game Genre
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setGameGenre(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="RAM" className="form-label">
            RAM
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setRAM(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="GPU" className="form-label">
            GPU
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setGPU(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ROM" className="form-label">
            ROM
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setROM(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

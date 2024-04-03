import React from "react";
import AddGame from "./AddGame"; 
import GameList from "./GameList"; 
import '../styles.css';
import { useNavigate } from 'react-router-dom';

export default function AddGameAndList() {
  const navigate = useNavigate();


  const ToEditContent = () => {
    navigate('/editcontent');
  };

  return (
    <div className="combined-page">
      <div className="left-component">
        <AddGame />
      </div>
      <div className="right-component">
        <GameList />
      </div>
      <div>
      <button onClick={ToEditContent}>To Delete and Update</button>
      </div>
    </div>
  );
}

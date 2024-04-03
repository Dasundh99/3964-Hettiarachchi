import React from "react";
import UpdateGame from "./UpdateGame";
import DeleteGame from "./DeleteGame";
import '../styles.css'; 
import GameList from "./GameList";
import { useNavigate } from 'react-router-dom';

export default function EditContent() {
  const navigate = useNavigate();



  const ToAddGame = () => {
    navigate('/addgame');
  };
  return (
    <div className="editcontent">
      <div className="left-up-coner-component">
        <UpdateGame />
      </div>
      <div className="right-down-coner-componet">
        <DeleteGame />
      </div>
      <div className="right-component">
        <GameList />
      </div>
      <div>
      <button onClick={ToAddGame}>To Add Game</button>
      </div>

    </div>
  );
}
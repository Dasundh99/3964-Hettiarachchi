import React from "react";
import '../App.css';
import '../home.css';

export default function Home() {
  return (
    <div className="home-background">
      <div className="imageContainer">
        <div className="image imageOne"></div>
        {/* <div className="image imageTwo"></div>
        <div className="image imageThree"></div>
        <div className="image imageFour"></div> */}
        <div className="discoverNext">
          <h1>Explore the Gaming Universe!</h1>
        </div>

        <div className="horizontalMove">
          <div className="image imagefive"></div>
          <div className="image imagesix"></div>
          <div className="image imageseven"></div>
          <div className="image imageeight"></div>
          <div className="image imagenine"></div>
        </div>
      </div>
    </div>
  );
}

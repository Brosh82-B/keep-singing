import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ image,text,songName,songLink,Title,Poster }) {
  const [show, setShown] = useState(false);

  return (
    <div className="card">
      <img src={image} alt="jhjk" />
      <h2 style={{marginTop:"1rem"}}>{Title}</h2>
      <p>{text}</p>
      <button className="song-button" onClick={()=>{window.open(songLink)}}>{songName}</button>
      <p>{Poster}</p>

    </div>
  );
}

export default Card;

import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ image,text,songName,songLink,Poster }) {
  return (
    <div className="card">
      <img src={image} alt="no image" />
      <p style={{direction:"rtl"}}>{text}</p>
      <button className="song-button" onClick={()=>{window.open(songLink)}}>{songName}</button>
      <p>{Poster}</p>

    </div>
  );
}

export default Card;

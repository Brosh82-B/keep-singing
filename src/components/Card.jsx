import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ image,text,songName,songLink }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
      textAlign:"center"
  });
  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={image} alt="" />
      <h2 style={{marginTop:"1rem"}}>{text}</h2>
        <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
        <button className="song-button" onClick={()=>{window.open(songLink)}}>{songName}</button>
        <p>מתן ארד</p>

    </animated.div>
  );
}

export default Card;

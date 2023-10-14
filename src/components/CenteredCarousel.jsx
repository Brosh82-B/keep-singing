import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Loading from './Loading/Loading'

function CenteredCarousel (props) {
  const [cardsList, setCardsList] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (cardsList.length > 0) {
        setLoading(false);
      }
    }, [cardsList]);

    useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxGP3KCZSJnPGV6Od6yb_cxs1Nd6KdSC6jtX4t36jwx6r1iCJgU9QTOAr9PRHaES8Qe/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        let tempList = [];
        data.forEach((element) => {
          tempList.push( <Card
          key={uuidv4()}
            element={element}
            image={element.Image}
            text={element.Text}
            songName={element["Song Name"]}
            songLink={element["Song Link"]}
            Poster={element.Poster}
          />);
        });
        setCardsList(tempList.reverse());
      });
  }, []);

  let settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    loading?<Loading/>:<Slider {...settings}>
    {cardsList.map((element)=>{
      return element
    })}
  </Slider>
        
  );
};

export default CenteredCarousel;

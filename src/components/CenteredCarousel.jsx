import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import { useState } from 'react';
const CenteredCarousel = (props) => {
    const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxarKoxOW1GBMVZV5Fu9NtLorAcpcNaFSGRgNV5_j3friPb5MyK9JZ9OPJ7E7524yO8/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        let tempList = [];
        data.forEach((element) => {
          let tempContent = 
            <Card
              image={element.Image}
              text={element.Text}
              songName={element["Song Name"]}
              songLink={element["Song Link"]}
              Title={element.Title}
              Poster={element.Poster}
            />
          
          tempList.push(tempContent);
        });
        setCardsList(tempList);
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
        <Slider {...settings}>
          {cardsList.map((element)=>{
            return element
          })}
        </Slider>
  );
};

export default CenteredCarousel;

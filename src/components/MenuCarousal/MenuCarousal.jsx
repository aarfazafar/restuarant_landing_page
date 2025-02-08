import React, {useEffect} from "react";
import "./menuCarousal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MenuCarousal = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    adaptiveHeight: true,
    arrows: true,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  
  return (
    <div className="m-container">
      <Slider {...settings}>
        {data.map((d) => {
          return (
            <div className="menu-card">
              <div className="card">
                <div className="food-image">
                  <img src={d.image} alt="" />
                </div>
                <h1 className="food-title">{d.name}</h1>
                <p className="food-des">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Modi, vero. Neque autem cupiditate aperiam iusto.
                </p>
                <button className="custom__button">Know More</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MenuCarousal;

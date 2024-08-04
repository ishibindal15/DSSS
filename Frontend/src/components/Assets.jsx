import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../list.json";
import Cards from "./Cards";

function Assets() {
  
  const asset = list.data.filter((data) => data.category === "Furniture");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div>
      <h1 className="font-bold text-xl pb-2">Assets</h1>
      <p>Assets total in the range</p>
      </div>

    <div>
     <Slider {...settings}> 
       {asset.map((item) => {
        return(
          <Cards item={item} key={item.id} />
        )
       })}
     </Slider> 
    </div>

    </div>
   </>
  )
}

export default Assets

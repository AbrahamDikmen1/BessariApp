import React from "react";
import Item from "./Item";
import Carousel from "react-material-ui-carousel";
import Alan from "../../assets/Alan.jpg";
const CarouselLandingPage = () => {
  var items = [
    {
      image: Alan,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselLandingPage;

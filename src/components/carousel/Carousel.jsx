// CarouselComponent.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/800/400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/800/401"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placekitten.com/800/402"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

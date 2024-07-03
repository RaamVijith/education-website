import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      showArrows={true}
    >
      <div className="slide">
         <img src="https://www.openaccessgovernment.org/wp-content/uploads/2021/01/dreamstime_l_168577248.jpg" alt="Slide 1" />
        <div className="overlay">
          <h2>NEW Course</h2>
          <h1>Coutse template text</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
      <div className="slide">
      <img src="https://www.openaccessgovernment.org/wp-content/uploads/2021/01/dreamstime_l_168577248.jpg" alt="Slide 1" />
        <div className="overlay">
          <h2>NEW Course</h2>
          <h1>Coutse template text</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
      <div className="slide">
      <img src="https://www.openaccessgovernment.org/wp-content/uploads/2021/01/dreamstime_l_168577248.jpg" alt="Slide 1" />
        <div className="overlay">
          <h2>NEW Course</h2>
          <h1>Coutse template text</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;

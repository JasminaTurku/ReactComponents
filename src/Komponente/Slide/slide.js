import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import "./slide.css";
function Slider() {
  return (
    <Carousel className="main-slide">
      <div className="carousel carousel-slider">
        <img src={img1} />
      </div>
      <div className="carousel carousel-slider">
        <img src={img2} />
      </div>
      <div className="carousel carousel-slider">
        <img src={img3} />
      </div>
    </Carousel>
  );
}
export default Slider;

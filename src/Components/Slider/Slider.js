import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import { Container } from "react-bootstrap";

import Slider from "react-slick";

import img1 from "../../imgs/sliderImages/slide-show1.jpg";
import img2 from "../../imgs/sliderImages/slide-show2.jpg";
import img3 from "../../imgs/sliderImages/slide-show3.jpg";

const slickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={img1} height="600px" width="100%" />
        </div>
        <div>
          <img src={img2} height="600px" width="100%" />
        </div>
        <div>
          <img src={img3} height="600px" width="100%" />
        </div>
      </Slider>
    </>
  );
};

export default slickSlider;

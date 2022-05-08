import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Brands.css";

const Brands = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <section className=" brand-section text-center  py-5">
      <Container>
        <h2 className=" mb-3">Brans</h2>
        <Slider {...settings}>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/3.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/2.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/4.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/1.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/4.png"
              height="200px"
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Brands;

import React from "react";
import { Container } from "react-bootstrap";
import Brands from "../../Components/Brands/Brands";
import InventoryItems from "../../Components/InventoryItems/InventoryItems";
import Slider from "../../Components/Slider/Slider";
import aboutImg from "../../imgs/about-img.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider />
      <main>
        {/* items */}
        <div className=" about-section mt-5 py-5">
          <Container>
            <div class="row align-items-center">
              <div className="col col-sm-12 col-md-6 col-lg-6">
                <img src={aboutImg} alt="" width="100%" />
              </div>

              <div className="col col-sm-12 col-md-6 col-lg-6">
                <h2>
                  At Warehouse, we provide a unique solution for warehousing
                  space for business and consumers
                </h2>

                <p>
                  The definition of a warehouse is a place where goods are
                  stored. An example of a warehouse is a place where furniture
                  is kept for a furniture company.
                </p>
                <p>
                  DEPOSITO is one of the leading warehouse service provider in
                  the world! From the 18th of century it has a great frame in
                  all over the world! Basically, we kept electronic products
                  such as TV, Fridge, AC, Mobile, Laptop, Tablet etc. From the
                  starting of our warehouse journey we never get an objection
                  from our customer about product. We ensure the best security
                  for our cusomets product!
                </p>
                <button className="btn btn-danger">Read more</button>
              </div>
            </div>
          </Container>
        </div>
        <InventoryItems />
        <Brands />
      </main>
    </div>
  );
};

export default Home;

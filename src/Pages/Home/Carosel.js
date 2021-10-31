import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Home.css";
const Carosel = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="./images/bd.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Let us plan your trip</h3>
            <p>
              We have set tour program /packages and we also customize tour
              packages according to your choice. Start From{" "}
              <span className="text-warning">2500 BDT</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="./images/Bichana-Kandi-Sylhet.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Bichana Kandi Sylhet</h3>
            <p>
              Let us plan your trip. We have set tour program /packages and we
              also customize tour packages according to your choice. Start From{" "}
              <span className="text-warning">3500 BDT</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img"
            src="./images/mehedi-hasan-11-1537039027134.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>RATARGUL Sylhet</h3>
            <p>
              Let us plan your trip. We have set tour program /packages and we
              also customize tour packages according to your choice. Start From{" "}
              <span className="text-warning">5500 BDT</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carosel;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Highprofit.css'; // Assuming you create a CSS file for custom styles

export const Highprofit = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="image1.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="image2.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="image3.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

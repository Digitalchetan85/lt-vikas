import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/amenities/cricket.png";
import Image2 from "../../images/amenities/garden.png";
import Image3 from "../../images/amenities/party-lawn.png";
import Image4 from "../../images/amenities/playground.png";
import Image5 from "../../images/amenities/pets.png";
import Image6 from "../../images/amenities/club.png";
import Image7 from "../../images/amenities/swimmer.png";
import Image8 from "../../images/amenities/exercise.png";
import Image9 from "../../images/amenities/tennis-court.png";

const Amenities = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", title:"Cricket Nets"},
    { id: 2, imgName: Image2, alt: "", title:"Zen Garden"},
    { id: 3, imgName: Image3, alt: "", title:"Party Lawn"},
    { id: 4, imgName: Image4, alt: "", title:"Play Area"},
    { id: 5, imgName: Image5, alt: "", title:"Pet Park"},
    { id: 6, imgName: Image6, alt: "", title:"Clubhouse"},
    { id: 7, imgName: Image7, alt: "", title:"Swimming Pool"},
    { id: 8, imgName: Image8, alt: "", title:"Gymnasium"},
    { id: 9, imgName: Image9, alt: "", title:"Tennis Court"},
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div id="gallery" className="py-3 py-md-5">
      <Container>
        <h2 className="text-primary text-center py-3 text-uppercase">
          Amenities
        </h2>
        <Row className="g-3 justify-content-center">
          <OwlCarousel options={options}>
            {images.map((item) => (
              <Col md={12} xs={6} sm={6} key={item.id}>
                <div className="mx-2 p-5 border rounded text-center">
                  <div className="text-center">
                    <Image
                      src={item.imgName}
                      alt=""
                      className="img-fluid border border-danger rounded-circle p-2"
                    />
                    <p className="text-center fw-bold">{item.title}</p>
                  </div>
                </div>
              </Col>
            ))}
          </OwlCarousel>
        </Row>
      </Container>
    </div>
  );
};

export default Amenities;

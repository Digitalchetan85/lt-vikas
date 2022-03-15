import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/gallery/1.png";
import Image2 from "../../images/gallery/2.png";
import Image3 from "../../images/gallery/3.png";
import Image4 from "../../images/gallery/4.png";
import Image5 from "../../images/gallery/5.png";
import Image6 from "../../images/gallery/6.png";
import Image7 from "../../images/gallery/7.png";

const Gallery = () => {
  const images = [
    { id: 1, imgName: Image1, alt: ""},
    { id: 2, imgName: Image2, alt: ""},
    { id: 3, imgName: Image3, alt: ""},
    { id: 4, imgName: Image4, alt: ""},
    { id: 5, imgName: Image5, alt: ""},
    { id: 6, imgName: Image6, alt: ""},
    { id: 7, imgName: Image7, alt: ""},
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
        items: 3,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div id="gallery" className="py-3 py-md-5">
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <h2 className="text-primary text-center py-3 text-uppercase">
              Gallery
            </h2>
            <Row className="g-3 justify-content-center">
              <OwlCarousel options={options}>
                {images.map((item) => (
                  <Col md={12} xs={6} sm={6} key={item.id}>
                    <div className="m-1 text-center border border-danger p-1 rounded">
                      <a href={item.imgName}>
                        <Image
                          src={item.imgName}
                          alt={item.alt}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </Col>
                ))}
              </OwlCarousel>
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default Gallery;

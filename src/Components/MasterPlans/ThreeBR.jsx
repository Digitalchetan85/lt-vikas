import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image5 from "../../images/master-plans/typical/1.png";
import Image6 from "../../images/master-plans/typical/2.png";
import Image7 from "../../images/master-plans/typical/3.png";
import Image8 from "../../images/master-plans/typical/4.png";
import Image9 from "../../images/master-plans/typical/6.png";

const ThreeBR = () => {
  const images = [
    { id: 5, imgName: Image5, alt: "", tag: "3BHK Supreria" },
    { id: 6, imgName: Image6, alt: "", tag: "3BHK Luxuria" },
    { id: 7, imgName: Image7, alt: "", tag: "3BHK Regalia - 1" },
    { id: 8, imgName: Image8, alt: "", tag: "3BHK Regalia - 2" },
    { id: 9, imgName: Image9, alt: "", tag: "3BHK Regalia - 1 with Private Terrace" },
  ];
  return (
    <div>
      <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={4} xs={6} sm={6} key={item.id}>
                  <div className="m-1 text-center border border-dark p-1 rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <h6 className="text-center"> {item.tag} </h6>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
    </div>
  );
};

export default ThreeBR;

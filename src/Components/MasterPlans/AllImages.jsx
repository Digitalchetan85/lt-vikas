import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/master-plans/master-plan.png";
import Image2 from "../../images/master-plans/typical/8.png";
import Image3 from "../../images/master-plans/typical/9.png";
import Image4 from "../../images/master-plans/typical/10.png";
import Image5 from "../../images/master-plans/typical/1.png";
import Image6 from "../../images/master-plans/typical/2.png";
import Image7 from "../../images/master-plans/typical/3.png";
import Image8 from "../../images/master-plans/typical/4.png";
import Image9 from "../../images/master-plans/typical/6.png";
import Image10 from "../../images/master-plans/typical/5.png";
import Image11 from "../../images/master-plans/typical/7.png";

const AllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Site Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Tower - 28" },
    { id: 3, imgName: Image3, alt: "", tag: "Tower - 29" },
    { id: 4, imgName: Image4, alt: "", tag: "Tower - 30" },
    { id: 5, imgName: Image5, alt: "", tag: "3BHK Supreria" },
    { id: 6, imgName: Image6, alt: "", tag: "3BHK Luxuria" },
    { id: 7, imgName: Image7, alt: "", tag: "3BHK Regalia - 1" },
    { id: 8, imgName: Image8, alt: "", tag: "3BHK Regalia - 2" },
    { id: 9, imgName: Image9, alt: "", tag: "3BHK Regalia - 1 with Private Terrace" },
    { id: 10, imgName: Image10, alt: "", tag: "4BHK Regalia - 1" },
    { id: 11, imgName: Image11, alt: "", tag: "4BHK Regalia - 1 with Private Terrace" },
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

export default AllImages;

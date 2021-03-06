import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/master-plans/master-plan.png";

const SitPlan = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Site Plan" },
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

export default SitPlan;

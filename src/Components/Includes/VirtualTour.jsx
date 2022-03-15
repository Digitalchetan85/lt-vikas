import React from "react";
import { Col, Container, Ratio, Row } from "react-bootstrap";

const VirtualTour = () => {
  return (
    <div id="virtual-tour" className="py-3 py-md-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="">
              <Ratio aspectRatio="16x9">
                <embed
                  type="image/svg+xml"
                  src="https://lntreality.blob.core.windows.net/website-data/360new/RTB/sampleflat/index.html"
                />
              </Ratio>
            </div>
          </Col>
          <Col md={6}>
            <div className="">
              <Ratio aspectRatio="16x9">
                <embed
                  type="image/svg+xml"
                  src="https://lntreality.blob.core.windows.net/website-data/360new/RTB/clubhouse/index.html"
                />
              </Ratio>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VirtualTour;

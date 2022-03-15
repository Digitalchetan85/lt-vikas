import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Modals from "./MainModal";

const Overview = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div id="overview" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="line position-relative text-center">
              <h2 className="text-uppercase pb-2 text-primary">
                ABOUT L&T RainTree Boulevard
              </h2>
              <span className="bg-danger position-absolute start-50 span-line"></span>
            </div>
            <div className="text-center">
              <p>
                Raintree Boulevard is a 65-acre mixed-use residential project
                which is located in the serene terrain of Hebbal, Bangalore. A
                10-lane road (NH-7/AH43) nearby provides excellent connectivity
                to the city. Being in close vicinity to well-established social
                and civic infrastructure, including leading educational
                institutions, hospitals, ATMs, banks, restaurants and the KIAL
                Airport makes this residential property a perfect investment
                avenue..
              </p>
              <p>
                A second opportunity of being a part of the L&T Realty family
                knocks at your door. We are delighted to announce the grand
                launch of the second phase of Raintree Boulevard in Hebbal,
                Bangalore. A masterpiece in luxurious apartments integrated with
                offices and shopping mall to create a lifestyle destination in
                achieving the “Live Work Play” concept .
              </p>
              <div className="text-center mt-4 mb-4">
              <Button
                  onClick={handleShow}
                  className="btn btn-danger text-light"
                >
                  Read More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
      />
    </div>
  );
};

export default Overview;

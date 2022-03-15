import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Logo from "../../images/logo.png";
import VirtualTour from "../../images/360.png";
import Modals from "./MainModal";

const TopHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top" id="navbar">
      <div id="top-header" className="p-2 bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={4}
              className="d-none d-md-block text-light align-self-center"
            >
              <i className="fa fa-map-marker-alt text-white"></i> Hebbal, Bengaluru.
            </Col>
            <Col md={4} xs={5} className="align-self-center">
              <div className="text-center">
                <Button
                  onClick={handleShow}
                  className="btn-sm btn-danger text-light"
                >
                  <i className="fa fa-spinner fa-flip fa-download text-light"></i>{" "}
                  Brochure
                </Button>
              </div>
            </Col>
            <Col md={4} xs={7} className="align-self-center">
              <div className="text-center text-md-end">
                <a
                  href="tel:09738269105"
                  className="btn-sm btn-danger text-decoration-none text-light"
                >
                  <i className="fa fa-phone-volume"></i> +91-97382 69105
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm bg-white text-primary"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo} className="img-fluid" alt="" />
          </Navbar.Brand>
          {/* <Nav.Link
            className="btn-sm btn-danger text-white d-block d-md-none px-3 border-0"
            href ="tel:080959 99000 "
          >
            <i className="fa fa-phone-volume"></i> 80959 99000
          </Nav.Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="#overview">
                Overview
              </Nav.Link>
              <Nav.Link href="#amenities">
                Amenities
              </Nav.Link>
              <Nav.Link href="#master-plan">
                Master Plan
              </Nav.Link>
              <Nav.Link href="#pricing">
                Pricing
              </Nav.Link>
              <Nav.Link href="#gallery">
                Gallery
              </Nav.Link>
              <Nav.Link href="#about-developer">
                About Developer
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href ="#virtual-tour"
              >
                <Image src={VirtualTour} className="img-fluid" alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
      />
    </div>
  );
};

export default TopHeader;

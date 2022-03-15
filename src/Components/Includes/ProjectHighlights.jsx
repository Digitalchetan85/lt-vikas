import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../images/slider/11.png";

const ProjectHighlights = () => {
  return (
    <div id="second-section" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-center pb-3 text-uppercase">
            Project Highlights
          </h2>
          <Col md={6} className="align-self-center order-1 order-md-0">
            <div className="text-center">
              <Image src={banner} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={6} className="align-self-center">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td scope="row">Project Status:</td>
                  <th className="text-end">Ongoing</th>
                </tr>
                <tr>
                  <td scope="row">Project Location:</td>
                  <th className="text-end">Hebbal, Bengaluru. </th>
                </tr>
                <tr>
                  <td scope="row">Total Land Area:</td>
                  <th className="text-end">65 acres </th>
                </tr>
                <tr>
                  <td scope="row">Residential Area:</td>
                  <th className="text-end">30 acres </th>
                </tr>
                <tr>
                  <td scope="row">Commercial(Tech, SEZ & Park):</td>
                  <th className="text-end">4.6 Million Sq. Ft.</th>
                </tr>
                <tr>
                  <td scope="row">Unit Variants:</td>
                  <th className="text-end">3 & 4BHK </th>
                </tr>
                <tr>
                  <td scope="row">No. of Units in Phase 1:</td>
                  <th className="text-end">1019 </th>
                </tr>
                <tr>
                  <td scope="row">No. of Units in Phase 2:</td>
                  <th className="text-end">657 </th>
                </tr>
                <tr>
                  <td scope="row">No. of Units in Phase 3:</td>
                  <th className="text-end">500+</th>
                </tr>
                <tr>
                  <td scope="row">Size Range:</td>
                  <th className="text-end">1335 - 2765 Sq. Ft. </th>
                </tr>
                <tr>
                  <td scope="row">Possession Phase I:</td>
                  <th className="text-end">Ready to Move</th>
                </tr>
                <tr>
                  <td scope="row">Possession Phase II:</td>
                  <th className="text-end">June 2024</th>
                </tr>
                <tr>
                  <td scope="row">Possession Phase III:</td>
                  <th className="text-end">March 2026</th>
                </tr>
                <tr>
                  <td scope="row">Tower Height:</td>
                  <th className="text-end">2B+G+14 </th>
                </tr>
                <tr>
                  <td scope="row">Starting Price:</td>
                  <th className="text-end">On Request </th>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectHighlights;

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import location from '../../images/map.png'

const Location = () => {
  return (
    <div id="location">
      <Container>
        <h2 className="text-primary text-center py-3 text-uppercase">Location</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="text-center">
              <Image src={location} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Location
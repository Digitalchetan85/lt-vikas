import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutDevelopers = () => {
  return (
    <div id="about-developer" className="py-3 bg-light">
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <div className="line position-relative text-center">
                        <h2 className="text-uppercase pb-2">About Developer</h2>
                        <span className="bg-danger position-absolute start-50 span-line"></span>
                    </div>
                    <div className="">
                        <p className="">
                            Larsen & Toubro is a major technology, engineering, construction, manufacturing and financial services conglomerate, with global operations. L&T addresses critical needs in key sectors - Hydrocarbon, Infrastructure, Power, Process Industries and Defence - for customers in over 30 countries around the world. Backed by rich experience of over 75 years in the construction industry, L&T has successfully forayed into the real-estate industry with its real-estate arm L&T Realty. Pursuing the philosophies of ethics, quality, assurance and diligence, L&T Realty has seen a sustained growth since its inception. It has redefined the real-estate industry in India with its transparent, customer-focused approach and continuous quest for world-class quality.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutDevelopers
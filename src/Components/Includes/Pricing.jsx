import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import Modals from "./MainModal";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(function () {
      setShow(true);
    }, 7000);
  }, []);

  return (
    <div id="pricing" className="bg-light">
      <Container className="ps-0 pe-0">
        <h2 className="text-primary text-center py-3 text-uppercase">
          Pricing
        </h2>
        {/* <Table
          responsive="sm"
          className="align-middle text-center border-transparent"
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>Unit Type</th>
              <th>Area (Sq.ft)</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                3 BHK <br /> (Supreria)
              </td>
              <td>1355</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  View Price
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                3 BHK <br /> (Luxuria){" "}
              </td>
              <td>1655</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  View Price
                </Button>
              </td>
            </tr>{" "}
            <tr>
              <td>
                3 BHK <br /> (Religia - 1){" "}
              </td>
              <td>1935</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  View Price
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                3 BHK <br /> (Religia - 2){" "}
              </td>
              <td>1925</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  View Price
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                3 BHK <br /> (Religia - 1) <br /> with Private Terrace
              </td>
              <td>1935</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  View Price
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                4 BHK <br /> (Religia - 1){" "}
              </td>
              <td>2765</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  View Price
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                4 BHK <br /> (Religia - 1) <br /> with Private Terrace{" "}
              </td>
              <td>2765</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  View Price
                </Button>
              </td>
            </tr>
          </tbody>
        </Table> */}
      </Container>

      <Container>
        <div className="row row-cols-1 row-cols-md-4 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">3BHK</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                1.33 Cr onwards
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Superia </li>
                  <li>1355 Sq.ft</li>
                  <li>934 Carpet Area</li>
                  <li> </li>
                </ul>
                <button
                  type="button"
                  className=" w-100 btn btn-lg btn-primary"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">3BHK</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                1.62 Cr onwards
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Luxuria</li>
                  <li>1655 Sq.ft</li>
                  <li>1134 Carpet Area</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">3BHK</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                1.89 Cr onwards
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Regalia</li>
                  <li>1935 Sq.ft</li>
                  <li>1345 Carpet Area</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">4BHK</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                2.74 Cr onwards
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Regalia</li>
                  <li>2765 Sq.ft</li>
                  <li>1861 Carpet Area</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
      />
    </div>
  );
};

export default Pricing;

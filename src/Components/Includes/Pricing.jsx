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
        <Table
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
              <td>3 BHK <br/> (Supreria)</td>
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
              <td>3 BHK <br/> (Luxuria)	</td>
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
              <td>3 BHK <br/> (Religia - 1)	</td>
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
              <td>3 BHK <br/> (Religia - 2)	</td>
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
              <td>3 BHK <br/> (Religia - 1) <br/>  with Private Terrace</td>
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
              <td>4 BHK <br/> (Religia - 1)	</td>
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
              <td>4 BHK <br/> (Religia - 1) <br/> with Private Terrace	</td>
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
        </Table>
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

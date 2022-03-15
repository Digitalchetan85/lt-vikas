import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/slider/1.png";
import Image2 from "../../images/slider/2.png";
import Image3 from "../../images/slider/3.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const MainSlider = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    id: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    const data = values;

    console.log(data);

    axios
      .get(
        "email.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone
      )
      .then(function (response) {
        console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };
  const associations = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
    },
    {
      id: 3,
      ImageUrl: Image3,
      alt: "",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div id="mainSlider">
      <OwlCarousel options={options}>
        {associations.map((item, index) => (
          <div key={index}>
            <Row>
              <Col md={12}>
                <div className="text-center">
                  <Image
                    src={item.ImageUrl}
                    alt={item.alt}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </OwlCarousel>

      <div className="slide-text d-flex position-absolute top-50 start-0 translate-middle-y bg-primary p-1 w-25">
        <div className="form rounded p-2 w-100">
          <div className="line position-relative position-">
            <p className="text-capitalize text-white pb-1">
              <strong>Enquire Now</strong>
            </p>
            <span className="bg-danger position-absolute span-line"></span>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="mb-3">
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </div>
              <div className="mb-3">
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
                <small className="text-danger">
                  <ErrorMessage name="email" />
                </small>
              </div>
              <div className="mb-3">
                <Field
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Contct No."
                />
                <small className="text-danger">
                  <ErrorMessage name="phone" />
                </small>
              </div>
              <Row className="">
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <div className="text-center mb-2">
                <button
                  className="btn btn-sm btn-danger w-100 text-uppercase"
                  onClick="sendPopContact();"
                  name="submit"
                  type="submit"
                >
                  Get Instant Call Back
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;

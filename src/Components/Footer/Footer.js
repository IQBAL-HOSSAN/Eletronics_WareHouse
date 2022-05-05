import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaLocationArrow,
  FaChevronRight,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";

const Footer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer id="footer">
      {/* footer-top */}
      <div className="footer-top py-5 text-white">
        <Container>
          <Row xs={1} sm={2} md={2} lg={4}>
            <Col className="mb-4  mb-lg-0">
              <div className="mb-2">
                <h3>
                  <i>AutMotors</i>
                </h3>
              </div>
              <div className=" under-line mb-3 bg-danger w-50"></div>
              <div className="text-white">
                {" "}
                <li>
                  <FaPhoneAlt></FaPhoneAlt> +880-018455-55047
                </li>
                <li className="my-2">
                  <FaEnvelopeOpen></FaEnvelopeOpen> engiqbal1999@gmail.com
                </li>
                <li>
                  <FaLocationArrow></FaLocationArrow> Begumganj, Noakhali.
                </li>
              </div>
            </Col>
            <Col className="mb-4  mb-lg-0">
              <h3 className="mb-2">Quick Link</h3>
              <div className=" under-line mb-3 bg-danger w-25"></div>
              <Link
                className="text-decoration-none text-white d-block mb-1"
                to="/"
              >
                <FaChevronRight></FaChevronRight> Home
              </Link>
              <Link
                className="text-decoration-none text-white d-block mb-1"
                to="/services"
              >
                <FaChevronRight></FaChevronRight> Services
              </Link>
              <Link
                className="text-decoration-none text-white d-block mb-1"
                to="/blog"
              >
                <FaChevronRight></FaChevronRight> Blog
              </Link>
              <Link
                className="text-decoration-none text-white d-block mb-1"
                to="/login"
              >
                <FaChevronRight></FaChevronRight> Login
              </Link>
              <Link
                className="text-decoration-none text-white d-bock mb-1"
                to="/signup"
              >
                <FaChevronRight></FaChevronRight> Sign Up
              </Link>
            </Col>
            <Col className="mb-4 mb-sm-0 mb-md-0 mb-lg-0">
              <h3 className="mb-2">Service Areas</h3>
              <div className=" under-line mb-3 bg-danger w-25"></div>
              <li className="mb-1">
                <Link
                  className="text-decoration-none text-white "
                  to="/practice-areas-list"
                >
                  <FaChevronRight></FaChevronRight> Practice Areas List
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-decoration-none text-white "
                  to="/practice-areas-details"
                >
                  <FaChevronRight></FaChevronRight> Practice Areas Detail
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-decoration-none text-white "
                  to="/attorney-list"
                >
                  <FaChevronRight></FaChevronRight> Attorney List
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-decoration-none text-white "
                  to="/attorney-details"
                >
                  <FaChevronRight></FaChevronRight> Attorney Detail
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="text-decoration-none text-white "
                  to="/f-a-q-s"
                >
                  <FaChevronRight></FaChevronRight> FAQs
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-decoration-none text-white "
                  to="/testimonials"
                >
                  <FaChevronRight></FaChevronRight> Testimonials
                </Link>
              </li>
            </Col>
            <Col>
              <h3 className="mb-2">Opening Hours</h3>
              <div className=" under-line mb-3 bg-danger w-25"></div>
              <p>Mon to Fri: 09:30AM to 05:30PM</p>
              <p className="border-top border-bottom border-secondary py-1">
                <span>Sun:</span> <span>Closed</span>
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex ">
                  <input
                    className="mb-0"
                    placeholder="Enter you email"
                    {...register("firstName")}
                  />
                  <button className="bg-danger mb-0">
                    <MdEmail className="text-white fs-3"></MdEmail>
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom py-3 text-secondary">
        <Container>
          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <Col className="mb-2 mb-md-0 text-center text-md-start">
              Copyright © 2022 AutoMotors. All Rights Reserved
            </Col>
            <Col className=" text-center text-md-end text-lg-end text-xl-end ">
              Design & Development By: Iqbal Hossan
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

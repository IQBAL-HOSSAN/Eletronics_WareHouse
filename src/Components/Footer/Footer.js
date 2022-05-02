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

const Footer = () => {
  return (
    <footer id="footer" className="py-5 bg-black text-light">
      <Container>
        <Row>
          <Col>
            <div className="mb-2">
              <h3>
                <i>Lawyer Iqbal</i>
              </h3>
            </div>
            <div className=" under-line mb-3 bg-danger w-50"></div>
            <div className="text-secondary">
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
          <Col>
            <h3 className="mb-2">Quick Link</h3>
            <div className=" under-line mb-3 bg-danger w-25"></div>
            <Link
              className="text-decoration-none text-secondary d-block mb-1"
              to="/"
            >
              <FaChevronRight></FaChevronRight> Home
            </Link>
            <Link
              className="text-decoration-none text-secondary d-block mb-1"
              to="/services"
            >
              <FaChevronRight></FaChevronRight> Services
            </Link>
            <Link
              className="text-decoration-none text-secondary d-block mb-1"
              to="/blog"
            >
              <FaChevronRight></FaChevronRight> Blog
            </Link>
            <Link
              className="text-decoration-none text-secondary d-block mb-1"
              to="/login"
            >
              <FaChevronRight></FaChevronRight> Login
            </Link>
            <Link
              className="text-decoration-none text-secondary d-bock mb-1"
              to="/signup"
            >
              <FaChevronRight></FaChevronRight> Sign Up
            </Link>
          </Col>
          <Col>
            <h3 className="mb-2">Lawyer Area</h3>
            <div className=" under-line mb-3 bg-danger w-25"></div>
            <li className="mb-1">
              <Link
                className="text-decoration-none text-secondary "
                to="/practice-areas-list"
              >
                <FaChevronRight></FaChevronRight> Practice Areas List
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="text-decoration-none text-secondary "
                to="/practice-areas-details"
              >
                <FaChevronRight></FaChevronRight> Practice Areas Detail
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="text-decoration-none text-secondary "
                to="/attorney-list"
              >
                <FaChevronRight></FaChevronRight> Attorney List
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="text-decoration-none text-secondary "
                to="/attorney-details"
              >
                <FaChevronRight></FaChevronRight> Attorney Detail
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="text-decoration-none text-secondary "
                to="/f-a-q-s"
              >
                <FaChevronRight></FaChevronRight> FAQs
              </Link>
            </li>
            <li className="">
              <Link
                className="text-decoration-none text-secondary "
                to="/testimonials"
              >
                <FaChevronRight></FaChevronRight> Testimonials
              </Link>
            </li>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

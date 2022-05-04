import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="py-5 text-center not-found-page">
      <Container>
        <h1>404</h1>
        <h2>This Page Was Not Found.</h2>
        <p className="my-4">
          The page you are looking is not available or has been removed. Try
          going to Home Page by using the button below.
        </p>

        <button className="btn btn-danger ">
          <Link className="text-decoration-none text-light fw-bold" to="/">
            Go To Home Page
          </Link>
        </button>
      </Container>
    </div>
  );
};

export default NotFound;

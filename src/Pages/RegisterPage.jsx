import React from "react";
import { Link } from "react-router-dom";
import goggle from "../assets/Frame 103.png";
import or from "../assets/Frame 113.png";
import pz from "../assets/Frame.png";

const RegisterPage = () => {
  return (
    <div className="register">
      <header className="py-3">
        <nav className="container">
          <Link className="text-decoration-none" to="/">
            <span className="main-color-bg text-white rounded-circle p-2">
              PZ
            </span>
            <span className="text-white fs-5 fw-bolder ms-2">Perfumerye</span>
          </Link>
        </nav>
      </header>
      <div>
        <form
          style={{ maxWidth: "600px" }}
          className="bg-white mx-auto px-4 py-2 shadow-lg rounded-2"
        >
          <h1>Get Started</h1>
          <p>Let's get started by filling out the information below</p>
          <div className="d-flex flex-column flex-lg-row gap-1 justify-content-between my-3">
            <div>
              <label className="form-label" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="text">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control"
              />
            </div>
          </div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="form-control"
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="form-control"
          />
          <label className="form-label" htmlFor="password">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your Password"
            className="form-control"
          />
          <div className="my-2">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label ms-2" htmlFor="checkbox">
              I agree to{" "}
              <a href="##">
                <span>Terms of Service</span>
              </a>{" "}
              and
              <a href="##">
                <span> Privacy Policies</span>
              </a>
            </label>
          </div>
          <img className="d-flex m-auto my-2 w-100" src={or} alt="" />
          <img
            className="d-flex justify-content-center align-content-center"
            style={{ width: "100%" }}
            src={goggle}
            alt=""
          />
          <p className="text-center my-2">
            Already have an account?{" "}
            <Link
              className="text-decoration-none"
              style={{ color: "#8D34FF" }}
              to="/signin"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

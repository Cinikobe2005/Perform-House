import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import goggle from "../assets/Frame 103.png";
import or from "../assets/Frame 113.png";
import pz from "../assets/Frame.png";

const LoginPage = () => {
  return (
    <div className="register d-flex">
      <Link to="/">
        <img className="ms-3" src={pz} alt="" style={{ marginTop: "20px" }} />
      </Link>
      <div className="mx-auto mt-5">
        <form className="bg-white mx-auto my-5 p-5 shadow-lg rounded-2">
          <h1>Welcome Back</h1>
          <p>Fill in your information to access your account</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control my-2"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control my-2"
            placeholder="Enter your password"
          />
          <div className="d-flex flex-row justify-content-between">
            <div className="my-3">
              <input className="form-check-input m-1" type="checkbox" />
              <label htmlFor="checkbox" className="form-check-label">
                Remember Me
              </label>
            </div>
            <Link className="text-danger text-decoration-none" to="/register">
              Forgot password?
            </Link>
          </div>
          <button
            style={{ height: "50px" }}
            className="w-100 rounded-2 main-color-bg border-0 my-4"
          >
            <Link className="text-decoration-none text-white" to="/login">
              Sign Up
            </Link>
          </button>
          <img
            className="d-flex mx-auto my-2"
            src={or}
            alt=""
            width={"400px"}
          />
          <img
            className="d-flex mx-auto my-3"
            src={goggle}
            alt=""
            width={"450px"}
          />
          <p className="mx-auto text-center my-4">
            Don’t have an account?{" "}
            <Link className="text-decoration-none" to="/register">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import goggle from "../assets/Frame 103.png"
import or from "../assets/Frame 113.png";
import pz from "../assets/Frame.png";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const form = () => {
    const [user, setUser] = useState({
      email: "",
      firstName: "",
      LastName: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="register d-flex">
        <Link to="/"><img className="ms-3" src={pz} alt="" style={{marginTop: "20px"}}/></Link>
      <div className="mx-auto mt-5">
        <form
          style={{ height: "800px" }}
          className="mx-auto my-5 shadow-lg p-5 bg-white"
        >
          <h2>Get Started</h2>
          <p>Lets get started by filling out the information below</p>
          <div className="d-flex gap-3">
            <div>
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>

              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter name"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter name"
                className="form-control"
              />
            </div>
          </div>

          <label htmlFor="email" className="form-label my-3">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="form-label my-3">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
          />
          <label htmlFor="password" className="form-label my-3">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Confirm your password"
          />
          <input type="checkbox" id="agree" />
          <label htmlFor="agree" className="form-check-label mt-2 ms-1  ">
            I agree to <span className="main-color">Terms of Service</span> and{" "}
            <span className="main-color">Privacy Policies</span>
          </label>
          <button
            style={{ height: "40px" }}
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
            width={"300px"}
          />
          <img
            className="d-flex mx-auto my-3"
            src={goggle}
            alt=""
            width={"350px"}
          />
          <p className="mx-auto text-center my-4">
            Already have an account?{" "}
            <Link className="text-decoration-none" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

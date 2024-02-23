import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/UI/Input.jsx";
const Register = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>

        <div class="row my-4 ">
          <div className="col-md-6 col-lg-5 col-sm-8 mx-auto">
            <form class="border p-4  shadow">
              <Input
                id="name"
                label="Full name"
                type="name"
                placeholder="Abdallah Ragab"
              />

              <Input
                id="mobile"
                label="Phone Number"
                type="text"
                placeholder="0123456789"
              />


              <Input
                id="email"
                label="Email address"
                type="email"
                placeholder="name@example.com"
              />
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="*****"
              />

              <div className="my-3 text-center">
                <p className="fw-medium">
                Already has an account?
                  <Link
                    to="/login"
                    className="text-decoration-underline ms-1"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button class="my-2 btn btn-dark  px-4 fw-bold" type="button">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

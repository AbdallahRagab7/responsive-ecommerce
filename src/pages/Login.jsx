import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/UI/Input.jsx";
const Login = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>

        <div class="row my-4 ">
          <div className="col-md-6 col-lg-5 col-sm-8 mx-auto">
            <form class="border p-4  shadow">
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
                  New Here?
                  <Link
                    to="/register"
                    className="text-decoration-underline ms-1"
                  >
                    Register
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button class="my-2 btn btn-dark  px-4 fw-bold" type="button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

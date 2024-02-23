import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartItems = cartItems.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg  py-3 sticky-top">
        <div className="container">
          <div>
            <Link className="navbar-brand fw-bold" to="/">
              RAGAB STORE
            </Link>
          </div>
          <div className="toggler-cart d-flex align-items-center justify-content-between">
            <Link to="cart" className="d-lg-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              <span className="totalCartItems">{totalCartItems}</span>
            </Link>
            <button
              className="navbar-toggler ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setNavbarOpen(!isNavbarOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          > */}
          <div
            className={`collapse navbar-collapse ${
              isNavbarOpen ? "show" : ""
            } ${isNavbarOpen ? "collapsing" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item mx-2">
                <NavLink
                  to="/"
                  className="nav-link "
                  aria-current="page"
                  onClick={closeNavbar}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item  mx-2">
                <NavLink
                  to="/products"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item  mx-2">
                <NavLink to="/about" className="nav-link" onClick={closeNavbar}>
                  About
                </NavLink>
              </li>
            </ul>

            <div className="buttons text-center">
              <Link
                to={"/login"}
                className="btn btn-outline-primary rounded-pill m-2"
                onClick={closeNavbar}
              >
                <i className="fa fa-sign-in-alt mr-1"></i> Login
              </Link>
              <Link
                className="btn btn-primary rounded-pill me-2"
                to={"/register"}
                onClick={closeNavbar}
              >
                <i className="fa fa-user-plus mr-1"></i> Register
              </Link>

              <Link to="cart" className="cart-svg d-none d-lg-inline ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
                <span className="totalCartItems">{totalCartItems}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

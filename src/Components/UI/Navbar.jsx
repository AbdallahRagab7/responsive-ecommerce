import { Link , NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">
          <div>
            <NavLink className="navbar-brand fw-bold" href="#">
              RAGAB STORE
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ay7aga"
            aria-controls="ay7aga"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="ay7aga">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item mx-2">
                <NavLink to="/" className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item  mx-2">
                <NavLink  to="/products" className="nav-link" >
                  Products
                </NavLink>
              </li>
              <li className="nav-item  mx-2">
                <NavLink to="/about" className="nav-link" >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons text-center">
              <Link className="btn btn-outline-dark m-2">
                <i className="fa fa-sign-in-alt mr-1"></i> Login
              </Link>
              <Link className="btn btn-outline-dark m-2">
                <i className="fa fa-user-plus mr-1"></i> Register
              </Link>

              <Link to="cart" className="btn btn-outline-dark m-2">
                <i className="fa fa-cart-shopping mr-1"></i> Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">
          <div>
            <a className="navbar-brand fw-bold" href="#">
              RAGAB STORE
            </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item  mx-2">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item  mx-2">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <div className="buttons text-center">
              <a className="btn btn-outline-dark m-2">
                <i className="fa fa-sign-in-alt mr-1"></i> Login
              </a>
              <a className="btn btn-outline-dark m-2">
                <i className="fa fa-user-plus mr-1"></i> Register
              </a>
              <a className="btn btn-outline-dark m-2">
                <i className="fa fa-cart-shopping mr-1"></i> Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

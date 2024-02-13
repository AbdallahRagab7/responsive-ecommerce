import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Cart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-center p-2">Cart</h1>
      <hr />
      {/* if empty */}
      {/* <div className="container">
        <div className=" py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn  btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div> */}
      {/* end of empty
      
      */}

      <section>
        <div className="container my-4">
          <div className="row d-flex ">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {products.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-md-12 col-lg-3 ">
                            <div
                              className="bg-image rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={75}
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-5 ">
                            <p>
                              <strong>{item.title}</strong>
                            </p>
                          </div>

                          <div className="col-md-6 col-lg-4 ">
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                className="btn px-3"
                                onClick={() => {
                                  removeItem(item);
                                }}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <p className="mx-5">{item.qty}</p>

                              <button
                                className="btn px-3"
                                onClick={() => {
                                  addItem(item);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>

                            <p className="text-start text-md-center">
                              <strong>
                                <span className="text-muted">{item.qty}</span> x
                                ${item.price}
                              </strong>
                            </p>
                          </div>
                        </div>

                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>


{/* Checkout */}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 ">
                      {/* Products ({totalItems})<span>${Math.round(subtotal)}</span> */}
                      Products (5)<span>252</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>200</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>300</strong>
                      </span>
                    </li>
                  </ul>

                  <Link
                    to="/checkout"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout({}) {
  const cartItems = useSelector((state) => state.cart.items)
  const shippingCost = 15
  const cartTotalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const totalCartItems = cartItems.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <>
      {/* <div className="col-md-4"> */}
        <div className="card mb-4">
          <div className="card-header py-3 bg-light">
            <h5 className="mb-0">Order Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 fw-bold">
                {/* Products ({totalItems})<span>${Math.round(subtotal)}</span> */}
                Products ({totalCartItems})<span> $ {cartTotalPrice}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <strong>Shipping</strong>
                <span> <strong>$ {shippingCost}</strong></span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 text-dark">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span>
                  <strong>$ {cartTotalPrice + shippingCost}</strong>
                </span>
              </li>
            </ul>

            <Link to="/payment" className="btn btn-dark btn-lg btn-block">
              Go to checkout
            </Link>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Checkout;

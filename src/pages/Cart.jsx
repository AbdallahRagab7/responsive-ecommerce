import CartItem from "../Components/Cart/CartItem.jsx";
import Checkout from "../Components/Cart/Checkout.jsx";
import { useSelector } from "react-redux";
import EmptyCard from "../Components/Cart/EmptyCard.jsx";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <h1 className="text-center p-2">Cart</h1>
      <hr />

      {cartItems.length <= 0 ? (
        <EmptyCard />
      ) : (
        <section>
          <div className="container my-4">
            <div className="row d-flex ">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  {/* Cart items */}
                  <div className="card-body">
                    {cartItems.map((item) => {
                      return <CartItem key={item.id} item={item} />;
                    })}
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <Checkout />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Cart;

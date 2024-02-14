import { useState, useEffect } from "react";
import CartItem from "../Components/Cart/CartItem.jsx";
import Checkout from "../Components/Cart/Checkout.jsx";
// import { useSelector } from "react-redux";
// const cartItems = useSelector((state) => state.cart.items)
// import EmptyCard from "../Components/Cart/EmptyCard.jsx";

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
      {/* <EmptyCard /> */}
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
                {/* Cart items */}
                <div className="card-body">
                  {products.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                  })}
                </div>
              </div>
            </div>

            {/* Checkout */}
            <Checkout />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;

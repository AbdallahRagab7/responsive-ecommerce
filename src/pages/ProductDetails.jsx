import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch ()

  function addItemHandler() {
    dispatch(cartActions.addItemToCart(product));
  }
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead">
              {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6  my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark"
              onClick={addItemHandler}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

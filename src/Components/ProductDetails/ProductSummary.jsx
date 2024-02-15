import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";


export default function ProductSummary ({ product }) {
    console.log(product);
  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(cartActions.addItemToCart(product));
  }

  return (
    <>
      <div className="container my-5 px-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
              width="375px"
              height="350px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bold text-warning">
              {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="  my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark" onClick={addItemHandler}>
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

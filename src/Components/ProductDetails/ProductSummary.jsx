import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function ProductSummary({ product }) {
  // console.log(product);
  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(cartActions.addItemToCart(product));
    toast.success(
      `${product.title.split(" ").slice(0, 3).join(" ")} added to cart!`
    );
  }

  return (
    <>
      <div className="container my-5 px-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3 product-details">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
              width="375px"
              height="350px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5 product-text">
            <h4 className="text-uppercase text-muted fw-bold">{product.category}</h4>
            <h1 >{product.title}</h1>
            <p className="lead fw-bold text-warning">
              {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="  my-4">${product.price}</h3>
            <p className="lead text-muted mb-4">{product.description}</p>
            <button
              className="btn btn-outline-primary "
              onClick={addItemHandler}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-outline-primary mx-3 buy-now">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { currencyFormatter } from "../../util/formatting";
import { toast } from "react-toastify";
function Product({ product, title, first20Words }) {
  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(cartActions.addItemToCart(product));
    toast.success(
      `${product.title.split(" ").slice(0, 3).join(" ")} added to cart!`
    );
  }

  return (
    <>
      <div
        key={product.id}
        className=" product-card shadow card text-center col-9 col-sm-5 col-md-4 col-lg-3 mx-3 "
      >
        <div className={`${classes["product-image"]} m-3`}>
          <Link to={"/product/" + product.id}>
            <img src={product.image} alt="product-image" />
          </Link>
        </div>

        <div>
          <h4>{title}</h4>
          <p className={classes.description}>
            {/* {product.description.substring(0, 60)}... */}
            {first20Words}
          </p>
        </div>

        <ul className="list-group list-group-flush mb-2">
          <li className="list-group-item lead fw-bold product-price ">
            {currencyFormatter.format(product.price)}
          </li>
        </ul>

        <div className="product-item-buttons py-3 d-flex justify-content-evenly align-items-center">
          <Link
            to={"/product/" + product.id}
            className="btn btn-outline-primary "
          >
            Buy Now
          </Link>
          <button
            className="btn btn-outline-primary add-to-cart "
            onClick={addItemHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;

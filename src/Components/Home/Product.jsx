import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function Product({ product, title, first20Words }) {
  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(cartActions.addItemToCart(product));
  }

  return (
    <>
      <div
        key={product.id}
        className=" card text-center col-8 col-sm-5 col-md-3 mx-3 "
      >
        <div className={`${classes["product-image"]} m-3`}>
          <img src={product.image} alt="product-image" />
        </div>

        <div>
          <h4>{title}</h4>
          <p className={classes.description}>
            {/* {product.description.substring(0, 60)}... */}
            {first20Words}
          </p>
        </div>

        <ul className="list-group list-group-flush mb-2">
          <li className="list-group-item lead fw-bold">$ {product.price}</li>
        </ul>

        <div className="card-body">
          <Link to={"/product/" + product.id} className="btn btn-dark m-1 ">
            Buy Now
          </Link>
          <button className="btn btn-dark m-1 " onClick={addItemHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;

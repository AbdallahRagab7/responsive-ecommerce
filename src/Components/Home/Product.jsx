import classes from "./Products.module.css";

function Product({ product, title, first20Words }) {
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

        <div className="d-flex justify-content-center mb-2">
          <a to={"/product/" + product.id} className="btn btn-dark m-1">
            Buy Now
          </a>
          <button
            className="btn btn-dark m-1"
            // onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;

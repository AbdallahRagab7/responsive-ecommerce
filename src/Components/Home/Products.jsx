import { useState, useEffect } from "react";
import classes from "./Products.module.css";
function Products() {
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
      <h1 className="text-center "> Latest Products</h1>
      <div className="buttons text-center py-3 mb-2">
        <button className="btn btn-outline-dark btn-sm m-2">All</button>
        <button className="btn btn-outline-dark btn-sm m-2">
          Men's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-2">
          Women's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-2">Jewelery</button>
        <button className="btn btn-outline-dark btn-sm m-2">Electronics</button>
      </div>

      <div className="">
        <div className="row justify-content-center align-items-center g-5">
          {products.map((product) => {
            const mergeTitle = product.title.split(" ");
            const title = `${mergeTitle[0]}  ${mergeTitle[1]}  ${mergeTitle[2]}`;

            const first20Words = product.description
              .split(" ")
              .slice(0, 10)
              .join(" ");

            return (
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
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;

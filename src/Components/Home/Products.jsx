import { useState, useEffect } from "react";
import classes from "./Products.module.css"
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
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-sm m-3">All</button>
        <button className="btn btn-outline-dark btn-sm m-3">
          Men's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-3">
          Women's Clothing
        </button>
        <button className="btn btn-outline-dark btn-sm m-3">Jewelery</button>
        <button className="btn btn-outline-dark btn-sm m-3">Electronics</button>
      </div>

      <div className=" container ">
        <div className="row ">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-4 mb-5">
                <div className={classes['product-image']}>
                  <img src={product.image} alt="product-image" className="image-fluid" />
                </div>
                
                <h4>{product.title.substring(0,20)}...</h4>
                <p className="description">
                  {product.description.substring(0, 60)}...
                </p>
                <div className="price">
                  <span>$ {product.price}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-center align-items-center">
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

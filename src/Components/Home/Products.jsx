import { useState, useEffect } from "react";
import Product from "./Product.jsx";
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

      <section>
        <div className="row justify-content-center align-items-center g-5">
          {products.map((product) => {
            const mergeTitle = product.title.split(" ");
            const title = `${mergeTitle[0]}  ${mergeTitle[1]}  ${mergeTitle[2]}`;

            const first20Words = product.description
              .split(" ")
              .slice(0, 10)
              .join(" ");

            return (
              <Product
                key={product.id}
                product={product}
                title={title}
                first20Words={first20Words}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Products;

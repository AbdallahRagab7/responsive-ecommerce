import { useState, useEffect } from "react";
import Product from "./Product.jsx";
function MyProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    }
    getProducts();
  }, []);

  function filterProducts(category) {
    if (category === "all") {
      console.log(category);
      setSelectedCategory(category);
      return;
    }

    const filteredData = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredData);
    setSelectedCategory(category);
  }

  return (
    <>
      <h1 className="text-center "> Latest Products</h1>
      <div className="buttons text-center py-3 mb-2">
        <button
          className={`btn btn-outline-dark btn-sm m-2 ${
            selectedCategory === "all" ? "activeCategoryBtn" : ""
          } `}
          onClick={() => filterProducts("all")}
        >
          All
        </button>
        <button
          className={`btn btn-outline-dark btn-sm m-2 ${
            selectedCategory === "men's clothing" ? "activeCategoryBtn" : ""
          } `}
          onClick={() => filterProducts("men's clothing")}
        >
          Men's Clothing
        </button>

        <button
          className={`btn btn-outline-dark btn-sm m-2 ${
            selectedCategory === "women's clothing" ? "activeCategoryBtn" : ""
          } `}
          onClick={() => filterProducts("women's clothing")}
        >
          Women's Clothing
        </button>

        <button
          className={`btn btn-outline-dark btn-sm m-2 ${
            selectedCategory === "jewelery" ? "activeCategoryBtn" : ""
          } `}
          onClick={() => filterProducts("jewelery")}
        >
          Jewelery
        </button>

        <button
          className={`btn btn-outline-dark btn-sm m-2 ${
            selectedCategory === "electronics" ? "activeCategoryBtn" : ""
          } `}
          onClick={() => filterProducts("electronics")}
        >
          Electronics
        </button>
      </div>

      <section>
        <div className="row justify-content-center align-items-center g-5">
          {filteredProducts.map((product) => {
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

export default MyProducts;

import { useState, useEffect } from "react";
import Product from "./Product.jsx";
import FilterProducts from "./FilterProducts.jsx";
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
      setFilteredProducts(products);
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
      <FilterProducts
        selectedCategory={selectedCategory}
        filterProducts={filterProducts}
      />

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

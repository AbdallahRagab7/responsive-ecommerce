import { useState, useEffect } from "react";
import Product from "./ProductItem.jsx";
import FilterProducts from "./FilterProducts.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useHttp from "../../hooks/useHttp.js";

const requestConfig = {};
function MyProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const {
    data: products,
    isLoading,
    error,
    filteredProducts,
    setFilteredProducts,
  } = useHttp("https://fakestoreapi.com/products", requestConfig, []);
  
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastMeal = currentPage * itemsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - itemsPerPage;
  const currentMeals = filteredProducts.slice(
    indexOfFirstMeal,
    indexOfLastMeal
  );

  if (isLoading) {
    return <div className="d-flex justify-content-center" >
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>;
  }

  if (error) {
    return (
      <div className="text-center">
        <h1>Not Found</h1>
        <h2>{error}</h2>
      </div>
    );
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
          {currentMeals
            .sort(() => Math.random() - 0.5)
            .map((product) => {
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
        <div className="pagination-container">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          {renderPaginationButtons()}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>

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

export default MyProducts;

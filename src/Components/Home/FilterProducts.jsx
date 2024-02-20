function filterProducts({selectedCategory,filterProducts}) {

  return (
    <>
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
    </>
  );
}

export default filterProducts;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Marquee from "react-fast-marquee";
import ProductSummary from "../Components/ProductDetails/ProductSummary";
function ProductDetails() {
  const [product, setProductData] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { productId } = useParams();
  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(cartActions.addItemToCart(product));
  }
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProductData(data);

      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
    }
    getProduct();
  }, [productId]);

  function goToProductPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling animation
    });
  }

  return (
    <>

      <ProductSummary product={product}/>
     
      <h2 className="text-center pt-4 ">You may also Like</h2>

      <div className="container">
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={60}>
          <div className="py-4 my-4">
            <div className="d-flex">
              {similarProducts.map((item) => {
                return (
                  <div key={item.id} className="card mx-4 text-center">
                    <img
                      className="card-img-top p-3"
                      src={item.image}
                      alt="Card"
                      height={300}
                      width={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title.substring(0, 15)}...
                      </h5>
                    </div>

                    <div className="card-body">
                      <button
                        className="border-0 p-0 bg-transparent"
                        onClick={goToProductPage}
                      >
                        <Link
                          to={"/product/" + item.id}
                          className="btn btn-dark m-1"
                        >
                          Buy Now
                        </Link>
                      </button>

                      <button
                        className="btn btn-dark m-1"
                        onClick={addItemHandler}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default ProductDetails;

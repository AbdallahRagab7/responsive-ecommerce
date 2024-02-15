import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Marquee from "react-fast-marquee";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addItemHandler() {
    dispatch(cartActions.addItemToCart(product));
  }
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);

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
      <div className="container my-5 px-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.title}
              width="375px"
              height="350px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bold text-warning">
              {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="  my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark" onClick={addItemHandler}>
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>

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
                      <button className="border-0 p-0 bg-transparent" onClick={goToProductPage}>
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

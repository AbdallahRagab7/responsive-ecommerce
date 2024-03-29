import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";
import classes from "./SimilarProducts.module.css";
import { ToastContainer } from "react-toastify";

function SimilarProducts({ similarProducts }) {
  function goToProductPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const dispatch = useDispatch();

  function addItemHandler(item) {
    dispatch(cartActions.addItemToCart(item));
    toast.success(
      `${item.title.split(" ").slice(0, 3).join(" ")} added to cart!`
    );
  }
  return (
    <>
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
      <div className="container mb-5">
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={40}>
          <div className="">
            <div className="d-flex">
              {similarProducts.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" mx-4 text-center similar-card shadow "
                  >
                    <div className={`${classes["similar-product-image"]} m-3`}>
                      <Link to={"/product/" + item.id}>
                        <img
                          className="card-img-top p-3"
                          src={item.image}
                          alt="Card"
                        />
                      </Link>
                    </div>
                    <div className="card-body mb-3">
                      <h5 className="card-title fw-bold">
                        {item.title.substring(0, 15)}...
                      </h5>
                    </div>

                    <div className="card-body pb-2">
                      <button
                        className="border-0 p-0 bg-transparent"
                        onClick={goToProductPage}
                      >
                        <Link
                          to={"/product/" + item.id}
                          className="btn btn-outline-primary m-1 buy-now"
                        >
                          Buy Now
                        </Link>
                      </button>

                      <button
                        className="btn btn-outline-primary m-1"
                        onClick={() => {
                          addItemHandler(item);
                        }}
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

export default SimilarProducts;

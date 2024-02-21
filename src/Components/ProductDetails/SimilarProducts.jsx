import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { ToastContainer, toast } from "react-toastify";

function SimilarProducts({ similarProducts }) {
console.log(similarProducts);
  function goToProductPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }
  const dispatch = useDispatch();

  function addItemHandler(item) {
    dispatch(cartActions.addItemToCart(item));
    toast.success(`${item.title.split(" ").slice(0, 3).join(" ")} added to cart!`)

  }
  return (
    <>
      <div className="container">
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={60}>
          <div className="py-4 my-4">
            <div className="d-flex">
              {similarProducts.map((item) => {
                return (
                  <div key={item.id} className="card mx-4 text-center shadow">
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
                          className="btn btn-outline-primary m-1"
                        >
                          Buy Now
                        </Link>
                      </button>

                      <button
                        className="btn btn-outline-primary m-1"
                        onClick={()=> {addItemHandler(item)}}
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

export default SimilarProducts;

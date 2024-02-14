import { Link } from "react-router-dom";

function EmptyCard() {
    return ( <>
        <div className="container">
        <div className=" py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn  btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </> );
}

export default EmptyCard;
import Checkout from "../Components/Cart/Checkout";
import PaymentForm from "../Components/PaymentForm";
function Payment() {
  return (
    <>
      <div className="container py-5">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <Checkout />
          </div>

          <div className="col-md-7 col-lg-8">
        <PaymentForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;

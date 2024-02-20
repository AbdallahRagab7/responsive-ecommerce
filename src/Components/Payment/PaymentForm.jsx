import Input from "../UI/Input.jsx";

function PaymentForm() {
  return (
    <>
      <div className="card mb-4">
        <div className="card-header py-3 mb-2">
          <h4 className="mb-0 text-center">Billing address</h4>
        </div>
        <div className="card-body">
          <form className="needs-validation">
            <div className="row ">
              <Input
                id="firstName"
                type="text"
                placeholder="Abdallah"
                label="First Name"
              />
              <Input
                id="lastName"
                type="text"
                placeholder="Ragab"
                label="Last Name"
              />

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                label="  Email"
              />

              <Input
                id="address"
                type="text"
                placeholder="1234 Main St"
                label="Address"
              />

              <Input
                id="address"
                type="text"
                placeholder="Alexandria"
                label="City"
              />
            </div>

            <button
              className="w-100 btn btn-primary rounded-pill fw-bold p-3 mt-5"
              type="submit"
            >
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;

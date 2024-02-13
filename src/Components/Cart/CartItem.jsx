function cartItem({item}) {
  return (
    <>
      <div key={item.id}>
        <div className="row d-flex align-items-center">
          <div className="col-md-12 col-lg-3 ">
            <div className="bg-image rounded" data-mdb-ripple-color="light">
              <img src={item.image} alt={item.title} width={100} height={75} />
            </div>
          </div>

          <div className="col-md-6 col-lg-5 ">
            <p>
              <strong>{item.title}</strong>
            </p>
          </div>

          <div className="col-md-6 col-lg-4 ">
            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
              <button
                className="btn px-3"
                onClick={() => {
                  removeItem(item);
                }}
              >
                <i className="fas fa-minus"></i>
              </button>

              <p className="mx-5">{item.qty}</p>

              <button
                className="btn px-3"
                onClick={() => {
                  addItem(item);
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <p className="text-start text-md-center">
              <strong>
                <span className="text-muted">{item.qty}</span> x ${item.price}
              </strong>
            </p>
          </div>
        </div>

        <hr className="my-4" />
      </div>
    </>
  );
}

export default cartItem;
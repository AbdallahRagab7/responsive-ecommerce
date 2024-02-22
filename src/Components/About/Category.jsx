function Category({ category }) {
  return (
    <>
      <div className="col-md-4 col-sm-6 mb-3 px-3">
        <div className="card h-100">
          <img
            className="card-img-top img-fluid"
            src={category.img}
            alt=""
            height={160}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{category.title}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

import cover from "../../assets/cover2.png";
function HeroSection() {
  return (
    <>
      <div className=" pb-3">
        <div className="card text-white border-0 mx-3">
          <img className="card-img img-fluid" src={cover} alt="Cover" />

          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

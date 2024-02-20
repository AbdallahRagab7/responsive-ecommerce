import cover from "../../assets/cover5.png";
function HeroSection() {
  return (
    <>
      <div className=" pb-3">
        <div className="card text-white border-0 mx-3">
          <img className="card-img img-fluid" src={cover} alt="Cover" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;

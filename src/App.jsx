import React from "react";
import Navbar from "./Components/UI/Navbar.jsx";
import HeroSection from "./Components/Home/HeroSection.jsx";
import Products from "./Components/Home/Products.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Products/>
    </>
  );
};

export default App;

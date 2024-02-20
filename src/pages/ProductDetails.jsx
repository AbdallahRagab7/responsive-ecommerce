import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductSummary from "../Components/ProductDetails/ProductSummary";
import SimilarProducts from "./../Components/ProductDetails/SimilarProducts";
function ProductDetails() {
  const [product, setProductData] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      // console.log(data.category) //men's clothing
      setProductData(data);

      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
    }
    getProduct();
  }, [productId]);

  return (
    <>
      <ProductSummary product={product} />

      <h2 className="text-center pt-4 ">You may also Like</h2>

      <SimilarProducts similarProducts={similarProducts} />
    </>
  );
}

export default ProductDetails;

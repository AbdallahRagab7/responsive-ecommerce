import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSummary from "../Components/ProductDetails/ProductSummary";
import SimilarProducts from "./../Components/ProductDetails/SimilarProducts";

function ProductDetails() {
  const [product, setProductData] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(
            data.message || "Something went wrong, failed to send request."
          );
        }

        setProductData(data);
        setIsLoading(false);
        const response2 = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        const data2 = await response2.json();
        if (!response2.ok) {
          throw new Error(
            data2.message || "Something went wrong, failed to send request."
          );
        }
        setSimilarProducts(data2);
      } catch (error) {
        setError(
          error.message || "Something went wrong, failed to send request"
        );
      }
      setIsLoading(false);
    }
    getProduct();
  }, [productId]);

  if (isLoading) {
    return (
      <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h1>Not Found</h1>
        <h2>{error}</h2>
      </div>
    );
  }
  return (
    <>
      <ProductSummary product={product} />

      <h2 className="text-center pt-4 mb-4 ">You may also Like</h2>

      <SimilarProducts similarProducts={similarProducts} />
    </>
  );
}

export default ProductDetails;

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



    // useEffect(() => {
    //     async function getProduct() {
    //       try {
    //         const response = await Promise.all([
    //             fetch(`https://fakestoreapi.com/products/${productId}`) ,
    //             fetch(`https://fakestoreapi.com/products/category/${data.category}`)
    //         ])
    //         const [data1,data2] = await Promise.all(response.map(r => r.json ()))
    //         // const [data1, data2] = await Promise.all([response1, response2].map(response => response.json()));
    
    //         setProductData(data1);
    //         setSimilarProducts(data2);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     }
    
    //     getProduct();
    //   }, [productId]);
  

  return (
    <>
      <ProductSummary product={product} />

      <h2 className="text-center pt-4 ">You may also Like</h2>

      <SimilarProducts similarProducts={similarProducts} />
    </>
  );
}

export default ProductDetails;

import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://codepath-store-api.herokuapp.com/store/${productId}`
        );
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.log("Error fetching product: ", error);
      }
    }
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

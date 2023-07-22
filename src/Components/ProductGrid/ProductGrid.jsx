import React from "react";
import Product from "../Products/Products";
import data from "../../data/data.json";


const ProductGrid = () => {
  if (!Array.isArray(data.products)) {
    // If products is not an array, handle the error or return a message
    return <p>Invalid products data. Please provide an array of products.</p>;
  }

  return (
    <div className="product-grid">
      {data.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

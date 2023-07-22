import React from "react";

const Product = ({ product }) => {
  const { title, rating, stock, brand, category, thumbnail } = product;

  return (
    <div className="product-container">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{category}</p>
      <p>Stock: {stock}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Product;

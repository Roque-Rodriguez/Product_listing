import React from "react";


const Product = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = product;

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Product;

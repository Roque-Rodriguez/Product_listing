import React, { useState } from "react";

const Star = () => <span>★</span>;

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <Star key={index} />
  ));

  if (hasHalfStar) {
    stars.push(<span key="half-star">½</span>);
  }

  return <div>{stars}</div>;
};

const Product = ({ product }) => {
  const { title, rating, stock, brand, category, images } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const stockStyle = {
    color: stock < 20 ? "red" : "inherit",
  };

  return (
    <div className="product-container">
      <img src={images[currentImageIndex]} alt={title} />
      <button onClick={prevImage}>◀</button>
      <button onClick={nextImage}>▶</button>
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>{category}</p>
      <p style={stockStyle}>Stock: {stock}</p>
      <p>
        Rating: <Rating rating={rating} />
      </p>
    </div>
  );
};

export default Product;

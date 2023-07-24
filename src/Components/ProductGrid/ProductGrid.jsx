import React, { useState } from "react";
import Product from "../Products/Products";
import data from "../../data/data.json";

const ProductGrid = () => {
  const [sortOrder, setSortOrder] = useState("ascending"); 
  const [categoryFilter, setCategoryFilter] = useState("all"); 

  const sortProducts = (products, order) => {
    return products.slice().sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      return order === "ascending"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };

  const filterProductsByCategory = (products, category) => {
    if (category === "all") return products;
    return products.filter((product) => product.category === category);
  };

  const sortedProducts = sortProducts(data.products, sortOrder);
  const filteredProducts = filterProductsByCategory(
    sortedProducts,
    categoryFilter
  );

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="product-grid" style={{ padding: "50px" }}>
      <div
        className="filter-section"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          padding: "150px",
          textAlign: "center",
        }}
      >
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

        <label htmlFor="category">Filter By Category:</label>
        <select
          id="category"
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
        >
          <option value="all">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>

      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

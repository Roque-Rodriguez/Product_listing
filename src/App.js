import React, { useState } from "react";
import data from "./data/data.json";
import ProductGrid from './Components/ProductGrid/ProductGrid';
//import "./App.css"; 

function App() {
  const [allProducts, setAllProducts] = useState(data);

  return (
    <div>
      <h1>Hello, Student!</h1>
      <ProductGrid products={allProducts} />
    </div>
  );
}

export default App;


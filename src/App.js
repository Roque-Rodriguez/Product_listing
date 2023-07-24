import React from 'react';
//import { useState } from 'react';
import './header.css';
import './styles.css';
import Header from "../src/Components/Header/Header";
import ProductGrid from './Components/ProductGrid/Productgrid';
import data from "./data/data.json";

const App = () => {
const products = data;
  return (
    <div>
      <Header />
      <main>
        
      </main>
      <container>
        <ProductGrid products={products} />
      </container>
    </div>
  );
};
export default App;
        


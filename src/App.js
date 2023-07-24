import React from 'react';
//import { useState } from 'react';
import './header.css';
import './styles.css';
import Header from "../src/Components/Header/Header";
import ProductGrid from './Components/ProductGrid/Productgrid';
import data from "./data/data.json";
import Footer from "../src/Components/Footer/Footer";

const App = () => {
const products = data;
  return (
    <div>
      <Header />
      <main></main>
      <container>
        <ProductGrid products={products} />
      </container>
      <container>
        <Footer />
      </container>
    </div>
  );
};
export default App;
        


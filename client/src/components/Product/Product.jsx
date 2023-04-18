import React from 'react';
import Header from '../Header';
import ProductSection from './ProductSection';
import Footer from './../Footer';

Product.propTypes = {};

function Product(props) {
  return (
    <div className="relative">
      <Header />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default Product;

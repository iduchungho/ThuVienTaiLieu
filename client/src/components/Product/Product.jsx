import React from 'react';
import Header from '../Header';
import ProductSection from './ProductSection';

Product.propTypes = {};

function Product(props) {
  return (
    <div className="relative">
      <Header />
      <ProductSection />
    </div>
  );
}

export default Product;

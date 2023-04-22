import React from 'react';
import Header from '../Header';
import ProductSection from './ProductSection';
import Footer from './../Footer';
import { useParams } from 'react-router-dom';

Product.propTypes = {};

function Product(props) {
  const { id } = useParams();
  return (
    <div className="relative">
      <Header />
      <ProductSection id={id} />
      <Footer />
    </div>
  );
}

export default Product;

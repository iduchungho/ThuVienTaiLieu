import React from 'react';
import Header from '../Header';
import ProductSection from './ProductSection';
import Footer from './../Footer';
import { useParams } from 'react-router-dom';
import CartContainer from './../Cart/CartContainer';
import { useSelector } from 'react-redux';

Product.propTypes = {};

function Product(props) {
  const { id } = useParams();
  const OpenCart = useSelector((state) => state.cart.showMiniCart);
  const isOpenCart = !!OpenCart;
  return (
    <div className="relative">
      <Header />
      <ProductSection id={id} />
      <Footer />
      {isOpenCart && <CartContainer />}
    </div>
  );
}

export default Product;

import React from 'react';
import Header from './Header';
import { ReactComponent as YourSvg } from './img/NotFound.svg';

Product.propTypes = {};

function Product(props) {
  return (
    <div>
      <Header />
      <div className="w-full h-full object-contain">
        <YourSvg />
      </div>
    </div>
  );
}

export default Product;

import React from 'react';
import PropTypes from 'prop-types';
import Header from './../Header';
import Footer from './../Footer';
import OrderSection from './OrderSection';

Order.propTypes = {};

function Order(props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <OrderSection />
      <Footer />
    </div>
  );
}

export default Order;

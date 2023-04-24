import React from 'react';
import PropTypes from 'prop-types';
import Header from './../Header';
import NewsSection from './NewsSection';
import Footer from '../Footer';

News.propTypes = {};

function News(props) {
  return (
    <div className="flex flex-col  justify-between">
      <Header />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default News;

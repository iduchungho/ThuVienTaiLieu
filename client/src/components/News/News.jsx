import React from 'react';
import Footer from '../Footer';
import Header from './../Header';
import NewsSection from './NewsSection';

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

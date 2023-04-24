import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import NewsPageSection from './NewsPageSection';
import { useParams } from 'react-router-dom';

NewsPage.propTypes = {};

function NewsPage(props) {
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <NewsPageSection id={id} />
      <Footer />
    </div>
  );
}

export default NewsPage;

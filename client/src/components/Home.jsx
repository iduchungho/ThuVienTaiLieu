import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import Header from './Header';
import Product from './Product/Product.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

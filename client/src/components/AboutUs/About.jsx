import React from 'react';
import PropTypes from 'prop-types';
import Header from './../Header';
import AboutSection from './AboutSection';
import Footer from './../Footer';

About.propTypes = {};

function About(props) {
  return (
    <div className="flex flex-col  justify-between">
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default About;

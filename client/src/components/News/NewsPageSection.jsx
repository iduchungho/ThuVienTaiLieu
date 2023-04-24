import React from 'react';
import PropTypes from 'prop-types';

NewsPageSection.propTypes = {
  id: PropTypes.number,
};

function NewsPageSection(props) {
  return (
    <div>
      <h1 className=" mb-36 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Ti
      </h1>
    </div>
  );
}

export default NewsPageSection;

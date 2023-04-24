import React from 'react';
import PropTypes from 'prop-types';

NewsPageSection.propTypes = {
  id: PropTypes.number,
};

function NewsPageSection(props) {
  return (
    <div className="mt-36 mb-36 px-48">
      <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Thoughts on life and death
      </h1>
      <h2 className="text-2xl mt-3 font-bold text-gray-900">On life and death</h2>
      <p className="mt-3">
        I've been thinking about mortality a lot recently - thanks for a few books that I have read this past month. The
        first - Being Mortal, by Atul Gawande - has made me think about aging and what the final years of my life will
        bring. Following that, I read Die with Zero by Bill Perkins, which argues that the currency of life should be
        life experiences over money. Both of these books have reminded me of possibly my favorite blog post of all time
        on the internet - The Tail End on Wait but Why. This blog post beautifully illustrates how finite life really
        is. If you or I live to 90 years, we only have X number of Christmases, X days at the beach, and/or X days with
        our parents left. Although a somber thought, I think there's optimism in this thinking as well. Stoicism takes
        this idea further with the quote "Momento Mori" - Remember you must die. The idea is that today may be your last
        day to live, so live your life as if it were. If today was your last day to live, what would you do differently?
        How would you handle your actions and responses with others? What would you spend your time doing? Momento Mori
        is a great reminder for me to slow down when I am frustrated, and to be a little more patient with someone.
        Beyond that, though, thinking about death has been reminding me that there is more to life than working and
        acquiring money.
      </p>
      <h2 className="text-2xl mt-8 font-bold text-gray-900">On life and death</h2>
      <p className="mt-3">
        I've been thinking about mortality a lot recently - thanks for a few books that I have read this past month. The
        first - Being Mortal, by Atul Gawande - has made me think about aging and what the final years of my life will
        bring. Following that, I read Die with Zero by Bill Perkins, which argues that the currency of life should be
        life experiences over money. Both of these books have reminded me of possibly my favorite blog post of all time
        on the internet - The Tail End on Wait but Why. This blog post beautifully illustrates how finite life really
        is. If you or I live to 90 years, we only have X number of Christmases, X days at the beach, and/or X days with
        our parents left. Although a somber thought, I think there's optimism in this thinking as well. Stoicism takes
        this idea further with the quote "Momento Mori" - Remember you must die. The idea is that today may be your last
        day to live, so live your life as if it were. If today was your last day to live, what would you do differently?
        How would you handle your actions and responses with others? What would you spend your time doing? Momento Mori
        is a great reminder for me to slow down when I am frustrated, and to be a little more patient with someone.
        Beyond that, though, thinking about death has been reminding me that there is more to life than working and
        acquiring money.
      </p>
    </div>
  );
}

export default NewsPageSection;

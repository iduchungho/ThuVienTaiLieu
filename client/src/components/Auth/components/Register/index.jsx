import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './../RegisterForm/index';

Register.propTypes = {};

function Register(props) {
  const handleSubmit = (values) => {
    console.log('formSubmit: ', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;

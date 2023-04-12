import React from 'react';
import LoginForm from './../LoginForm/index';

Login.propTypes = {};

function Login(props) {
  const handleSubmit = (values) => {
    console.log('formSubmit: ', values);
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;

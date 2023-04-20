import React from 'react';
import LoginForm from './../LoginForm/index';
// import { Signin } from '../../../../utils/customer';
import axios from 'axios';
const url = "http://localhost/bkfood-court/server/src/api"
Login.propTypes = {};

function Login(props) {
  const handleSubmit = async (values) => {
    try {
        const { data } = await axios.post(`${url}/api/customer/login.php`, {
        email : values.email,
        password : values.password
      })
        console.log(data)
    }
    catch (err) {
        return false
    }
    // const data = await Signin({
    //   "email" : values.email,
    //   "password" : values.password
    // })
    // console.log('formSubmit: ', data);
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;

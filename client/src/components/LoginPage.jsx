import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-loginBg bg-no-repeat bg-cover">
      <div className="container py-40 mx-auto items-center justify-center w-full h-screen">
        <div className="w-6/12 bg-[#f5f5f5] mx-auto rounded-lg flex flex-col p-20 justify-center">
          <Link to={`/`}>
            <h1 className="text-xl text-[#060606] font-semibold">BK Food</h1>
          </Link>

          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-4xl text-cartNumBg font-semibold mb-2 text-center">Log In</h3>
              <p className="text-sm mb-2 text-center">Welcome Back! Please enter your details.</p>
            </div>

            <div className="w-full flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="w-full flex items-center justify-between my-5">
              <div className="w-full flex items-center">
                <input type="checkbox" name="remember" id="remember" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember Me</p>
              </div>

              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                Forgot Password?
              </p>
            </div>

            <div className="w-full flex flex-col my-4">
              <button className="w-full bg-cartNumBg my-2 text-white rounded-md p-4 text-center flex items-center justify-center">
                Log in
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Don't have an account?{' '}
              <Link to={`/signup`}>
                <span className="font-semibold text-cartNumBg underline underline-offset-2 cursor-pointer">
                  Sign up for free
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

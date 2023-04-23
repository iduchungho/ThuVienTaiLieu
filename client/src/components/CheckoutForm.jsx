import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, hideMiniCart } from '../components/Cart/CartSlice';

const CheckoutForm = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar('Order Successfully, We will call you in a minute!', { variant: 'success' });
    setTimeout(() => {
      navigate('/');
    }, 2500);
    dispatch(clearCart());
    dispatch(hideMiniCart());
  };

  return (
    <div className="leading-loose flex justify-center items-center pt-10">
      <form onSubmit={(e) => handleSubmit(e)} className="max-w-xl p-10 bg-white rounded shadow-xl">
        <h1 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Check Out
        </h1>
        <p className="text-gray-800 font-medium">Customer information</p>
        <div className="">
          <label className="block text-sm text-gray-00">
            Name
          </label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
          ></input>
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600">
            Email
          </label>
          <input
            className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          ></input>
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" >
            Address
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Street"
            aria-label="Email"
          ></input>
        </div>
        <div className="mt-2">
          <label className="hidden text-sm block text-gray-600" >
            City
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="city"
            name="cus_email"
            type="text"
            required=""
            placeholder="City"
            aria-label="Email"
          ></input>
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label className="hidden block text-sm text-gray-600" >
            Country
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Country"
            aria-label="Email"
          ></input>
        </div>
        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label className="hidden block text-sm text-gray-600" >
            Zip
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Zip"
            aria-label="Email"
          ></input>
        </div>
        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
        <div className="">
          <label className="block text-sm text-gray-600" >
            Card
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Card Number MM/YY CVC"
            aria-label="Name"
          ></input>
        </div>
        <div className="mt-4">
          <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">
            ${cartTotal + 2.5}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, hideMiniCart } from '../components/Cart/CartSlice';
import { CreateOrder } from '../utils/order';
import { useState } from 'react';

const CheckoutForm = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const loggedInUser = useSelector((state) => state.user.current);
  const [method, setMethod] = useState('CASH_ON_DELIVERY');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = loggedInUser.customer_id;

  const handleChange = (e) => {
    setMethod(e.target.value);
  };
  console.log(method);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = {
      order_id: '1',
      customer_id: id,
      menu_id: cartItems[0].id,
      quantity: cartItems[0].quantity,
      order_status: 'CONFIRMED',
      time_stamp: Date.now(),
    };
    console.log(JSON.stringify(input));
    const order = await CreateOrder(id, JSON.stringify(input));
    console.log(order);

    // enqueueSnackbar('Order Successfully, We will call you in a minute!', { variant: 'success' });
    // setTimeout(() => {
    //   navigate('/');
    // }, 2500);
    // dispatch(clearCart());
    // dispatch(hideMiniCart());
  };

  return (
    <div className="leading-loose flex justify-center items-center pt-10">
      <form onSubmit={(e) => handleSubmit(e)} className="max-w-xl p-10 bg-white rounded shadow-xl">
        <h1 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Check Out
        </h1>
        <p className="text-gray-800 font-medium">Customer information</p>

        <div className="mt-2">
          <label className=" block text-sm text-gray-600">Address</label>
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
          <label className="hidden text-sm block text-gray-600">City</label>
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
          <label className="hidden block text-sm text-gray-600">Country</label>
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
          <label className="hidden block text-sm text-gray-600">Zip</label>
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
          <label className="block text-sm text-gray-600">Payment Method</label>
          <select
            value={method}
            onChange={(e) => handleChange(e)}
            id="method"
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
          >
            <option value="CASH_ON_DELIVERY">Cash On Delivery</option>
            <option value="ONLINE_PAYMENT">Online Payment</option>
          </select>
        </div>
        <div className="">
          <label className="block text-sm text-gray-600">Card</label>
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

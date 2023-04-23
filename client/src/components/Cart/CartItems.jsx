import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, removeQuantityFromCart, setCartTotal, setQuantity } from '../Cart/CartSlice';

const CartItem = ({ item, setFlag, flag, total }) => {
  const dispatch = useDispatch();

  const updateQty = (action, id, quantity) => {
    if (action === 'add') {
      const action = setQuantity({ id, quantity: 1 });
      dispatch(action);
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (quantity === 1) {
        const action = removeFromCart(id);
        dispatch(action);
      } else {
        const action = setQuantity({ id, quantity: -1 });
        dispatch(action);
      }
    }
  };

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img src={item?.img} className="w-20 h-20 max-w-[60px] rounded-full object-contain" alt="" />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">$ {item.price * item.quantity}</p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty('remove', item?.id, item.quantity)}>
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">{item.quantity}</p>

        <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty('add', item?.id, item.quantity)}>
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;

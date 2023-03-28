import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Logo from './img/logo.png';
import Avatar from './img/avatar.png';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* destop and tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex gap-2 items-center">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-semibold"> BK Food</p>
        </div>

        <div className="flex items-center gap-8 ml-auto">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              Home
            </li>
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              Menu
            </li>
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              About Us
            </li>
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              Service
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer ml-8" />
            <div className=" absolute -top-1 -right-3 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl"
            alt="avatar"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />

          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        <Link to={'/'} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-semibold"> BK Food</p>
        </Link>
        <motion.img
          whileTap={{ scale: 0.6 }}
          src={Avatar}
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;

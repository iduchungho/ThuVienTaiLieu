import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import * as React from 'react';
import { useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import LoginForm from './Auth/components/LoginForm/index';
import RegisterForm from './Auth/components/RegisterForm/index';
import Avatar from './img/avatar.png';
import Logo from './img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logout } from './Auth/userSlice';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
  };

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.customer_id;

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [showCart, setShowCart] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* destop and tablet */}
      <div className="hidden md:flex w-full h-full">
        <Link to="/" className="flex gap-2 items-center">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-semibold"> BK Food</p>
        </Link>

        <div className="flex items-center gap-8 ml-auto">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              <HashLink smooth to={'/#menu'}>
                Menu
              </HashLink>
            </li>
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              About Us
            </li>
            <li className="text-lg text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:text-cartNumBg">
              News
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer ml-8" />
            <div className=" absolute -top-1 -right-3 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          {!isLoggedIn && (
            <div>
              <Button onClick={handleClickOpen} color="inherit">
                Login
              </Button>
              <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent>
                  {mode === MODE.REGISTER && (
                    <>
                      <RegisterForm />
                      <Grid className=" text-center" item>
                        <Grid item>
                          <Link href="#" variant="body2" onClick={() => setMode(MODE.LOGIN)}>
                            {'You have an account? Sign In'}
                          </Link>
                        </Grid>
                      </Grid>
                    </>
                  )}
                  {mode === MODE.LOGIN && (
                    <>
                      <LoginForm />
                      <Grid className=" text-center" item>
                        <Link href="#" variant="body2" onClick={() => setMode(MODE.REGISTER)}>
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          )}
          {isLoggedIn && (
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl"
              alt="avatar"
              onClick={handleOpenMenu}
            />
          )}
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
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
          <Link to={'/profile'}>My Profile</Link>
        </MenuItem>
        {loggedInUser.role === 'admin' && (
          <MenuItem>
            <Link to={'/dashboard'}>Dashboard</Link>
          </MenuItem>
        )}
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;

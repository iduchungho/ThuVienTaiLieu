import React, {useState} from 'react'
// import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Logo from './img/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FeedIcon from '@mui/icons-material/Feed';
// import Link from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';


const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  const handleClickOpen = () => {
    setLogout(true);
  };
  const ReturnMainPage = () => {
    setLogout(false);
    window.location.href = '/';
  };
  const ReturnCurrentPage = () => {
    setLogout(false);
  };

  const Menus = [
    {title: "Admins", page: <PersonOutlineIcon/>, src: '/dashboard/client'},
    {title: "Orders", page: <AssignmentIcon/>, src: '/dashboard/order'},
    {title: "Items", page: <FastfoodIcon/>, src: '/dashboard/item'},
    {title: "Payments", page: <CreditCardIcon/>, src: '/dashboard/payment'},
    {title: "News", page: <FeedIcon/>, src: '/dashboard/news'}
  ]

  return (
    <div className={`${open ? " w-60" : "w-20"} grid gap-4 grid-cols-1 duration-300 h-screen p-5 pt-4 bg-orange-600 text-white shadow-lg`}>
      <div className="flex row-span-1 gap-x-4 items-center">
        <img src={Logo} className="w-8 cursor-pointer duration-500" alt="logo" />
        <h1 className={`${!open && 'hidden'} text-white origin-left font-medium text-xl duration-300`}>BK Food</h1>
      </div>
      <ul className="row-span-3 pt-6">
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-orange-500" onClick={() => setOpen(!open)}>
        <MenuIcon/>
        <span className={`${!open && 'hidden'} origin-left duration-200`}>Menu</span>
        </li>
        {Menus.map((menu,index)=>(
          <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-orange-500" onClick={() => document.location.href = menu.src}>
            <div className=" cursor-pointer duration-500">{menu.page}</div>
            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
          </li>
        ))}
      </ul>
      <ul className="row-span-1 justify-end">
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-orange-500">
          <div className=" cursor-pointer duration-500">
            <AccountBoxIcon/>
          </div>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>My Account</span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-orange-500" onClick={handleClickOpen}>
          <div className=" cursor-pointer duration-500">
            <LogoutIcon/>
          </div>
          <span className={`${!open && 'hidden'} origin-left duration-200`}>Log Out</span>
        </li>
      </ul>
      <Dialog
        open={logout}
        onClose={ReturnCurrentPage}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"LOG OUT"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to log out
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ReturnCurrentPage}>No</Button>
          <Button onClick={ReturnMainPage} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SideBar
import React, {useState} from 'react'
// import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Logo from './img/logo.png';
// import Link from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {title: "Acounts", page: <PersonOutlineIcon/>, src: '/client'},
    {title: "Orders", page: <AssignmentIcon/>, src: '/order'},
    {title: "Items", page: <FastfoodIcon/>, src: '/item'}
  ]
  return (
    <div className={`${open ? " w-60" : "w-20"} duration-300 h-screen p-5 pt-4 bg-orange-600 text-white shadow-lg`}>
      <div className="flex gap-x-4 items-center">
        <img src={Logo} className="w-8 cursor-pointer duration-500" alt="logo" />
        <h1 className={`${!open && 'hidden'} text-white origin-left font-medium text-xl duration-300`}>BK Food</h1>
      </div>
      <ul className="pt-6">
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-orange-500" onClick={() => setOpen(!open)}>
        <MenuIcon/>
        <span className={`${!open && 'hidden'} origin-left duration-200`}>Menu</span>
        </li>
        {Menus.map((menu,index)=>(
          <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-600" onClick={() => document.location.href = menu.src}>
            <div className=" cursor-pointer duration-500">{menu.page}</div>
            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
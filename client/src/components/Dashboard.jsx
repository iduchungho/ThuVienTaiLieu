import React from 'react'
import { Routes, Route, Router} from 'react-router-dom';
import SideBar from './SideBar';
import DashboardClient from './DashboardClient';
import DashboardItem from './DashboardItem';
import DashboardOrder from './DashboardOrder';
const Dashboard = () => {
  return (
    <div className="w-screen h-auto flex flex-row bg-primary">
        <SideBar/>
        <main className="p-7 flex-1 h-screen">
            <Routes>
                <Route path='/client' element={<DashboardClient/>}/>
                <Route path='/item' element={<DashboardItem/>}/>
                <Route path='/order' element={<DashboardOrder/>}/>
            </Routes>
        </main>
  </div>
  )
}
export default Dashboard
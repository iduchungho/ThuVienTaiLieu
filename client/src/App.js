import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import Dashboard from './components/Dashboard';
import DashboardClient from './components/DashboardClient';
import DashboardItem from './components/DashboardItem';
import DashboardOrder from './components/DashboardOrder';

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard/" element={<Dashboard />}>
            <Route path='client' element={<DashboardClient/>}/>
            <Route path='item' element={<DashboardItem/>}/>
            <Route path='order' element={<DashboardOrder/>}/>
        </Route>
        
      </Routes>
    </AnimatePresence>
  );
}

export default App;

import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';
import DashboardClient from './components/DashboardClient';
import DashboardItem from './components/DashboardItem';
import DashboardOrder from './components/DashboardOrder';
import Home from './components/Home';
import Product from './components/Product/Product';

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard//*" element={<Dashboard />}>
          <Route path="client" element={<DashboardClient />} />
          <Route path="item" element={<DashboardItem />} />
          <Route path="order" element={<DashboardOrder />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;

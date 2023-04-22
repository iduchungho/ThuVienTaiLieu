import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';
import DashboardClient from './components/dashboard/DashboardClient';
import DashboardItem from './components/dashboard/DashboardItem';
import DashboardOrder from './components/dashboard/DashboardOrder';
import DashboardPayment from './components/dashboard/DashboardPayment';
import Home from './components/Home';
import Product from './components/Product/Product';
import Profile from './components/Profile/Profile';
import CartFeature from './components/Cart/CartFeature';
import DashboardNews from './components/dashboard/DashboardNews';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<CartFeature />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="client" element={<DashboardClient />} />
            <Route path="item" element={<DashboardItem />} />
            <Route path="order" element={<DashboardOrder />} />
            <Route path="payment" element={<DashboardPayment />} />
            <Route path="news" element={<DashboardNews/>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;

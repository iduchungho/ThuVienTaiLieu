import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

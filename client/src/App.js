import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

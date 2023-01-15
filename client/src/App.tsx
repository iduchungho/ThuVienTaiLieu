import React from 'react';
// for rsuite in rsuite
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'

import  HomeComponent  from './component/Home';
import NavbarComponent from './component/Navbar';

function App() {
  return (
    <>
      <NavbarComponent/>
      <HomeComponent/>
    </>
  );
}

export default App;

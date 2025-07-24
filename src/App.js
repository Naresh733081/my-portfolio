import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CustomNavbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div >
      <CustomNavbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './pages/footer/footer';
import Home from './pages/home/home';
import AboutUs from './pages/about/about';
import Contact from './pages/contact/contact';
import Services from './pages/services/services';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/company' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

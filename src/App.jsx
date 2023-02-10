import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar2 />
    <Router>
      <Routes>
       <Route path="/mainnet" element={<Homepage />} />
      </Routes>
    </Router>
    <Footer />
   </>
  )
}

export default App

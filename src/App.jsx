import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    {/* <Dropbar /> */}
    <Router>
      <Routes>
       <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
    <Footer />
   </>
  )
}

export default App

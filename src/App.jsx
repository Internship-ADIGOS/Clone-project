import { useState } from 'react'
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Transactions from './components/Transactions';
import Blocks from './components/Blocks';

function App() {


  return (
    <>
    <Navbar />
    <Router>
      <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/transactions" element={<Transactions />} />
       <Route path="/blocks" element={<Blocks />} />
      </Routes>
    </Router>
    <Footer />
   </>
  )
}

export default App

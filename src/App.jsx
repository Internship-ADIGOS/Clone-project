import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Transactions from './components/Transactions'
import Blocks from './components/Blocks';

function App() {


  return (
    <>
    <Navbar />
    <Router>
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route exact path="/transactions" element={<Transactions />} />
       <Route exact path="/blocks"  element={<Blocks />} />
      </Routes>
    </Router>
    <Footer />
   </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
       <Route path="/mainnet" element={<Homepage />} />
       <Route path='/mainnet/transactions' element={<Transactions />} />
       <Route path='/mainnet/blocks' element={<Blocks />} />
      </Routes>
    </Router>
    <Footer />
   </>
  )
}

export default App

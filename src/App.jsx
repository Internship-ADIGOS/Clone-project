import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
       <Route path="/home" element={<Homepage />} />
       <Route path='/oops' element={<h1>OOps!</h1>} />
      </Routes>
    </Router>
   </>
  )
}

export default App

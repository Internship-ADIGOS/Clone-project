import { React, useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Home/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Transactions from './components/Transactions'
import Blocks from './components/Blocks';
import { TransactionDetails } from './components/TransactionDetails';
import AddressDetails from './components/AddressDetails';


function App() {

 const [hash, setHash] = useState(null)
 
//  function handle

  return (
    <>
    <Navbar />
    <Router>
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route exact path="/transactions" element={<Transactions />} />
       <Route exact path="/blocks"  element={<Blocks />} />
       {/* export the data.hash here */}
       <Route exact path={ "/transactions/:transactionId"} element={<TransactionDetails />} />
       <Route exact path={"/transactions/address/:addressId"} element={<AddressDetails />} /> 
    </Routes>
    </Router>
    <Footer />
   </>
  )
}

export default App

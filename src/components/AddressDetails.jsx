import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'



const AddressDetails = () => {

  const [data, setData] = useState([])
  const [tsx, setTsx] = useState([])
  //calling the api 
  function getBalance(){
    //headers
    const headers = {
      address: window.location.pathname.slice(22)
    }
    axios.post("http://142.93.219.125:8095/v1/get_balance", headers)
  .then(response =>{
    console.log(response.data)
    setData(response.data)
  })

    axios.post("http://142.93.219.125:8095/v1/get_addresstransactions", headers)
  .then(response =>{
    console.log(response.data)
    setTsx(response.data.transactions)
  })
 }



 useEffect(()=>{
  getBalance()
  console.log(window.location.pathname.slice(22))
 }, [])

  return (
    <div className='h-full m-8 shadow-xl font-nunito'>
      <div className='space-y-4'>
        <div className='flex-col m-2 p-4 space-y-4'>
        <h5 className='text-slate-700 text-sm md:text-base lg:text-2xl py-2'>Address Details</h5>
          <h1>{window.location.pathname.slice(22)}</h1>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Balance</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base text-slate-700'>
              {data.balance} mCoin</h1>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Tokens</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base' ></h1>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Transactions</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base' ></h1>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Transfers</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base text-slate-700'></h1>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Gas Used</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'></a>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Last Balance Update</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'></a>
            </div>
          </div>    
        </div>
      </div>
      {/* Transactions address  */}
    <div className='shadow-xl m-2'>
      <div className='flex text-base lg:text-xl text-slate-700 ml-3'>
    <h1 className=''>Transactions Details:</h1>
      </div>
      
 { tsx.map((data, index)=>{
  return(
   <div className="block md:flex" key={index}>
      <div className='w-1/6 h-22 border-2 py-4 my-2 rounded-l-md border-l-4 border-teal-900 bg-lime-200'>
          <div className='block space-y-2'>
             <h1 className='text-center font-bold text-xl'>Transaction</h1>
             <h1 className='text-center'>Success</h1>
          </div>
            </div>
            <div className='w-full h-18 my-2 border-2 border-slate-200 mr-12 rounded-r-md py-12 px-4'>
            <Link to={"transactions/" + data.hash} className="hover:underline">{data.hash}</Link>
             <div className='flex space-x-4'>
             <Link to={"transactions/address/" + data.fromaddress} className="hover:underline">{data.fromaddress}</Link>
                    <BsArrowRight className='mt-1'/>
            <Link to={"transactions/address/" + data.toaddress} className="hover:underline">{data.toaddress}</Link>
             </div>
             
             <div className='flex space-x-4'>
             <h1 className='flex'></h1>
             <h1 className='flex'>xDai</h1>
             <h1 className='flex mt-1'><BsArrowRight /></h1>
             <h1 className='flex'>mCoin</h1>
             </div>
            <div className='flex'>
              <h1>{data.block_number}</h1>
              <h1>{data.timestamp}</h1>
            </div>
            </div>
      </div>
 )}
 )}
    </div>

</div>
    
  )
}

export default AddressDetails
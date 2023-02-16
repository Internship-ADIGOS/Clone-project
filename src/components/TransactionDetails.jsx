import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CiShare1 } from "react-icons/ci"
import {AiFillCheckCircle} from "react-icons/ai"

export const TransactionDetails = () => {

  const [hash, setHash] = useState([])
  const [data, setData] = useState([])
  //here api will be called
  async function getTransactionDetails() {
    
    
    const headers = {
      hash: window.location.pathname.slice(1)
    }

    //calling the api
    axios.post("http://142.93.219.125:8095/v1/get_transactionbyhash", headers)
    .then(response =>{
      console.log(response.data.result);
      setData(response.data.result)
    })
  }

  useEffect(()=>{
   getTransactionDetails()
   console.log(window.location.pathname)
  },[])
  return (
    <div className='h-full m-8 shadow-lg '>
      <div className='space-y-4'>
        <h5 className='text-slate-700 text-sm md:text-base lg:text-xl'>Transaction Details</h5>
        <div className='flex space-x-1 md:space-x-2'>
          <a href="" className='flex text-green-900 text-sm  md:text-base lg:text-lg '>Open in Tenderly</a>
          <CiShare1 className='text-sm md:text-xl mt-1' />
        </div>
        <div className='flex-col m-2 p-8 space-y-4'>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Transaction hash</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base text-slate-700'>
              {data.hash}</h1>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Result</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base text-green-700 mt-1'><AiFillCheckCircle /></h1>
            <h1 className='break-all  text-xs md:text-base text-green-700'>Success</h1>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Status</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base text-green-500 bg-green-200 rounded-md p-1'>Confirmed</h1>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Block</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'>{data.blocknumber}</a>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>TimeStamp</h1>
            </div>
            <div className='flex'>
            <h1 href='' className='break-all  text-xs md:text-base text-slate-700'>{data.timestamp}</h1>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>From</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'>{data.fromaddress}</a>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>To</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'>{data.toaddress}</a>
            </div>
          </div>
          <div className='block md:flex  lg:mr-12'>
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Value</h1>
            </div>
            <div className='flex'>
            <h1 className='break-all  text-xs md:text-base text-slate-700'>{data.amount/1000000000000000000} mCoin</h1>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Transaction price</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'></a>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Gas Price</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'></a>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Gas Limit</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'></a>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Gas Used By Transaction</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'></a>
            </div>
          </div>
          <div className='block md:flex lg:mr-12'> 
            <div className='flex mr-12 w-48'>
            <h1 className='text-xs md:text-base'>Nonce Position</h1>
            </div>
            <div className='flex'>
            <a href='' className='break-all  text-xs md:text-base text-slate-700'>6203</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

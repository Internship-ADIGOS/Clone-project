import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {BsArrowRight} from "react-icons/bs"

const Transactions = () => {

  const [data, setData] = useState([])

  async function getDetails(){

    axios.get("http://142.93.219.125:8095/v1/get_latesttransactions")
    .then(response =>{
      setData(response.data.result)
    })
  }

  useEffect(()=>{
   getDetails()
  },[])

  return (
    <div className='h-full m-8 shadow-lg rounded-lg m-12 object-fill'>
    <div className='flex-col object-fill'>
        <h1 className='inline mx-6  text-2xl text-slate-500'>Transactions</h1>
        <a href="/transactions" className='inline p-3 border-2 text-teal-900 border-teal-700 hover:bg-teal-900 rounded-md hover:text-white float-right mr-8'>View All Transactions 
    </a>
    <div className='flex-row w-full justify-evenly pt-12 text-slate-700'>
     {data.map((data, index)=>{
         if(index >= 4){
          return;
         }else{
           return(
             <div className={`flex  justify-between w-full m-4`} key={data}>
            <div className={`w-1/6 h-18 border-2 py-12 my-2 rounded-l-md border-l-4 border-teal-900 bg-lime-200`}>
             <h1 className='text-center items-center'>Transaction</h1>
             <h1 className='text-center items-center'>Success</h1>
            </div>
            <div className='w-full h-18 my-2 border-2 border-slate-200 mr-12 rounded-r-md py-12 px-4'>
             <a href={data.hash} className='hover:underline'>{data.hash}</a>
             <div className='flex space-x-4'>
             <h1 className='flex'>{data.fromaddress}</h1>
             <h1 className='flex mt-1'><BsArrowRight/></h1>
             <h1 className='flex'>{data.toaddress}</h1>
             </div>
             
             <div className='flex space-x-4'>
             <h1 className='flex'>{data.amount/1000000000000000000}</h1>
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
        )
      }
     })}
    </div>
    </div>
</div>
)
}

export default Transactions
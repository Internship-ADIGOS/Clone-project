import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {BsArrowRight} from "react-icons/bs"
import { createContext } from 'react'
import { RxValue } from 'react-icons/rx'

const Transactions = () => {

  //useState
  const [data, setData] = useState([])
  const [hash, setHash] = useState([])

  async function getDetails(){

    axios.get("http://142.93.219.125:8095/v1/get_latesttransactions")
    .then(response =>{
      console.log(response.data.result)
      setData(response.data.result)
      setHash(response.data.result.hash)
    })
  }

  //context
  // const MyContext = createContext()
  // <MyContext.provider>
  //   value={{hash}}
  // </MyContext.provider>
  
  useEffect(()=>{
   getDetails()
  },[])

  return (
    <div>
      <div className='h-full m-8 shadow-lg rounded-lg m-12 object-fill'>
        <div className='flex-col object-fill'>
          <h1 className='inline mx-6  text-2xl text-slate-500'>Transactions</h1>
          <div className='flex-row w-full justify-evenly pt-12 text-slate-700'>
            {data.map((data, index) => {
              return (
                <div className={`flex w-full m-4 overflow-hidden space-x-4 `} key={index}>
                  <div className={"w-1/6 h-18 border-2 py-12 my-2 rounded-l-md border-l-4 border-teal-900 bg-lime-100 overflow-hidden space-y-4 text-black"}>
                    <h1 className='text-center items-center'>Transactions</h1>
                    <h1 className='text-center items-center'>Success</h1>
                  </div>
                  <div>
                  </div>
                  <div className='w-full flex justify-between h-18 my-2 border-2 border-slate-200 mr-12 rounded-r-md py-10 px-4 space-x-4 overflow-hidden'>
                    <div className='flex-col space-y-4'>
                    <div className='flex justify-between space-x-12'>
                    <a href={data.hash} className="hover:underline">{data.hash}</a> {/*hash*/} 
                    </div>
                    <div className='flex space-x-8'>
                    <h1>{data.fromaddress}</h1>  {/*address from*/} 
                    <BsArrowRight className='mt-1'/>
                    <h1> {data.toaddress}</h1>  {/*adress to*/} 
                    </div>
                    </div>
                    <div className='flex space-x-4'>
                    <h1 className='flex'>{data.amount/1000000000000000000}</h1> {/*Amount*/} 
                    <h1 className='flex'>xDai</h1> {/*Amount*/} 
                    <h1 className='flex mt-1'><BsArrowRight /></h1> {/*Amount*/} 
                    <h1 className='flex'>mCoin</h1> {/*Amount*/} 
                    </div>
                    <div className='px-2'>
                    <h1>Block <br />#{data.blocknumber}</h1> {/*block Number*/} 
                    <h5>{data.timestamp}</h5>  {/*time*/} 
                  </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Transactions = () => {

  //useState
  const [data, setData] = useState([])

  // let TsxData = [
  //   {
  //     name: "Contract call",
  //     status: "success",
  //     from_address: "0xE1cF7ca11B35D5391905abdf1A118063f5a09DA6",
  //     to_address: "0x9405D6cfAB44D68C2BACa2273E5c3F107a88D16c",
  //     hash: "0xf4db910e69b617deec41ab6193ab6084d904e756a4ecf2df3dbf4edf9e80bb15",
  //     token: "0 xDai 0.00089139000415982 TX Fee",
  //     color: "lime",
  //     block_number:"#76732685",
  //     time:"6"
  //   },
  // ]

  async function getDetails(){

    axios.get("http://142.93.219.125:8095/v1/get_latesttransactions")
    .then(response =>{
      console.log(response.data.result[0])
      setData(response.data.result)
    })
  }

  useEffect(()=>{
   getDetails()
  },[])

  return (

    <div>
      <div className='h-full m-8 shadow-lg rounded-lg shadow-lg m-12 object-fill'>
        <div className='flex-col object-fill'>
          <h1 className='inline mx-6  text-2xl text-slate-500'>Transactions</h1>
          <div className='flex-row w-full justify-evenly pt-12 text-slate-700'>
            {data.map((data) => {
              return (
                <div className={`flex w-full m-4 overflow-hidden space-x-4 `}>
                  <div className={"w-1/6 h-18 border-2 py-12 my-2 rounded-l-md border-l-4 border-teal-900 bg-lime-100 overflow-hidden space-y-4 text-black"}>
                    <h1 className='text-center items-center'>Transactions</h1>
                    <h1 className='text-center items-center'>Success</h1>
                  </div>
                  <div>
                  </div>
                  <div className='w-full flex justify-between h-18 my-2 border-2 border-slate-200 mr-12 rounded-r-md py-10 px-4 space-x-4 overflow-hidden'>
                    <div className='flex-col space-y-4'>
                    <div className='flex justify-between space-x-12'>
                    <h1>{data.hash}</h1> {/*hash*/} 
                    </div>
                    <div className='flex space-x-8'>
                    <h1>{data.fromaddress}</h1>  {/*address from*/} 
                    <h1>---></h1>
                    <h1> {data.toaddress}</h1>  {/*adress to*/} 
                    </div>
                    </div>
                    <div className='px-2'>
                    <h1>{data.amount/1000000000000000000} xDai -> mCoin</h1> {/*Amount*/} 
                    </div>
                    <div className='px-2'>
                    <h1>Block <br />#{data.blocknumber}</h1> {/*block Number*/} 
                    <h5>{data.timestamp/60} minutes ago</h5>  {/*time*/} 
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
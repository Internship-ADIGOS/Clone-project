import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Blocks = () => {

    const [data, setData] = useState([])

    async function getDetails(){
     axios.get("http://142.93.219.125:8095/v1/get_latestblocks")
     .then(response=>{
        console.log(response.data.result)
        setData(response.data.result)
      }
     )
  }
  
  useEffect(()=>{
    getDetails()
  }, [])

  return (
    <div>
      <div className='h-full m-8 shadow-lg rounded-lg shadow-lg m-12 object-fill'>
        <div className='flex-col object-fill'>
          <h1 className='inline mx-6  text-2xl text-slate-500'>Blocks</h1>
          <div className='flex-row w-full justify-evenly pt-12 text-slate-700'>
            {data.map((data) => {
              return (
                <div className={`flex w-full m-4 overflow-hidden`} key={data}>
                  <div className={`w-1/6 h-18 border-2 py-12 my-2 rounded-l-md border-l-4 border-teal-900 bg-lime-200 overflow-hidden`}>
                    <h1 className='text-center items-center'>{data.block_number}</h1>
                    <h1 className='text-center items-center'>Block</h1>
                  </div>
                  <div>
                  </div>
                  <div className='w-full flex justify-between h-18 my-2 border-2 border-slate-200 mr-12 rounded-r-md py-10 px-4 overflow-hidden'>
                    <div className=' parent flex-col w-full'>
                    <div className='child-1 flex space-x-2'>
                    {/* <h5>{data.hash} transactions</h5> */}
                    {/* <h5>{data.time} seconds ago</h5> */}
                    </div>
                    
                    <div className='child-2 w-full'>
                    <h2>Validator: {data.hash}</h2>
                    </div>
                    </div>

                    <div className='w-1/3'>
                    <h5>{data.priority_fee} xDai priority fee</h5>
                    <h5>{data.burnt_fee} xDai burnt fee</h5>
                    <h5>{data.gas_limit} gas limit</h5>
                    <h5>{data.gas_used} gas used</h5>
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

export default Blocks
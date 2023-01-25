import React from 'react'
import download from "../media/download.png"
import Card from './Card'
import Data from './Data'

const Chart = () => {
  
  const miniData = [
    {
      id:1,
      name:"xDai Price",
      price:"$0.999159",
    },
    {
      id:2,
      name:"Total Value Locked",
      price:"$153.46M "
    },
    {
      id:3,
      name:"Gas Tracker",
      price:"2.92 Gwei"
    },
    {
      id:4,
      name:"Daily Transactions",
      price:"$47,773"
    }
  ]
  const dataCard = Data.map((data)=>{
    return(
      <Card 
      key={data}
      title={data.title}
      time={data.time}

      />
    )
  })
  return (
    <div className='h-84 flex bg-gradient-to-b from-dark to-light p-2 py-4'>
      <div className='w-1/2'>
      <img src={download} className="w-5/6 h-48 "/>
      <div className='flex justify-between'>
       {miniData.map((data)=>{
        return(
          <div className='flex w-48 h-32 items-center'>
          <span className='h-12 w-1 rounded-lg mx-4 bg-white inline-block align-middle'></span>
          <div className='inline w-48'>
              <h2 className='text-sky-300'>{data.name}</h2>
              <h1 className='text-white'>{data.price}</h1>
          </div>
      </div>
        )
       })}
      </div>
      </div>
      <div className='flex bg-light inline w-2/3 mt-12 rounded-lg items-center'>
         {dataCard}
      </div>

    </div>
  )
}

export default Chart
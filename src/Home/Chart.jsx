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
      color:"blue"
    },
    {
      id:2,
      name:"Total Value Locked",
      price:"$153.46M ",
      color: "blue"
    },
    {
      id:3,
      name:"Gas Tracker",
      price:"2.92 Gwei",
      color: "yellow"
    },
    {
      id:4,
      name:"Daily Transactions",
      price:"$47,773",
      color:'yellow'
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
    <div className='h-80 flex bg-gradient-to-b from-dark to-light p-2 py-4 object-fill'>
      <div className='w-1/2 md:text-sm '>
      <img src={download} className="lg:w-5/6 h-48 "/>
      <div className='flex justify-between'>
       {miniData.map((data)=>{
        return(
          <div className='flex w-48 h-32 items-center' key={data}>
          <span className={`h-12 w-1 rounded-lg mx-4 bg-white inline-block align-middle bg-${data.color}-400`}></span>
          <div className='inline w-48 md:w-12 sm:w-8'>
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
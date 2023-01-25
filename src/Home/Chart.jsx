import React from 'react'
import download from "../media/download.png"
import Card from './Card'
import Data from './Data'

const Chart = () => {
  
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
    <div className='h-72 flex bg-gradient-to-b from-dark to-light'>
      <div className='w-1/2'>
      <img src={download} className="w-full h-48"/>
      </div>
      <div className='flex bg-light inline w-2/3 mt-12 rounded-lg items-center'>
         {dataCard}
      </div>

    </div>
  )
}

export default Chart
import React from 'react'

const Blocks = () => {
    const blockData = [
        {
            no:121321212,
            transaction: 2,
            time: 2,
            validator: "0x0000000000000000000000000000000000000000"
        },
        {
            no:121321212,
            transaction: 2,
            time: 2,
            validator: "0x0000000000000000000000000000000000000000"
        },
        {
            no:121321212,
            transaction: 2,
            time: 2,
            validator: "0x0000000000000000000000000000000000000000"
        },
        {
            no:121321212,
            transaction: 2,
            time: 2,
            validator: "0x0000000000000000000000000000000000000000"
        },
    ]
  return (
    <div className='h-96 m-8 rounded-lg shadow-lg m-12 overflow-hidden'>
        <div className='flex-col '>
            <h1 className='inline mx-6  text-2xl text-slate-500'>Blocks</h1>
            <a href="mainnet/blocks" className='inline p-3 border-2 text-teal-900 border-teal-700 hover:bg-teal-900 rounded-md hover:text-white float-right mr-8'>
             View All Blocks
           </a>
        <div className='flex w-full justify-evenly pt-24 text-slate-700'>
         {blockData.map((data)=>{
            return(
                <div className='flex-col w-96 m-2 p-2 shadow-lg border-2 border-teal-900 border-l-4 rounded-md'>
                    <h1 className='flex'>{data.no}</h1>
                    <div className='flex mt-8'>
                    <p className=' text-slate-500'>{data.transaction} Transactions</p>
                    <p className='px-2  text-slate-500'>{data.time} seconds ago</p>
                    </div>
                    <h1 className='truncate'>validator: {data.validator}</h1>
                </div>
            )
         })}
        </div>
        </div>
    </div>
  )
}

export default Blocks
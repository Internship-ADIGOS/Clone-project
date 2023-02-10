import React from 'react'

const Blocks = () => {

    let blockData = [
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
       {
        code:"#232423232",
        no:2,
        bytes:332,
        time:3,
        validator:"0x00000000000000000000000000000000000",
        priority_fee: 0.0004739,
        burnt_fee:0.4343323,
        gas_limit:439049,
        gas_used:0.443
    },
    ]
  return (
    <div>
      <div className='h-full m-8 shadow-lg rounded-lg shadow-lg m-12 object-fill'>
        <div className='flex-col object-fill'>
          <h1 className='inline mx-6  text-2xl text-slate-500'>Blocks</h1>
          <div className='flex-row w-full justify-evenly pt-12 text-slate-700'>
            {blockData.map((data) => {
              return (
                <div className={`flex w-full m-4 overflow-hidden`}>
                  <div className={`w-1/6 h-18 border-2 border-green-300 py-12 my-2 rounded-l-md border-l-4 border-teal-900 bg-${data.color}-200 overflow-hidden`}>
                    <h1 className='text-center items-center'>{data.code}</h1>
                    <h1 className='text-center items-center'>Block</h1>
                  </div>
                  <div>
                  </div>
                  <div className='w-full flex justify-between h-18 my-2 border-2 border-slate-200 mr-12 rounded-r-md py-10 px-4 overflow-hidden'>
                    <div className=' parent flex-col w-full'>
                    <div className='child-1 flex space-x-2'>
                    <h5>{data.no} transactions</h5>
                    <h5>{data.bytes} bytes</h5>
                    <h5>{data.time} seconds ago</h5>
                    </div>
                    
                    <div className='child-2 w-full'>
                    <h2>Validator {data.validator}</h2>
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
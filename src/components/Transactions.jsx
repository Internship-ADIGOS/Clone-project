import React from 'react'

const Transactions = () => {

  let TsxData = [
    {
      name: "Contract call",
      status: "success",
      address: "0xE1cF7ca11B35D5391905abdf1A118063f5a09DA6 → 0x9405D6cfAB44D68C2BACa2273E5c3F107a88D16c",
      trasaction_id: "0xf4db910e69b617deec41ab6193ab6084d904e756a4ecf2df3dbf4edf9e80bb15",
      token: "0 xDai 0.00089139000415982 TX Fee",
      color: "lime",
      code:"#76732685",
      time:"6"
    },
    {
      name: "Contract call",
      status: "success",
      address: "0xE1cF7ca11B35D5391905abdf1A118063f5a09DA6 → 0x9405D6cfAB44D68C2BACa2273E5c3F107a88D16c",
      trasaction_id: "0xf4db910e69b617deec41ab6193ab6084d904e756a4ecf2df3dbf4edf9e80bb15",
      token: "0 xDai 0.00089139000415982 TX Fee",
      color: "pink",
      code:"#34534334",
      time:"4"
    },
    {
      name: "Transaction",
      status: "success",
      address: "0xE1cF7ca11B35D5391905abdf1A118063f5a09DA6 → 0x9405D6cfAB44D68C2BACa2273E5c3F107a88D16c",
      trasaction_id: "0xf4db910e69b617deec41ab6193ab6084d904e756a4ecf2df3dbf4edf9e80bb15",
      token: "0 xDai 0.00089139000415982 TX Fee",
      color: "pink",
      code:"#34534334",
      time:"3"
    },
    {
      name: "Contract call",
      status: "success",
      address: "0xE1cF7ca11B35D5391905abdf1A118063f5a09DA6 → 0x9405D6cfAB44D68C2BACa2273E5c3F107a88D16c",
      trasaction_id: "0xf4db910e69b617deec41ab6193ab6084d904e756a4ecf2df3dbf4edf9e80bb15",
      token: "0 xDai 0.00089139000415982 TX Fee",
      color: "lime",
      code:"#34534334",
      time:"2"
    }
  ]

  return (

    <div>
      <div className='h-full m-8 shadow-lg rounded-lg shadow-lg m-12 object-fill'>
        <div className='flex-col object-fill'>
          <h1 className='inline mx-6  text-2xl text-slate-500'>Transactions</h1>
          <div className='flex-row w-full justify-evenly pt-12 text-slate-700'>
            {TsxData.map((data) => {
              return (
                <div className={`flex w-full m-4 overflow-hidden space-x-4 `}>
                  <div className={`w-1/6 h-18 border-2 border-green-200 py-12 my-2 rounded-l-md border-l-4 border-teal-900 bg-${data.color}-200 overflow-hidden`}>
                    <h1 className='text-center items-center'>{data.name}</h1>
                    <h1 className='text-center items-center'>{data.status}</h1>
                  </div>
                  <div>
                  </div>
                  <div className='w-full flex justify-between h-18 my-2 border-2 border-slate-200 mr-12 rounded-r-md py-10 px-4 space-x-4 overflow-hidden'>
                    <div className='flex space-x-4'>
                    <h1>{data.address}</h1>
                    <h1>{data.trasaction_id}</h1>
                    <h1>{data.token}</h1>
                    </div>
                    <div className='px-2'>
                    <h1>Block {data.code}</h1>
                    <h5>{data.time} minutes ago</h5>
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
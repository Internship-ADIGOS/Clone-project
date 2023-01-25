import React from 'react'

const Card = (props) => {
  return (
    <div className='flex w-56 px-4'>
        <span className='h-16 w-1 rounded-lg mx-4 bg-white inline-block align-middle'></span>
        <div className='inline'>
            <h2 className='text-sky-300'>{props.title}</h2>
            <h1 className='text-white'>{props.time}</h1>
        </div>
    </div>
  )
}

export default Card
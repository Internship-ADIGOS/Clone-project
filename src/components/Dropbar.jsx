import React from 'react'
import {BsLink45Deg} from "react-icons/bs"
import {GiTwoCoins} from "react-icons/gi"
import {BsStack} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'
import { useState } from 'react'


const Dropbar = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(!open)
    }

    const name = [
        "Blockchain",
        "Tokens",
        "Apps",
        "Gnosis Chain"
    ]

    const icons = [
    <BsLink45Deg />,
    <GiTwoCoins />,
    <BsStack />,
    ]

  return (
    <div className='relative'>
        <button onClick={handleOpen}>BlockChain</button>
        {
            open ? (
                <ul className='absolute list-none mx-2 p-0 border-2'>
                    <li className='m-0 bg-slate-200 hover:bg-slate-400'>
                        <button className='w-full h-full text-left p-2 m-0 cursor-pointer '>Menu 1</button>
                    </li>
                    <li className='m-0 bg-slate-200 hover:bg-slate-400'>
                        <button className='w-full h-full text-left p-2 m-0 cursor-pointer '>Menu 2</button>
                    </li>
                    <li className='m-0 bg-slate-200 hover:bg-slate-400'>
                        <button className='w-full h-full text-left p-2 m-0 cursor-pointer '>Menu 3</button>
                    </li>
                </ul>
            ) : null
        }
        {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  )
}

export default Dropbar





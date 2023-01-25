import React from 'react'
import { useState } from 'react'
import logo from '../media/logo.svg'
import {BsLink45Deg} from "react-icons/bs"
import {GiTwoCoins} from "react-icons/gi"
import {BsStack} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'
import {IoMdArrowDropdown} from 'react-icons/io'



const Navbar = () => {


  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  const handleOpen1 = () =>{
    setOpen1(!open1)
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
  }
  const handleOpen2 = () =>{
    setOpen2(!open2)
    setOpen1(false)
    setOpen3(false)
    setOpen4(false)
  }
  const handleOpen3 = () =>{
    setOpen3(!open3)
    setOpen1(false)
    setOpen2(false)
    setOpen4(false)    
  }
  const handleOpen4 = () =>{
    setOpen4(!open4)
    setOpen1(false)
    setOpen2(false)
    setOpen3(false)
  }
  return (
    <div className='flex w-full h-22 bg-slate-100 text-slate-600'>
      {/* logo */}
      <div id='logo' className='w-2/4 px-3 p-2 m-2'>
        <img src={logo} alt="logo" />
      </div>
      
      <div className='flex p-2 w-full'>
        {/* blockchain  */}
        <div id="blockchain" className='inline px-2'>
          <button className='flex items-center p-3' onClick={handleOpen1}>
          <BsLink45Deg  className='text-xl mx-1'/>
          <h1>Blockchain</h1>
          <IoMdArrowDropdown />
          </button>
          { open1 ? (
           <div id="dropdown" className='bg-white rounded-md'>
            <ul className='p-1'>
              <h1 className='text-xl'>Blocks</h1>
              <li className='block px-4 py-1'><a>Blocks</a></li>
              <li className='block px-4 py-1'><a>Uncles</a></li>
              <li className='block px-4 py-1'><a>Forked blocks</a></li>
            </ul>
            <span className='block w-full bg-slate-200 h-0.5'></span>
            <ul className='p-1 bg-white rounded-md'>
              <h1 className='text-xl'>Transactions</h1>
              <li className='block px-4 py-1'><a>Validated</a></li>
              <li className='block px-4 py-1'><a>Pending</a></li>
            </ul>
           </div>
          ): null}
        </div>
        
        {/* token  */}
        <div id="token" className='inline px-2'>
          <button className='flex items-center p-3' onClick={handleOpen2}>
          <GiTwoCoins  className='text-xl mx-1'/>
          <h1>Token</h1>
          <IoMdArrowDropdown />
          </button>
          { open2 ? (
           <div id="dropdown" className='bg-white rounded-md'>
            <ul className='p-1'>
              <h1 className='text-xl'>Blocks</h1>
              <li className='block px-4 py-1'><a>Blocks</a></li>
              <li className='block px-4 py-1'><a>Uncles</a></li>
              <li className='block px-4 py-1'><a>Forked blocks</a></li>
            </ul>
            <span className='block w-full bg-slate-200 h-0.5'></span>
            <ul className='p-1 bg-white rounded-md'>
              <h1 className='text-xl'>Transactions</h1>
              <li className='block px-4 py-1'><a>Validated</a></li>
              <li className='block px-4 py-1'><a>Pending</a></li>
            </ul>
           </div>
        ): null}
        </div>
         {/* Apps  */}
        <div id="token" className='inline px-2'>
          <button className='flex items-center p-3' onClick={handleOpen3}>
          <BsStack  className='text-xl mx-1 text-slate-400'/>
          <h1>Apps</h1>
          <IoMdArrowDropdown />
          </button>
          { open3 ? (
           <div id="dropdown" className='bg-white rounded-md'>
            <ul className='p-1'>
              <h1 className='text-xl'>Blocks</h1>
              <li className='block px-4 py-1'><a>Blocks</a></li>
              <li className='block px-4 py-1'><a>Uncles</a></li>
              <li className='block px-4 py-1'><a>Forked blocks</a></li>
            </ul>
            <span className='block w-full bg-slate-200 h-0.5'></span>
            <ul className='p-1 bg-white rounded-md'>
              <h1 className='text-xl'>Transactions</h1>
              <li className='block px-4 py-1'><a>Validated</a></li>
              <li className='block px-4 py-1'><a>Pending</a></li>
            </ul>
           </div>
          ): null}
        </div>
        {/* gnosis  */}
        <div id="token" className='inline px-2'>
          <button className='flex items-center p-3' onClick={handleOpen4}>
          <GiTwoCoins  className='text-xl mx-1'/>
          <h1>Gnosis chain</h1>
          <IoMdArrowDropdown />
          </button>
          { open4 ? (
            <div id="dropdown" className='bg-white rounded-md'>
            <ul className='p-1'>
              <h1 className='text-xl'>Blocks</h1>
              <li className='block px-4 py-1'><a>Blocks</a></li>
              <li className='block px-4 py-1'><a>Uncles</a></li>
              <li className='block px-4 py-1'><a>Forked blocks</a></li>
            </ul>
            <span className='block w-full bg-slate-200 h-0.5'></span>
            <ul className='p-1 bg-white rounded-md'>
              <h1 className='text-xl'>Transactions</h1>
              <li className='block px-4 py-1'><a>Validated</a></li>
              <li className='block px-4 py-1'><a>Pending</a></li>
            </ul>
           </div>
             ): null}
        </div>

      </div>
     
      {/* dark theme */}
      <div className='inline text-3xl p-2'>
        <MdDarkMode />
      </div>

      <div className='flex p-2 w-64'>
      <div id="login" className='text-3xl inline px-1'>
       <CgProfile />
      </div>
      <div className='inline text-2xl w-28 text-center font-sans'>
       <a href='/signin'>Sign in</a>
      </div>
      </div>

      {/* serachbar */}
      <div id='input' className='flex inline px-3 outline-1 p-2 w-full'>
        <div className='text-3xl p-1'>
        <FiSearch />
        </div>
        <input className='w-full h-9 outline-0 bg-slate-200' placeholder='Search by adress, token symbol, name, transaction'/>
      </div>
    </div>
  )
}

export default Navbar
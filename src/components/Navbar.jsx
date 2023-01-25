import React from 'react'
import { useState } from 'react'
import logo from '../media/logo.svg'
import {BsLink45Deg} from "react-icons/bs"
import {GiTwoCoins} from "react-icons/gi"
import {BsStack} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {BsFillPersonFill} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import {IoMdArrowDropdown} from 'react-icons/io'
import {RxDotFilled} from "react-icons/rx"


const Navbar = () => {

  return (
    <div className='flex h-22 text-slate-600'>
      {/* logo */}
      <div id='logo' className='w-2/4 px-3 p-2 m-2'>
        <img src={logo} alt="logo" />
      </div>
      
      <div className='flex p-2 w-auto'>
        {/* blockchain  */}
        <div id="blockchain" className='inline px-2'>
          <button id="dropbtn" className='flex items-center p-3'>
          <BsLink45Deg  className='text-xl mx-1'/>
          <h1>Blockchain</h1>
          <IoMdArrowDropdown />
          </button>
           <div id="dropdown" className='bg-white rounded-md hidden hover:flex'>
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
        </div>
        
        {/* token  */}
        <div id="token" className='inline px-2'>
          <button className='flex items-center p-3'>
          <GiTwoCoins  className='text-xl mx-1'/>
          <h1>Token</h1>
          <IoMdArrowDropdown />
          </button>
           <div id="dropdown" className='bg-white rounded-md hidden'>
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
        </div>

         {/* Apps  */}
        <div id="Apps" className='inline px-2'>
          <button className='flex items-center p-3'>
          <BsStack  className='text-xl mx-1 text-slate-400'/>
          <h1>Apps</h1>
          <IoMdArrowDropdown />
          </button>
           <div id="dropdown" className='bg-white rounded-md hidden'>
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
        </div>

        {/* gnosis  */}
        <div id="Apps" className='inline px-4'>
          <button className='flex items-center p-3 w-52'>
          <RxDotFilled  className='text-xl mx-1 text-slate-400'/>
          <h1>Gnosis Chain</h1>
          <IoMdArrowDropdown />
          </button>    
           <div id="dropdown" className='bg-white rounded-md hidden '>
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
        </div>

      </div>
     
      {/* dark theme */}
      <div className='flex text-2xl p-2 items-center'>
        <MdDarkMode />
      </div>

      <div className='flex p-2 w-64 items-center'>
      <div className='flex text-xl w-28 items-center'>
       <BsFillPersonFill />
       <a href='/signin' className='font-sans text-base px-2'>Sign in</a>
      </div>
      </div>

      {/* serachbar */}
      <div id='input' className='flex inline px-3 outline-1 p-2 w-full items-center bg-slate-200'>
        <div className='text-3xl bg-slate-200'>
        <FiSearch />
        </div>
        <input className='w-full h-9 outline-0 bg-slate-200' placeholder='Search by adress, token symbol, name, transaction'/>
      </div>
    </div>
  )
}

export default Navbar
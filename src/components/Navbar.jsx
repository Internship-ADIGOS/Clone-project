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
      <div id='logo' className='block w-full p-2 m-2 md:flex md:w-1/4'>
        <img src={logo} alt="logo" className='object-fill md:text'/>
      </div>
      
      <div className='hidden md:flex md:p-2'>
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

      </div>
     
      {/* dark theme */}
      <div className='hidden md:flex text-2xl p-2 items-center'>
        <MdDarkMode />
      </div>

      <div className='hidden md:flex p-2 w-64 items-center'>
      <div className='flex text-xl w-28 items-center'>
       <BsFillPersonFill />
       <a href='/signin' className='font-sans text-base px-2'>Sign in</a>
      </div>
      </div>

      {/* searchbar */}
      <div id='input' className='hidden md:flex inline px-3 outline-1 p-2 w-full items-center bg-slate-200'>
        <div className='text-3xl bg-slate-200'>
        <FiSearch />
        </div>
        <input className='w-full h-9 outline-0 bg-slate-200' placeholder='Search by adress, token symbol, name, transaction'/>
      </div>

      <button className="block md:hidden -right-full py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200">
        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
        <div className='w-5 h-1 bg-gray-600'></div>

        <div className='absolute top-0 -right-full h-auto w-8/12 bg-white border opacity-0 sm:right-0 '>
          <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>
          <li className='hover:bg-gray-200 py-4 px-6 w-full'>Blockchain</li>
          <li className='hover:bg-gray-200 py-4 px-6 w-full'>Token</li>
          <li className='hover:bg-gray-200 py-4 px-6 w-full'>Apps</li>
          <li className='hover:bg-gray-200 py-4 px-6 w-full'>Gnosis chain</li>
          </ul>
        </div>
      </button>
    </div>
  )
}

export default Navbar
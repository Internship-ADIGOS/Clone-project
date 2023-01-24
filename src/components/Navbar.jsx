import React from 'react'
import logo from '../media/logo.svg'
import {BsLink45Deg} from "react-icons/bs"
import {GiTwoCoins} from "react-icons/gi"
import {BsStack} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='flex w-full h-22 bg-slate-200'>
      {/* logo */}
      <div id='logo' className='w-2/4 px-3 p-2 m-2'>
        <img src={logo} alt="logo" />
      </div>
      
      <div className='flex w-full p-2 m-2'>
      <div id='items' className='flex justify-evenly px-12'>
      <div id='blockchain' className='flex w-48 '>
        <div className='inline px-2 text-2xl'>
        <BsLink45Deg />
        </div>
        <h1 className='text-xl'>Blockchain</h1>
      </div>

      <div id='tokens' className='flex w-48'>
      <div className='inline px-2 text-2xl'>
        <GiTwoCoins />
      </div>
        <h1 className='text-xl'>Tokens</h1>
      </div>

      <div id='apps' className='flex w-48'>
      <div className='inline px-2 text-2xl'>
      <BsStack />
      </div>
      <h1 className='text-xl'>Apps</h1>
      </div>

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
       <a href='/signin'  >Sign in</a>
      </div>
      </div>



      {/* serachbar */}
      <div id='input' className='flex inline px-3 bg-slate-200 outline-1 p-2'>
        <div className='text-3xl p-1'>
        <FiSearch />
        </div>
        <input className='w-52 h-9 outline-0 bg-slate-200' placeholder='Search by adress, token symbol, name, transaction'/>
      </div>
    </div>
  )
}

export default Navbar
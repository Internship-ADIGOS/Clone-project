import React from 'react'
import { useState } from 'react'
import logo from '../media/logo.svg'
import { BsLink45Deg } from "react-icons/bs"
import { GiTwoCoins } from "react-icons/gi"
import { BsStack } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { RxDotFilled } from "react-icons/rx"


const Navbar = () => {

  const [show, setShow] = useState(true)

  function handleShow() {
    setShow(!show)
  }

  return (
    <div className='nav h-12 flex items-center'>
      {/* import logo */}
      <a id='logo' href='/mainnet' className='flex w-full cursor-pointer'>
        <img src={logo} alt="logo" className='w-20 p-1 md:w-28' />
      </a>

      <button className="block lg:hidden rounded m-1 hover:bg-gray-200 cursor-pointer"
        onClick={handleShow}
      >
        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
        <div className='w-5 h-1 bg-gray-600'></div>
      </button>

      {show && <div className='lg:hidden flex w-full absolute top-10 left- bg-white'>
        <ul className='flex-col w-full justify-evenly text-base cursor-pointer py-2'>
          <li className='hover:bg-gray-200 py-1 px-2 w-full '>
            <BsLink45Deg className='inline-block mx-1' />
            Blockchain
          </li>
          <li className='hover:bg-gray-200 py-1 px-2 w-full'>
            <GiTwoCoins className='inline-block mx-1' />
            Token
          </li>
          <li className='hover:bg-gray-200 py-1 px-2 w-full'>
            <BsStack className='inline-block mx-1' />
            Apps
          </li>
          <li className='hover:bg-gray-200 py-1 px-2 w-full'>
            <RxDotFilled className='inline-block mx-1' />
            Gnosis chain
          </li>
        </ul>
      </div>}

      <div className='items hidden lg:flex items-center justify-between space-x-4'>
        <div className='blockchain block items-center'>
          <button className='blockchain-btn flex items-center'>
            <BsLink45Deg />
            <h1>Blockchain</h1>
            <IoMdArrowDropdown />
          </button>
        </div>
        <div className='tokens block items-center'>
          <button className='tokens-btn flex items-center'>
            <BsLink45Deg className='' />
            <h1>Token</h1>
            <IoMdArrowDropdown />
          </button>
        </div>
        <div className='apps block items-center'>
          <button className='apps-btn flex items-center'>
            <BsLink45Deg className='' />
            <h1>Apps</h1>
            <IoMdArrowDropdown />
          </button>
        </div>
        <div className='Genosis block items-center'>
          <button className='genosis-btn flex items-center'>
            <RxDotFilled className='' />
            <h1 className=' w-28 text-base'>Genosis token</h1>
            <IoMdArrowDropdown />
          </button>
        </div>
      </div>

      {/* dark theme */}
      <div className='hidden lg:flex text-2xl p-2 items-center'>
        <MdDarkMode />
      </div>

      <div className='hidden lg:flex p-2 w-64 items-center'>
        <div className='flex text-xl w-28 items-center'>
          <BsFillPersonFill />
          <a href='/signin' className='font-sans text-base px-2'>Sign in</a>
        </div>
      </div>

      {/* searchbar */}
      <div id='input' className='hidden lg:flex inline px-3 outline-1 p-2 w-full items-center bg-slate-200'>
        <div className='text-3xl bg-slate-200'>
          <FiSearch />
        </div>
        <input className='w-full h-9 outline-0 bg-slate-200' placeholder='Search by adress, token symbol, name, transaction' />
      </div>
    </div>
  )
}

export default Navbar
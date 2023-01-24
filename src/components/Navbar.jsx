import React from 'react'
import logo from '../media/logo.svg'
import {BsLink45Deg} from "react-icons/bs"
import {GiTwoCoins} from "react-icons/gi"
import {BsStack} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'
import { Dropdown } from 'react-bootstrap'


const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='flex w-full h-22 bg-slate-200'>
      {/* logo */}
      <div id='logo' className='w-2/4 px-3 p-2 m-2'>
        <img src={logo} alt="logo" />
      </div>
      
      <div className='flex w-full p-2 m-2'>
      <div id='items' className='flex justify-evenly px-12'>
      <div id='blockchain' className='flex w-48 '>
        {/* <div className='inline px-2 text-2xl'>
        <BsLink45Deg />
        </div>
        <h1 className='text-xl'>
          Blockchain
        </h1>
      </div> */}
    <div>
    <a class="nav-link topnav-nav-link dropdown-toggle" href="#" id="navbarBlocksDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="nav-link-icon">
    <BsLink45Deg />
    </span>
    Blockchain
    </a>
    </div>
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

      {/* <div id='tokens' className='flex w-48'>
      <div className='inline px-2 text-2xl'>
        <GiTwoCoins />
      </div>
        <h1 className='text-xl'>Gnosis</h1>
      </div> */}
      
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
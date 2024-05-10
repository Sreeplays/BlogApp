import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink, NavbarBrand } from 'reactstrap'
import Blog from '../constants/SREEPLAYS-Logo.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome} from 'react-icons/ai'
const Header = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div>
      <Navbar className='px-2 md:pb-0 pb-4 flex w-full h-full justify-between backdrop-blur-0 border border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300 bg-slate-50 shadow-md'>
        <div>
          <div className="flex">
            <NavbarBrand className=''>
                 <NavLink href='/'><img src={Blog} alt="sreeplays" className='w-24 pt-5' /></NavLink>
            </NavbarBrand>
            <div className='my-4 hidden md:flex'>
              <div className='pl-6' > Blog</div>
              <div className='pl-6'>About</div>
              <div className='pl-6'>Contact</div>
            </div>
          </div>
        </div>
        <div className='md:hidden absolute top-4 right-1 cursor-pointer' onClick={handleClick}>
          {!nav ? (<AiOutlineMenu className=''/>) : (<AiOutlineClose className=' relative '/>)}
            
        </div>

      </Navbar>
      <div className={!nav ? 'hidden ease-in-out delay-500 relative border-none' : 'w-full ease-in-out pt-2 pr-2 delay-500 bg-slate-50 shadow-sm'}>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'><NavLink href='/' className='flex'>Home <AiOutlineHome className='w-6 mt-1' /></NavLink></div>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'><NavLink href='/blog'>Blog</NavLink></div>{/*  */}
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'>About</div>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'>Contact</div>
      </div>
    </div>
  )
}

export default Header
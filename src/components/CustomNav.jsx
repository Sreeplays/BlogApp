import React, { useState } from 'react'
import logo from '../assets/Sreelogo-1.jpg'
import { Navbar } from 'react-bootstrap'
import { NavLink, NavbarBrand } from 'reactstrap'
import Blog from '../assets/BlogApp.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome} from 'react-icons/ai'
const CustomNav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div>
      <Navbar className='px-2 flex w-full h-full justify-between backdrop-blur-0'>
        <div>
          <div className="flex">
            <NavbarBrand className=''>
                 <NavLink href='/'><img src={Blog} alt="sreeplays" className='w-16 flex' /></NavLink>
            </NavbarBrand>
            <div className='my-4 hidden md:flex'>
              <div className='pl-6'> Blog</div>
              <div className='pl-6'>About</div>
              <div className='pl-6'>Contact</div>
            </div>
          </div>
        </div>
        <div className='md:hidden absolute top-4 right-1 cursor-pointer' onClick={handleClick}>
          {!nav ? (<AiOutlineMenu className=''/>) : (<AiOutlineClose className=' relative '/>)}
            
        </div>

      </Navbar>
      <div className={!nav ? 'hidden ease-in-out delay-500 relative border-none' : 'w-full ease-in-out pt-2 pr-2 delay-500 bg-opacity-40'}>
        <div className='pl-5 border-b border-zinc-500'><NavLink href='/' className='flex'>Home <AiOutlineHome className='w-6 mt-1' /></NavLink></div>
        <div className='pl-5 border-b border-zinc-500'><NavLink href='/blog'>Blog</NavLink></div>{/*  */}
        <div className='pl-5 border-b border-zinc-500'>About</div>
        <div className='pl-5 border-b border-zinc-500'>Contact</div>
      </div>
    </div>
  )
}

export default CustomNav
import React, { useState } from 'react'
import logo from '../assets/Sreelogo-1.jpg'
import { Navbar } from 'react-bootstrap'
import { NavbarBrand } from 'reactstrap'
import Blog from '../assets/BlogApp.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const CustomNav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = setNav(!nav)
  return (
    <div>
      <Navbar className='px-2 flex w-full h-full justify-between backdrop-blur-0'>
        <div>
          <div className="flex">
            <NavbarBrand className=''>
                 <img src={Blog} alt="sreeplays" className='w-16 flex' />
            </NavbarBrand>
            <div className='my-4 hidden md:flex'>
              <div className='pl-6'> Blog</div>
              <div className='pl-6'>About</div>
              <div className='pl-6'>Contact</div>
            </div>
          </div>
        </div>
        <div className='md:hidden absolute right-1 top-6' onClick={handleClick}>
        {!nav ? (<AiOutlineMenu />) : (<AiOutlineClose className=' relative '/>)}
        </div>
      </Navbar>
    </div>
  )
}

export default CustomNav
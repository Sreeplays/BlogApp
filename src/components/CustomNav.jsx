import React from 'react'
import logo from '../assets/Sreelogo-1.jpg'
import { Navbar } from 'react-bootstrap'
import { NavbarBrand } from 'reactstrap'
import Blog from '../assets/BlogApp.png'
const CustomNav = () => {
    
  return (
    <div>
      <Navbar className='px-2 flex w-full h-full justify-between backdrop-blur-0'>
        <div>
          <div className="flex">
            <NavbarBrand className='w-10'>
                 <img src={Blog} alt="sreeplays" className='w-10 flex' />
            </NavbarBrand>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default CustomNav
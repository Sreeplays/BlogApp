import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Button, NavLink, NavbarBrand } from 'reactstrap'
import Blog from '../constants/SREEPLAYS-Logo.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome} from 'react-icons/ai'
import {AnimatePresence, motion} from 'framer-motion'
import {Divide as Hamburger} from 'hamburger-react'
const Header = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [isOpen, setOpen] = useState(false)

  // Flyoutcontent for desktop browsers

  const PagesLink = ({children, href, Content}) => {
    const [open, setOpen] = useState(false)
    const showContent = open && Content
    return (
      <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='group relative h-fit w-fit'
      >
        {/* Link animation and stuff */}
        <a href={href} className='pl-6'>
          {children}
          <span
          style={{
            transform: showContent ? "scaleX(1)" : "scaleX(0)",
          }}
          className='absolute -bottom-1 -right-2 left-4 h-1 origin-left rounded-full bg-sky-600 transition-transform duration-500 ease-out'/>
        </a>
        {/* Flyout Content */}
        <AnimatePresence>
        {showContent &&
         (
            <motion.div 
            initial={{opacity:0, y:15}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:15}}
            style={{x: "-50%"}}
            className='absolute left-10 top-11  bg-slate-100 text-black'>
              <div className='absolute -top-6 left-0 right-0 bg-transparent h-6'></div>
              <div className='absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 bg-slate-200 rotate-45'></div>
              <Content /> 
            </motion.div>
          )
        }
        </AnimatePresence>
      </div>
    )
  }

  // FlyoutContent for Pages is designed here and rendered in the children area

  const pageContent = () => {
    return (
      <div className='w-36 h-[88px] bg-slate-200 shadow-xl'>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'>About</div>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'>Contact</div>
      </div>
    )
  }
  return ( 
    <div>
      <Navbar className='px-2 md:pb-0 pb-4 flex w-full h-full justify-between backdrop-blur-0 border border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300 bg-slate-50 shadow-md'>
        {/* Desktop navbar */}
        <div>
          <div className="flex">
            <NavbarBrand className=''>
                 <NavLink href='/'><img src={Blog} alt="sreeplays" className='w-24 pt-5' /></NavLink>
            </NavbarBrand>
            <div className='my-4 hidden md:flex'>
              <div className='pl-6' > Blog</div>
              {/* Children and the content is passed through here to PagesLink CONSTANT */}
              <PagesLink href="#" Content={pageContent}>Pages</PagesLink>
              <div className='pl-6'>FAQ</div>
            </div>
              <div className='md:flex hidden pr-3 lg:right-10 right-14 fixed top-3'>
                <Button>Sign Up</Button>
              </div>
          </div>

        </div>
        <div className='md:hidden absolute top-1 right-1 cursor-pointer' onClick={handleClick}>
          {!nav ? <Hamburger toggled={isOpen} toggle={setOpen} size={20}/> : <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>}
            
        </div>

      </Navbar>
      {/* dropdown menu for mobiles */}
      <div className={!nav ? 'hidden transition-transform ease-in-out duration-500 relative border-none' : 'md:hidden w-full ease-in-out pt-2 pr-2 transition-transform duration-500 bg-slate-50 shadow-md  ${isNavExpanded ? "translate-x-0 " : "-translate-x-full"}'}>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'><NavLink href='/blog'>Blog</NavLink></div>
        <div className='pl-3 border-b pb-3 pt-2 font-bold border-b-gray-600  border-l-gray-300 border-r-gray-300'>Pages ⬇</div>
        <div className='pl-6 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'><li>About</li></div>
        <div className='pl-6 pt-2'><li>Contact</li></div>
        <div className='pl-3 border-b pb-3 pt-2 font-bold border-b-gray-600 rounded-md border-l-gray-300 border-r-gray-300'></div>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'>FAQ</div>
      </div>
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Button, NavLink, NavbarBrand } from 'reactstrap'
import images from '../constants/images'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome} from 'react-icons/ai'
import {AnimatePresence, motion} from 'framer-motion'
import {Divide as Hamburger} from 'hamburger-react'
import { BiDownArrow } from 'react-icons/bi'
import { FiArrowDown } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
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
        <button className='pl-6'>
          {children}
          <span
          style={{
            transform: showContent ? "scaleX(1)" : "scaleX(0)",
          }}
          className='absolute -bottom-1 -right-2 left-4 h-1 origin-left rounded-full bg-sky-600 transition-transform duration-500 ease-out'/>
        </button>
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
              <div className='absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 bg-slate-300 rotate-45'></div>
              <Content /> 
            </motion.div>
          )
        }
        </AnimatePresence>
      </div>
    )
  }

  const PagesLinkMob = ({children, ContentMob}) => {
    
    const [open, setOpen] = useState(false)
    const showContent = open && ContentMob
    return (
      <div
      onTouchEnd={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      className='group relative h-fit w-fit'
      >
        {/* Link animation and stuff */}
        <button className='pl-3'>
          {children}
          <span
          style={{
            transform: showContent ? "scaleX(1)" : "scaleX(0)",
          }}
          className='absolute -bottom-1 -right-2 left-4 h-1 origin-left rounded-full bg-sky-600 transition-transform duration-500 ease-out'/>
        </button>
        {/* Flyout Content */}
        <AnimatePresence>
        {showContent &&
         (
            <motion.div 
            initial={{opacity:0, y:15}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:15}}
            style={{x: "-50%"}}
            className='absolute left-[74px] top-11  bg-slate-100 text-black'>
              <div className='absolute -top-6 left-0 right-0 bg-transparent h-6'></div>
              <div className='absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 bg-slate-300 rotate-45'></div>
              <ContentMob /> 
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
      <div className='w-36 h-[90px] bg-slate-300 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl'>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'>About</div>
        <div className='pl-3 rounded-md'>Contact</div>
      </div>
    )
  }
  return ( 
    <div className='sticky top-0 left-0 right-0 z-50'>
      <Navbar className=' md:pb-0 pb-4 flex w-full h-full justify-between backdrop-blur-0 border border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300 bg-slate-50 shadow-md'>
        {/* Desktop navbar */}
        <div>
          <div className="flex">
            <NavbarBrand className=''>
                 <NavLink href='/'><img src={images.logo} alt="sreeplays" className='w-24 pt-5' /></NavLink>
            </NavbarBrand>
            <div className='my-4 hidden md:flex'>
              <div className='pl-6' > <NavLink href="/blog/:id">Blog</NavLink></div>
              {/* Children and the content is passed through here to PagesLink CONSTANT */}
              <PagesLink Content={pageContent}>Pages <IoIosArrowDown className='absolute left-16 top-1 ml-1 pl-0.5'/></PagesLink>
              <div className='pl-8'>FAQ</div>
            </div>
              <div className='md:flex hidden pr-3 lg:right-2 right-4 fixed top-1.5'>
                <Button className='text-[#1565D8] border border-[#1565D8] rounded-2xl px-3 py-2'>Sign Up</Button>
              </div>
          </div>

        </div>
        <div className='md:hidden absolute top-1 right-1 cursor-pointer' onClick={handleClick}>
          {!nav ? <Hamburger toggled={isOpen} toggle={setOpen} size={20}/> : <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>}
            
        </div>

      </Navbar>
      {/* dropdown menu for mobiles */}
      <AnimatePresence>
      <motion.div initial={{opacity:0, y: 8}} animate={{opacity:1, y: 0}} exit={{opacity:0, y: 8}} className={!nav ? 'hidden transition-transform ease-out duration-500 relative border-none' : 'md:hidden w-full ease-out pt-2 pr-2 transition-transform duration-500 bg-slate-50 shadow-md fixed'}>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'><NavLink href='/blog/:id'>Blog</NavLink></div>
        <PagesLinkMob href="javaScript:;" ContentMob={pageContent}>Pages <IoIosArrowDown className='absolute left-14 top-1/4 pl-0.5'/></PagesLinkMob>
        <div className='pl-3 border-b pb-3 font-bold border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'></div>
        <div className='pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300'>FAQ</div>
        <Button className='text-[#1565D8] border border-[#1565D8] rounded-lg px-3 py-1 mx-2 my-2'>Sign Up</Button>
      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Header
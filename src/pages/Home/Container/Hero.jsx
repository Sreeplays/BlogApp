import React from 'react'
import { Helmet } from 'react-helmet'
import images from '../../../constants/images'
import { Button } from 'reactstrap'
import { FiSearch } from 'react-icons/fi'
const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
      <div className='mt-10 lg:w-1/2'>
        <h1 className='font-roboto text-dark-soft text-4xl text-center font-extrabold md:text-6xl lg:text-left lg:max-w-[540px]'>Read. Reflect. Repeat.</h1>
        <p className='text-dark-light text-md text-center mt-4 md:text-xl lg:text-left'>Welcome to Sreeplays – Your Ultimate Hub for Engaging Reads! Dive into a world where every article is crafted to inspire, inform, and entertain. Whether you're here to explore new ideas, stay updated with the latest trends, or simply enjoy a good read, Sreeplays is your go-to destination. Happy reading!</p>
        <div className='flex flex-col gap-y-2 mt-10 relative items-center md:items-start'>
          <div className='relative'>
            <FiSearch className='absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#959EAD]'/>
            <input type="text" className='py-3 placeholder:font-bold placeholder:text-[#959EAD] font-semibold text-dark-soft pl-12 pr-[85px] md:items-center lg:items-start shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-xl focus:outline-none' placeholder='Search...'/>
          </div>
          <Button className='w-1/2 bg-primary text-white font-semibold rounded-lg px-4 py-3 md:absolute md:left-[228px] md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search !!</Button>
        </div>
        <div className='flex flex-col mt-4 lg:flex-row lg:mt-7 lg:flex-nowrap lg:gap-x-4 '>
          <span className='text-dark-light font-bold italic lg:text-lg text-md'>Popular Tags:</span>
          <ul className=' grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2'>
            <li className='text-[#1565D8] font-bold italic bg-[#1565D8]/20 border mb-4 md:px-2 py-1.5 rounded-xl text-center ' >Design</li>
            <li className='text-[#1565D8] font-bold italic bg-[#1565D8]/20 border mb-4 px-4 py-1.5 rounded-xl text-center' >Tech Related</li>
            <li className='text-[#1565D8] font-bold italic bg-[#1565D8]/20 border mb-4 px-2 py-1.5 rounded-xl text-center' >Events</li>
          </ul>
        </div>
      </div>
      <div className='hidden lg:block lg:w-1/2'>
        <img className='w-full' src={images.HeroImage} alt="Visitors reading a blog" />
      </div>
    </section>
  )
}

export default Hero
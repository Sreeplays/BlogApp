import React from 'react'
import images from '../constants/images'
import { BsCheck2, BsCheckLg, BsFileCheckFill } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
const Articles = ({className}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-4 md:gap-y-5 lg:gap-x-8 lg:gap-y-6 '>
      <div className={'rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ${className} '}>
        <img src={images.postImage} alt="Article Card Image" className='w-full object-cover object-center h-auto'/>
        <div className='p-6'>
          <h3 className='text-dark-soft font-bold text-3xl px-4' >Future Of Work</h3>
          <p className='text-dark-soft font-normal pt-3 px-4 text-md'>Majority of people will work in jobs that don't exist today !!</p>
          <div className='flex justify-between flex-nowrap items-center mt-6'>
            <div className='flex items-center gap-x-2'>
              <img src={images.userImage} alt="User" className='w-10'/>
              <div className='flex flex-col'>
                <h4 className='text-dark-soft font-bold italic text-sm'>Johanna Murray</h4>
                <div className='flex items-center gap-x-2 '>
                  <span className='bg-[#36B37E]/30 w-fit p-1 rounded-full'> 
                    <BsCheckLg className='w-3.5 h-3.5 text-[#36B37E] rounded-xl'/>
                  </span>
                  <span className='italic text-xs text-dark-light'>Verified writer</span>
                </div>
              </div>
            </div>
            <span className='italic font-bold text-dark-light text-sm'>02 May</span>
          </div>
        </div>
      </div>
      <div className={'rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ${className} '}>
        <img src={images.postImage} alt="Article Card Image" className='w-full object-cover object-center h-auto'/>
        <div className='p-6'>
          <h3 className='text-dark-soft font-bold text-3xl px-4' >Future Of Work</h3>
          <p className='text-dark-soft font-normal pt-3 px-4 text-md'>Majority of people will work in jobs that don't exist today !!</p>
          <div className='flex justify-between flex-nowrap items-center mt-6'>
            <div className='flex items-center gap-x-2'>
              <img src={images.userImage} alt="User" className='w-10'/>
              <div className='flex flex-col'>
                <h4 className='text-dark-soft font-bold italic text-sm'>Johanna Murray</h4>
                <div className='flex items-center gap-x-2 '>
                  <span className='bg-[#36B37E]/30 w-fit p-1 rounded-full'> 
                    <BsCheckLg className='w-3.5 h-3.5 text-[#36B37E] rounded-xl'/>
                  </span>
                  <span className='italic text-xs text-dark-light'>Verified writer</span>
                </div>
              </div>
            </div>
            <span className='italic font-bold text-dark-light text-sm'>02 May</span>
          </div>
        </div>
      </div>
      <div className={'rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ${className} '}>
        <img src={images.postImage} alt="Article Card Image" className='w-full object-cover object-center h-auto'/>
        <div className='p-6'>
          <h3 className='text-dark-soft font-bold text-3xl px-4' >Future Of Work</h3>
          <p className='text-dark-soft font-normal pt-3 px-4 text-md'>Majority of people will work in jobs that don't exist today !!</p>
          <div className='flex justify-between flex-nowrap items-center mt-6'>
            <div className='flex items-center gap-x-2'>
              <img src={images.userImage} alt="User" className='w-10'/>
              <div className='flex flex-col'>
                <h4 className='text-dark-soft font-bold italic text-sm'>Johanna Murray</h4>
                <div className='flex items-center gap-x-2 '>
                  <span className='bg-[#36B37E]/30 w-fit p-1 rounded-full'> 
                    <BsCheckLg className='w-3.5 h-3.5 text-[#36B37E] rounded-xl'/>
                  </span>
                  <span className='italic text-xs text-dark-light'>Verified writer</span>
                </div>
              </div>
            </div>
            <span className='italic font-bold text-dark-light text-sm'>02 May</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
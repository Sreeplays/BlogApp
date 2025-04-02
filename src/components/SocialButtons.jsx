import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'

const SocialButtons = ({url, title}) => {
  return (
    <div className=''>
        <h4 className='text-dark-hard font-roboto font-bold text-md md:text-xl px-2 pt-4 pb-[-16px]'>Share to:</h4>
        <div className='flex flex-row w-3'>
          <a href="/" className='mx-6' >
            <AiFillFacebook  className='w-16 h-10 fill-[#090081]'/>
          </a> 
          <a href="/" className='mx-6' >
            <AiFillInstagram  className='w-16 h-10 fill-orange-700'/>
          </a> 
          <a href="/" className='mx-6' >
            <AiFillTwitterCircle  className='w-16 h-10 fil-black'/>
          </a> 
        </div>
          
    </div>
  )
}

export default SocialButtons
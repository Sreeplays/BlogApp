import React from 'react'
import images from '../constants/images'
import stables from '../constants/stables'
import { BsCheck2, BsCheckLg, BsFileCheckFill } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
import {GoUnverified} from 'react-icons/go'
const Articles = ({post, className}) => {

  return (
    <div className=''>
    <div className={'rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'}>
      <img src={post.photo ? stables.PROFILE_PIC_DEFAULT_URL + post.photo : images.sampleImage} alt="Article Card Image" className='w-full object-cover object-center h-auto'/>
      <div className='p-6'>
        <h3 className='text-dark-soft font-bold text-3xl px-4' >{post.title}</h3>
        <p className='text-dark-soft font-normal pt-3 px-4 text-md'>{post.caption}</p>
        <div className='flex justify-between flex-nowrap items-center mt-6'>
          <div className='flex items-center gap-x-2'>
            <img src={post.user.avatar ? stables.PROFILE_PIC_DEFAULT_URL + post.user.avatar : images.sampleUserImage} alt="User" className='w-10 h-10 rounded-full object-cover'/>
            <div className='flex flex-col'>
              <h4 className='text-dark-soft font-bold italic text-sm'>{post.user.name}</h4>
              <div className='flex items-center gap-x-1.5 '>
                <span className={`${post.user.verified ? ' bg-[#36B37E]/30' : 'bg-[#fc4e4e]/30'} w-fit p-1 rounded-full`}>
                  {post.user.verified ? <BsCheckLg className='w-3.5 h-3.5 text-[#36B37E] rounded-xl'/> : <GoUnverified className='w-3.5 h-3.5 text-[#fc4e4e] rounded-xl'/>} 
                  
                </span>
                <span className='italic text-xs text-dark-light'>{post.user.verified ? "Verified" : "Unverified"} writer</span>
              </div> 
            </div>
          </div>
          <span className='italic font-bold text-dark-light text-sm'>{new Date(post.createdAt).getDate()} {new Date(post.createdAt).toLocaleString("default", {month: 'long'})} </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Articles
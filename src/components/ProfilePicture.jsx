import React from 'react'
import {HiOutlineCamera} from 'react-icons/hi'
import { stables } from '../constants'
const ProfilePicture = ({avatar}) => {
  return (
    <div className='w-full flex flex-row justify-center items-center gap-x-6'>
      <p className='text-base font-bold'>Photo:</p>
      <div className='relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 outline-primary overflow-hidden'>
        <label htmlFor="profilePicture" className='rounded-full absolute inset-0 cursor-pointer bg-transparent'>
            {avatar ? (
                <img src={stables.PROFILE_PIC_DEFAULT_URL + avatar} alt="profile" className='w-full h-full object-cover'/>
            ) : (
                <div className='w-full h-full bg-blue-50/50 flex justify-center items-center'>
                    <HiOutlineCamera className='w-10 h-10'/>
                </div>
            )}
        </label>
        <input type="file" className='sr-only' id='profilePicture'/>
      </div>
      {avatar && <button type="button" className='border border-red-500 text-red-500 rounded-lg py-1.5 px-4 mt-2 text-xs'>Delete</button>}
      
    </div>
  )
}

export default ProfilePicture

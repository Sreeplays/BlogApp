import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { stables } from '../constants'
import { useNavigate } from 'react-router-dom'
const ProfilePictureConst = ({avatar}) => {
  return (
    <>
    <div className='w-full flex flex-row justify-center items-center gap-x-6'>
      <p className='text-base font-bold'>Photo:</p>
      <div className='relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 outline-primary overflow-hidden'>
        <label htmlFor="profilePicture" className='rounded-full absolute inset-0 cursor-pointer bg-transparent'>
            {avatar ? (
                <img src={stables.PROFILE_PIC_DEFAULT_URL + avatar} alt="profile" className='w-full h-full object-cover'/>
            ) : (
                <div className='w-full h-full bg-blue-50/50 flex justify-center items-center'>
                    <FaUserCircle  className='w-10 h-10'/>
                </div>
            )}
        </label>
        <input type="file" className='sr-only' id='profilePicture' disabled={true} />
      </div>
      
    </div>
    </>
  )
}

export default ProfilePictureConst

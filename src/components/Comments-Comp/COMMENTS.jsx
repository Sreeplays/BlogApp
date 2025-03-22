import React from 'react'
import images from '../../constants/images'

const COMMENTS = ({comment}) => {
  return (
    <div className='flex flex-nowrap items-start p-4 rounded-xl bg-[#F2F4F5] gap-x-4'>
      <img src={images.userImage} alt="user profile" className='w-9 h-9 object-cover rounded-full' />
      <div className='flex-1 flex flex-col'>
        <h4 className='text-dark-hard text-sm font-semibold'>{comment.username}</h4>
        <span className='text-xs text-dark-light italic'>
          {new Date(comment.createdAt).toLocaleString('en-US', {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: 'numeric',
          })}
        </span>
        <p className='text-dark-light font-sm font-light '>{comment.des}</p>
      </div>
    </div>
  )
}

export default COMMENTS

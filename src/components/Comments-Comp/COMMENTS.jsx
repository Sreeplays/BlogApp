import React from 'react'
import {FiMessageSquare} from 'react-icons/fi'
import {FaEdit} from 'react-icons/fa'
import {MdDeleteOutline} from 'react-icons/md'
import images from '../../constants/images'
import CommentsForm from './commentsForm'

const COMMENTS = ({comment, loggedUserId, affectedComment, setaffectedComment, addComment, parentId = null}) => {
  const isUserLogged = Boolean(loggedUserId)
  const commentedUser = loggedUserId === comment.user_id
  const isReplying = affectedComment && affectedComment.type === 'replying' && affectedComment._id === comment._id
  const repliedParentId = parentId ? parentId : comment._id
  const repliedUserId = comment.user_id
  return (
    <div className='flex flex-nowrap items-start p-4 px-14 md:px-4 rounded-xl bg-[#F2F4F5] gap-x-4'>
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
        <p className='text-dark-light text-xm font-opensans font-light border-2 border-l-black border-r-transparent border-t-transparent border-b-transparent pl-4 mt-2.5 mb-2.5 rounded-sm'>{comment.des}</p>
        <div className='flex items-center gap-x-2 mt-3 mb-2 text-dark-light font-roboto font-light text-xm'>
          {
          isUserLogged && 
          <button className='flex items-center space-x-1.5' onClick={() => setaffectedComment({type: 'replying', _id: comment._id})}>
            <FiMessageSquare className='w-3.5 h-auto'/>
            <span>Reply</span>
          </button>
          }
          {commentedUser && 
            <>
              <button className='flex items-center space-x-1.5'>
                <FaEdit className='w-3.5 h-auto' />
                <span>Edit</span>
              </button>
              <button className='flex items-center space-x-1.5'>
                <MdDeleteOutline className='w-3.5 h-auto' />
                <span>Delete</span>
              </button>
            </>
          }
          
        </div>
        {isReplying && <CommentsForm btnLabel={'Submit'} formSubmitHandler={(value) => addComment(value, repliedParentId, repliedUserId)} formCancelHandler={() => setaffectedComment(null)}/>}
      </div>
    </div>
  )
}

export default COMMENTS

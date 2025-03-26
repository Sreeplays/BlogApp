import React, { useEffect, useState } from 'react'
import CommentsForm from './commentsForm'
import {getCommentsData} from '../../data/comments'
import COMMENTS from './COMMENTS'

const CommentsContainer = ({className, loggedUserId}) => {
  const [comment, setComment] = useState([])
  const mainComment = comment.filter((comments) => comments.parent == null)
  const [affectedComment, setaffectedComment] = useState(null)
  console.log(comment)

  useEffect(() => {
    (async () =>{
      const commentData = await getCommentsData ();
      setComment(commentData);
    })()
  }, [])

  const addComentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
      user_id: "a",
      username: "Mohammad Rezaii",
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: "2022-12-31T17:22:05.092+0000",
    }
    setComment((currentState) => {
      return [newComment, ...currentState]
    })
  }
  return (
    <div className={'${className}'}>
        <CommentsForm btnLabel="Send" formSubmitHandler ={(value) => addComentHandler(value)} />
        <div className='space-y-4 md:px-5 px-10 mt-5 mb-5'>
          {mainComment.map((comment) => ( 
              <COMMENTS key={comment._id} comment={comment} loggedUserId={loggedUserId} affectedComment={affectedComment} setaffectedComment={setaffectedComment} addComment={addComentHandler}/>
          ))}
        </div>
    </div>
  )
}

export default CommentsContainer
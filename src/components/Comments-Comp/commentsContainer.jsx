import React from 'react'
import CommentsForm from './commentsForm'

const CommentsContainer = ({className}) => {
  return (
    <div className={'${className}'}>
        <CommentsForm />
    </div>
  )
}

export default CommentsContainer
import React from 'react'

const ErrorHandler = ({message}) => {
  return (
    <div className='text-black border border-transparent bg-red-500 rounded-lg text-sm mx-auto px-4 py-2 max-w-md text-center w-full'>
      <p>{message}</p>
    </div>
  )
}

export default ErrorHandler

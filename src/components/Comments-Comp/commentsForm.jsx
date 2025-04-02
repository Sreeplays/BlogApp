import React from 'react'
import { useState } from 'react';

const CommentsForm = ({ btnLabel, formSubmitHandler, formCancelHandler, initialText }) => {
const [value, setValue] = useState(initialText)
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("") // Clear the input field after submission
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='flex flex-col items-end rounded-lg p-1 pr-11 md:pr-2 ' >
      <textarea id="" rows={7} className='text-black bg-transparent w-full focus:outline-blue-500 h-max-[250px] rounded-lg placeholder:px-1 placeholder:text-base px-5 mx-[-10px] py-5' placeholder='Leave a comment...' value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      <div className='flex items-centre gap-x-2'>
        {formCancelHandler && (
          <button className='border border-red-500 text-red-500 md:py-2.5 md:px-6 py-1 px-3 rounded-lg mb-4 mt-2' onClick={formCancelHandler}>
            Cancel
          </button>
        )}
        <button className='bg-primary text-white md:py-2.5 md:px-6 py-1 px-3 rounded-lg mb-4 mt-2' onSubmit={formSubmitHandler}>{btnLabel}</button>
      </div>
      
      </div>
    </form>
  )
}

export default CommentsForm
